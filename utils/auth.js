import { authAPI } from '../lib/api';

// Get user from JWT token
export function getUserFromToken() {
  if (typeof window === 'undefined') return null;
  
  const token = localStorage.getItem('token');
  if (!token) return null;
  
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    return {
      id: payload.id,
      name: payload.name,
      email: payload.email,
      username: payload.username
    };
  } catch (error) {
    console.error('Error decoding token:', error);
    return null;
  }
}

// Check if user is authenticated
export function isAuthenticated() {
  const user = getUserFromToken();
  return user !== null;
}

// Login function
export async function login(credentials) {
  try {
    const response = await authAPI.login(credentials);
    const { token } = response;
    
    // Store token
    localStorage.setItem('token', token);
    
    // Store user info
    const user = getUserFromToken();
    if (user?.name) {
      localStorage.setItem('userName', user.name);
    }
    
    // Dispatch auth change event
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event('authChanged'));
    }
    
    return { success: true, user };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

// Signup function
export async function signup(userData) {
  try {
    const response = await authAPI.signup(userData);
    const { token } = response;
    
    // Store token
    localStorage.setItem('token', token);
    
    // Store user info
    const user = getUserFromToken();
    if (user?.name) {
      localStorage.setItem('userName', user.name);
    }
    
    return { success: true, user };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

// Logout function
export function logout() {
  localStorage.removeItem('token');
  localStorage.removeItem('userName');
  
  // Dispatch auth change event
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event('authChanged'));
  }
}

// Get current user info from API
export async function getCurrentUser() {
  try {
    const response = await authAPI.getCurrentUser();
    return { success: true, user: response.user };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

// Check if token is expired
export function isTokenExpired() {
  const user = getUserFromToken();
  if (!user) return true;
  
  // JWT tokens have an expiration time
  // You can add additional expiration logic here if needed
  return false;
}

// Refresh token (placeholder for future implementation)
export async function refreshToken() {
  // This would typically call a refresh endpoint
  // For now, we'll just return the current token
  const token = localStorage.getItem('token');
  return token ? { success: true, token } : { success: false };
} 