# 🏢 AI Insurance Help Center

A modern customer support portal that combines structured insurance knowledge with AI-powered assistance using a **React + Node.js fullstack architecture**.

---

# ✨ Features

* 📚 Browse help topics
* 🔍 Search insurance-related questions
* 🤖 AI Assistant with contextual answers (RAG)
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
* Axios

## AI / RAG

* OpenRouter (LLM + embeddings)

## Data

* JSON-based FAQ dataset
* In-memory vector store

---

# ⚙️ Setup Instructions

## 1. Download and unzip the folder

---

## 2. Install dependencies

### Frontend

cd frontend
npm install

### Backend

cd backend
npm install

---

## 3. Environment variables

Create `.env` in backend folder:
get your api key and add into 

OPENROUTER_API_KEY=your_api_key

---

## 4. Run project

### Backend

cd backend
npm run dev

### Frontend

cd frontend
npm start

---

# 🚀 Future Improvements

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
Samiksha Moghan
