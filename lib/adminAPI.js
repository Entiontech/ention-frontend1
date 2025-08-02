const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

// Helper function to handle API responses
const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json().catch(() => ({ error: 'Network error' }));
    throw new Error(error.error || `HTTP error! status: ${response.status}`);
  }
  return response.json();
};

// Product Management API
export const adminAPI = {
  // Get all products
  getProducts: async () => {
    const response = await fetch(`${API_BASE_URL}/api/admin/products`);
    return handleResponse(response);
  },

  // Get a specific product
  getProduct: async (model) => {
    const response = await fetch(`${API_BASE_URL}/api/admin/products/${model}`);
    return handleResponse(response);
  },

  // Create a new product
  createProduct: async (productData) => {
    const response = await fetch(`${API_BASE_URL}/api/admin/products`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(productData)
    });
    return handleResponse(response);
  },

  // Update a product
  updateProduct: async (model, updateData) => {
    const response = await fetch(`${API_BASE_URL}/api/admin/products/${model}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updateData)
    });
    return handleResponse(response);
  },

  // Delete a product
  deleteProduct: async (model) => {
    const response = await fetch(`${API_BASE_URL}/api/admin/products/${model}`, {
      method: 'DELETE'
    });
    return handleResponse(response);
  },

  // Initialize default products
  initializeProducts: async () => {
    const response = await fetch(`${API_BASE_URL}/api/admin/products/initialize`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    });
    return handleResponse(response);
  }
};

export default adminAPI; 