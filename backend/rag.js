const axios = require("axios");
require("dotenv").config();

const data = require("./data/assistance");

// ---- SIMPLE EMBEDDING (mock using OpenRouter) ----
async function getEmbedding(text) {
  const res = await axios.post(
    "https://openrouter.ai/api/v1/embeddings",
    {
      model: "text-embedding-3-small",
      input: text
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`
      }
    }
  );

  return res.data.data[0].embedding;
}

// ---- COSINE SIMILARITY ----
function cosineSimilarity(a, b) {
  const dot = a.reduce((sum, val, i) => sum + val * b[i], 0);
  const magA = Math.sqrt(a.reduce((sum, val) => sum + val * val, 0));
  const magB = Math.sqrt(b.reduce((sum, val) => sum + val * val, 0));
  return dot / (magA * magB);
}

// ---- PRECOMPUTE EMBEDDINGS ----
let vectorStore = [];

async function initVectorStore() {
  for (let item of data) {
    const embedding = await getEmbedding(item.question + " " + item.answer);
    vectorStore.push({
      ...item,
      embedding
    });
  }
}

// ---- RETRIEVE TOP K ----
async function retrieveRelevantDocs(query, k = 3) {
  const queryEmbedding = await getEmbedding(query);

  const scored = vectorStore.map(doc => ({
    ...doc,
    score: cosineSimilarity(queryEmbedding, doc.embedding)
  }));

  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, k);
}

// ---- GENERATE ANSWER ----
async function generateAnswer(query, docs) {
  const context = docs.map(d => d.answer).join("\n\n");

  const prompt = `
You are an expert insurance assistant. Answer ONLY using the context below.

Context:
${context}

Question:
${query}

Answer clearly and step-by-step:
`;

  const res = await axios.post(
    "https://openrouter.ai/api/v1/chat/completions",
    {
      model: "openai/gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a friendly and helpful insurance assistant." },
        { role: "user", content: prompt }
      ]
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`
      }
    }
  );

  return res.data.choices[0].message.content;
}

// ---- MAIN RAG FUNCTION ----
async function askAI(query) {
  const docs = await retrieveRelevantDocs(query);
  const answer = await generateAnswer(query, docs);

  return {
    answer,
    sources: docs.map(d => d.question)
  };
}

module.exports = {
  initVectorStore,
  askAI
};