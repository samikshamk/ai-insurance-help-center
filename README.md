# 🏢 AI Insurance Help Center

A modern customer support portal that combines structured insurance knowledge with AI-powered assistance using a **React + Node.js fullstack architecture**.

---

# ✨ Features

* 🔍 Search insurance-related questions
* 📚 Browse help topics
* 🤖 AI Assistant with contextual answers (RAG)
* 🔁 Follow-up conversations
* 📄 Source-based AI responses
* 📱 Responsive UI

---

# 🏗 Architecture Overview

This project follows a **client-server architecture** with a **Retrieval-Augmented Generation (RAG)** pipeline.

## Flow

1. React frontend sends user query via Axios
2. Node.js backend processes request
3. Query converted into embeddings
4. Vector search retrieves relevant documents
5. Context + query sent to LLM
6. AI generates grounded response

---

# 🏗 Tech Stack

## Frontend

* React.js (TypeScript)
* Tailwind CSS
* Axios

## Backend

* Node.js (Express)
* TypeScript

## AI / RAG

* OpenRouter (LLM + embeddings)
* Cosine similarity-based retrieval

## Data

* JSON-based FAQ dataset
* In-memory vector store

---

# ⚙️ Setup Instructions

## 1. Clone repo

```bash id="r4h7mp"
git clone https://github.com/your-repo/ai-insurance-help-center.git
cd ai-insurance-help-center
```

---

## 2. Install dependencies

### Frontend

```bash id="czwd3y"
cd frontend
npm install
```

### Backend

```bash id="wz1xk6"
cd backend
npm install
```

---

## 3. Environment variables

Create `.env` in backend:

```env id="h03h9g"
OPENROUTER_API_KEY=your_api_key
```

---

## 4. Run project

### Backend

```bash id="m9d9og"
cd backend
npm run dev
```

### Frontend

```bash id="4t6fy2"
cd frontend
npm start
```

---

# 🤖 AI Integration (RAG)

* Embeddings generated via OpenRouter
* Semantic search using cosine similarity
* Top-k documents used as context
* LLM generates grounded answers

---

# 📊 Tradeoffs & Decisions

## Why React instead of Next.js?

* Simpler setup for SPA-based help center
* Clear separation between frontend and backend
* More control over API and AI orchestration

---

## Tradeoffs

* No SSR (not critical for this use case)
* In-memory vector store (not scalable yet)

---

# 🚀 Future Improvements

* Add vector DB (Pinecone / Supabase)
* Chat history persistence
* Authentication
* Admin CMS for FAQs

---

# 🎥 Demo

(Include video showing:)

* Search
* Topic browsing
* AI chat

---

# 🙌 Author

Your Name
GitHub: your-link
