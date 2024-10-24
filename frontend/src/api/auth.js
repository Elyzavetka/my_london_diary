const API_URL = "http://localhost:3001";

export const login = async (email, password) => {
  const response = await fetch(`${API_URL}/user/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error("Login failed");
  }

  const data = await response.json();
  return data;
};

export const signup = async (email, password, username) => {
  const response = await fetch(`${API_URL}/user/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ email, password, username }),
  });

  if (!response.ok) {
    throw new Error("Signup failed");
  }

  const data = await response.json();
  return data;
};

export const logout = () => {
  localStorage.removeItem("token");
};
