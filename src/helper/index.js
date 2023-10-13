const API_URL = "http://localhost:8080/api/";

// Function to get the stored JWT token
const getToken = () => {
    return localStorage.getItem('token');
  };
  
  const getEmail = () => {
    return localStorage.getItem('email');
  };
  
  // Function to create headers with the JWT token
  const getHeaders = () => {
    return {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${getToken()}`,
      'email': `${getEmail()}`
    };
  };


// Function to make a POST request to the backend
export const registerUser = async ({ name, email, password }) => {
    const response = await fetch(`${API_URL}/signup`, {
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify({ name, email, password }),
    });
    return await response.json();
  };


// Function to login a user
export const loginUser = async ({ email, password }) => {
    const response = await fetch(`${API_URL}login`, {
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify({ email, password }),
    });
    return await response.json();
  };