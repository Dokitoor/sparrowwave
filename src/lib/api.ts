// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://mainwebapi.sparwave.com/api';
const API_BASE_URL = 'https://mainwebapi.sparwave.com/api'; // uncomment this line to use the environment variable pending when Seyi responds to the issue I raised about the environment variable not being read in the production build

export async function apiFetch(endpoint: string, options: RequestInit = {}) {
  return fetch(`${API_BASE_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    ...options,
  });
}