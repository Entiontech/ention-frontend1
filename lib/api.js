// API Configuration for connecting frontend to backend
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://ention-backend.onrender.com';

// Helper function to get auth token
const getAuthToken = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('token');
  }
  return null;
};

// Helper function to handle API responses
const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'Network error' }));
    throw new Error(error.message || `HTTP error! status: ${response.status}`);
  }
  return response.json();
};

// API client with authentication
const apiClient = {
  // GET request
  get: async (endpoint) => {
    const token = getAuthToken();
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
      },
    });
    return handleResponse(response);
  },

  // POST request
  post: async (endpoint, data) => {
    const token = getAuthToken();
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      body: JSON.stringify(data),
    });
    return handleResponse(response);
  },

  // PUT request
  put: async (endpoint, data) => {
    const token = getAuthToken();
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      body: JSON.stringify(data),
    });
    return handleResponse(response);
  },

  // DELETE request
  delete: async (endpoint) => {
    const token = getAuthToken();
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
      },
    });
    return handleResponse(response);
  },

  // File upload
  upload: async (endpoint, formData) => {
    const token = getAuthToken();
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      body: formData,
    });
    return handleResponse(response);
  },
};

// Auth API functions
export const authAPI = {
  // Signup
  signup: async (userData) => {
    return apiClient.post('/api/auth/signup', userData);
  },

  // Login
  login: async (credentials) => {
    return apiClient.post('/api/auth/login', credentials);
  },

  // Get current user
  getCurrentUser: async () => {
    return apiClient.get('/api/auth/me');
  },

  // Test email service
  testEmail: async () => {
    return apiClient.get('/api/auth/test-email');
  },
};

// Checkout API functions
export const checkoutAPI = {
  // Address Management
  getAddresses: async (userId) => {
    return apiClient.get(`/api/checkout/addresses/${userId}`);
  },

  saveAddress: async (addressData) => {
    return apiClient.post('/api/checkout/addresses', addressData);
  },

  updateAddress: async (addressId, addressData) => {
    return apiClient.put(`/api/checkout/addresses/${addressId}`, addressData);
  },

  deleteAddress: async (addressId) => {
    return apiClient.delete(`/api/checkout/addresses/${addressId}`);
  },

  // Order Management
  createOrder: async (orderData) => {
    return apiClient.post('/api/checkout/orders', orderData);
  },

  getOrders: async (userId) => {
    return apiClient.get(`/api/checkout/orders/${userId}`);
  },

  getOrder: async (orderId) => {
    return apiClient.get(`/api/checkout/orders/${orderId}`);
  },

  updateOrderStatus: async (orderId, status) => {
    return apiClient.put(`/api/checkout/orders/${orderId}/status`, { status });
  },

  updatePaymentStatus: async (orderId, paymentStatus, transactionId) => {
    return apiClient.put(`/api/checkout/orders/${orderId}/payment`, { paymentStatus, transactionId });
  },

  // Payment Integration
  createPaymentOrder: async (orderData) => {
    return apiClient.post('/api/checkout/payment/create-order', orderData);
  },

  verifyPayment: async (paymentData) => {
    return apiClient.post('/api/checkout/payment/verify', paymentData);
  },

  getPaymentMethods: async () => {
    return apiClient.get('/api/checkout/payment/methods');
  },

  // Delivery Integration
  checkPincodeServiceability: async (pincode) => {
    return apiClient.get(`/api/checkout/delivery/pincode/${pincode}`);
  },

  getPincodeDetails: async (pincode) => {
    return apiClient.get(`/api/checkout/delivery/pincode-details/${pincode}`);
  },

  calculateShipping: async (shippingData) => {
    return apiClient.post('/api/checkout/delivery/calculate-shipping', shippingData);
  },

  getEstimatedDelivery: async (deliveryData) => {
    return apiClient.post('/api/checkout/delivery/estimated-delivery', deliveryData);
  },

  validateAddress: async (addressData) => {
    return apiClient.post('/api/checkout/delivery/validate-address', addressData);
  },

  createWaybill: async (orderId) => {
    return apiClient.post(`/api/checkout/delivery/create-waybill/${orderId}`);
  },

  trackShipment: async (waybillNumber) => {
    return apiClient.get(`/api/checkout/delivery/track/${waybillNumber}`);
  },

  // Health check
  healthCheck: async () => {
    return apiClient.get('/api/checkout/health');
  },
};

// Reviews API functions
export const reviewsAPI = {
  // Get reviews for a product
  getReviews: async (productId) => {
    return apiClient.get(`/api/reviews?productId=${encodeURIComponent(productId)}`);
  },

  // Submit a review
  submitReview: async (reviewData) => {
    return apiClient.post('/api/reviews', reviewData);
  },
};

// Health check
export const healthCheck = async () => {
  return apiClient.get('/api/health');
};

export default apiClient; 