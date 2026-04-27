import axios, { AxiosError } from "axios";

const API_BASE_URL = import.meta.env.VITE_SERVER_DOMAIN || "http://localhost:3001";

export interface ChatResponse {
  answer: string;
  reply?: string;
  message?: string;
  response?: string;
}

// Axios instance — shared config for all API calls
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 15000, // 15s timeout
});

export async function sendChatMessage(question: string): Promise<string> {
  try {
    const { data } = await apiClient.post<ChatResponse>("/api/chat", {
      question,
    });

    // Handle common response shapes: { answer }, { reply }, { message }, { response }
    const text =
      data.answer ??
      data.reply ??
      data.message ??
      data.response ??
      "Sorry, I couldn't get a response. Please try again.";

    return text;
  } catch (err) {
    const error = err as AxiosError;

    if (error.response) {
      // Server responded with non-2xx status
      throw new Error(`Server error: ${error.response.status}`);
    } else if (error.code === "ECONNABORTED") {
      throw new Error("Request timed out. Please try again.");
    } else {
      throw new Error(
        "Unable to reach the server. Please check your connection.",
      );
    }
  }
}
