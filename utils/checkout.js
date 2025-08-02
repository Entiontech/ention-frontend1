import { checkoutAPI } from '../lib/api';
import { getUserFromToken } from './auth';

// Address Management
export const addressUtils = {
  // Get user addresses
  getUserAddresses: async () => {
    try {
      const user = getUserFromToken();
      if (!user) throw new Error('User not authenticated');
      
      const response = await checkoutAPI.getAddresses(user.id);
      return { success: true, addresses: response };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  // Save new address
  saveAddress: async (addressData) => {
    try {
      const user = getUserFromToken();
      if (!user) throw new Error('User not authenticated');
      
      const addressWithUserId = { ...addressData, userId: user.id };
      const response = await checkoutAPI.saveAddress(addressWithUserId);
      return { success: true, address: response };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  // Update existing address
  updateAddress: async (addressId, addressData) => {
    try {
      const response = await checkoutAPI.updateAddress(addressId, addressData);
      return { success: true, address: response };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  // Delete address
  deleteAddress: async (addressId) => {
    try {
      await checkoutAPI.deleteAddress(addressId);
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  // Validate address
  validateAddress: async (addressData) => {
    try {
      const response = await checkoutAPI.validateAddress(addressData);
      return { success: true, validation: response };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },
};

// Order Management
export const orderUtils = {
  // Create new order
  createOrder: async (orderData) => {
    try {
      const user = getUserFromToken();
      if (!user) throw new Error('User not authenticated');
      
      const orderWithUserId = { ...orderData, userId: user.id };
      const response = await checkoutAPI.createOrder(orderWithUserId);
      return { success: true, order: response };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  // Get user orders
  getUserOrders: async () => {
    try {
      const user = getUserFromToken();
      if (!user) throw new Error('User not authenticated');
      
      const response = await checkoutAPI.getOrders(user.id);
      return { success: true, orders: response };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  // Get specific order
  getOrder: async (orderId) => {
    try {
      const response = await checkoutAPI.getOrder(orderId);
      return { success: true, order: response };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  // Update order status
  updateOrderStatus: async (orderId, status) => {
    try {
      const response = await checkoutAPI.updateOrderStatus(orderId, status);
      return { success: true, order: response };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  // Update payment status
  updatePaymentStatus: async (orderId, paymentStatus, transactionId) => {
    try {
      const response = await checkoutAPI.updatePaymentStatus(orderId, paymentStatus, transactionId);
      return { success: true, order: response };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },
};

// Payment Integration
export const paymentUtils = {
  // Create Razorpay order
  createPaymentOrder: async (orderData) => {
    try {
      const response = await checkoutAPI.createPaymentOrder(orderData);
      return { success: true, paymentOrder: response };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  // Verify payment
  verifyPayment: async (paymentData) => {
    try {
      const response = await checkoutAPI.verifyPayment(paymentData);
      return { success: true, verification: response };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  // Get payment methods
  getPaymentMethods: async () => {
    try {
      const response = await checkoutAPI.getPaymentMethods();
      return { success: true, methods: response };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  // Initialize Razorpay payment
  initializeRazorpayPayment: async (orderData) => {
    try {
      // Check if Razorpay is loaded
      if (typeof window !== 'undefined' && !window.Razorpay) {
        // Load Razorpay script if not already loaded
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;
        document.head.appendChild(script);
        
        // Wait for script to load
        await new Promise((resolve) => {
          script.onload = resolve;
        });
      }

      // Create payment order
      const paymentOrderResult = await paymentUtils.createPaymentOrder(orderData);
      if (!paymentOrderResult.success) {
        throw new Error(paymentOrderResult.error);
      }

      const { order, key } = paymentOrderResult.paymentOrder;

      // Initialize Razorpay
      const options = {
        key: key,
        amount: order.amount,
        currency: order.currency || 'INR',
        name: 'ENTION',
        description: orderData.product?.name || 'ENTION Laptop',
        order_id: order.id,
        handler: function (response) {
          // Handle successful payment
          console.log('Payment successful:', response);
          // You can redirect or show success message here
        },
        prefill: {
          name: orderData.shippingAddress?.firstName + ' ' + orderData.shippingAddress?.lastName,
          email: orderData.user?.email,
          contact: orderData.shippingAddress?.phone
        },
        theme: {
          color: '#007E9E'
        }
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();

      return { success: true, razorpay, order };
    } catch (error) {
      console.error('Razorpay initialization error:', error);
      return { success: false, error: error.message };
    }
  },
};

// Delivery Integration
export const deliveryUtils = {
  // Check pincode serviceability
  checkPincodeServiceability: async (pincode) => {
    try {
      const response = await checkoutAPI.checkPincodeServiceability(pincode);
      console.log('Frontend received serviceability response:', response);
      return { success: true, serviceability: response };
    } catch (error) {
      console.error('Frontend serviceability error:', error);
      return { success: false, error: error.message };
    }
  },

  // Get pincode details
  getPincodeDetails: async (pincode) => {
    try {
      const response = await checkoutAPI.getPincodeDetails(pincode);
      return { success: true, details: response };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  // Calculate shipping cost
  calculateShipping: async (shippingData) => {
    try {
      const response = await checkoutAPI.calculateShipping(shippingData);
      return { success: true, shipping: response };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  // Get estimated delivery date
  getEstimatedDelivery: async (deliveryData) => {
    try {
      const response = await checkoutAPI.getEstimatedDelivery(deliveryData);
      return { success: true, delivery: response };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  // Create waybill
  createWaybill: async (orderId) => {
    try {
      const response = await checkoutAPI.createWaybill(orderId);
      return { success: true, waybill: response };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  // Track shipment
  trackShipment: async (waybillNumber) => {
    try {
      const response = await checkoutAPI.trackShipment(waybillNumber);
      return { success: true, tracking: response };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },
};

// Complete Checkout Process
export const checkoutProcess = {
  // Complete checkout flow
  completeCheckout: async (checkoutData) => {
    try {
      const user = getUserFromToken();
      if (!user) throw new Error('User not authenticated');

      // Step 1: Validate address
      const addressValidation = await addressUtils.validateAddress(checkoutData.shippingAddress);
      if (!addressValidation.success) {
        throw new Error('Invalid address');
      }

      // Step 2: Check pincode serviceability
      const serviceability = await deliveryUtils.checkPincodeServiceability(checkoutData.shippingAddress.zipCode);
      if (!serviceability.success || !serviceability.serviceability.serviceable) {
        throw new Error('Pincode not serviceable');
      }

      // Step 3: Calculate shipping
      const shipping = await deliveryUtils.calculateShipping({
        toPincode: checkoutData.shippingAddress.zipCode,
        weight: checkoutData.product?.weight || 2.5
      });

      // Step 4: Create order
      const orderData = {
        ...checkoutData,
        userId: user.id,
        shippingCost: shipping.success ? shipping.shipping.cost : 0
      };

      const orderResult = await orderUtils.createOrder(orderData);
      if (!orderResult.success) {
        throw new Error('Failed to create order');
      }

      // Step 5: Initialize payment
      const paymentResult = await paymentUtils.initializeRazorpayPayment({
        ...orderData,
        orderNumber: orderResult.order.orderNumber
      });

      return {
        success: true,
        order: orderResult.order,
        payment: paymentResult
      };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  // Process payment verification
  processPaymentVerification: async (paymentResponse, orderId) => {
    try {
      // Verify payment with backend
      const verification = await paymentUtils.verifyPayment({
        paymentId: paymentResponse.razorpay_payment_id,
        orderId: paymentResponse.razorpay_order_id,
        signature: paymentResponse.razorpay_signature
      });

      if (!verification.success || !verification.verification.verified) {
        throw new Error('Payment verification failed');
      }

      // Update payment status
      const paymentUpdate = await orderUtils.updatePaymentStatus(
        orderId,
        'completed',
        paymentResponse.razorpay_payment_id
      );

      return { success: true, order: paymentUpdate.order };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },
};

// Utility functions
export const checkoutHelpers = {
  // Format price
  formatPrice: (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR'
    }).format(price);
  },

  // Generate order summary
  generateOrderSummary: (orderData) => {
    const subtotal = orderData.product?.price || 0;
    const shipping = orderData.shippingCost || 0;
    const total = subtotal + shipping;

    return {
      subtotal,
      shipping,
      total,
      formattedSubtotal: checkoutHelpers.formatPrice(subtotal),
      formattedShipping: checkoutHelpers.formatPrice(shipping),
      formattedTotal: checkoutHelpers.formatPrice(total)
    };
  },

  // Validate checkout data
  validateCheckoutData: (checkoutData) => {
    const errors = [];

    if (!checkoutData.product) {
      errors.push('Product information is required');
    }

    if (!checkoutData.shippingAddress) {
      errors.push('Shipping address is required');
    } else {
      const address = checkoutData.shippingAddress;
      if (!address.firstName || !address.lastName) {
        errors.push('Full name is required');
      }
      if (!address.addressLine1) {
        errors.push('Address is required');
      }
      if (!address.city) {
        errors.push('City is required');
      }
      if (!address.state) {
        errors.push('State is required');
      }
      if (!address.zipCode) {
        errors.push('Pincode is required');
      }
      if (!address.phone) {
        errors.push('Phone number is required');
      }
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  },
};

export default {
  addressUtils,
  orderUtils,
  paymentUtils,
  deliveryUtils,
  checkoutProcess,
  checkoutHelpers
}; 