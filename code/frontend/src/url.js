export const baseUrl = process.env.NODE_ENV === "production" ? process.env.REACT_APP_API_URL : process.env.REACT_APP_BACKEND_URL || "http://localhost:3001";
