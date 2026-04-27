const express = require("express");
const cors = require("cors");

const { initVectorStore, askAI } = require("./rag");

const app = express();
app.use(cors());
app.use(express.json());

// ---- INIT ----
(async () => {
  console.log("Initializing vector store...");
  await initVectorStore();
  console.log("Ready 🚀");
})();

// ---- CHAT API ----
app.post("/api/chat", async (req, res) => {
  try {
    const { question } = req.body;

    const result = await askAI(question);

    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
});

// ---- HEALTH ----
app.get("/", (req, res) => {
  res.send("RAG server running");
});

app.listen(3001, () => {
  console.log("Server running on http://localhost:3001");
});