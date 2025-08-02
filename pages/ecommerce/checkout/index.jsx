import React, { useState, useEffect, useRef } from 'react';
import { FaMapMarkerAlt, FaCalendarAlt, FaCreditCard, FaBoxOpen, FaMoneyBillWave, FaMobileAlt, FaArrowLeft } from 'react-icons/fa';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { useLocalStorage } from 'react-use';
import { getUserFromToken } from '../../../utils/auth';
import { checkoutProcess, checkoutHelpers, deliveryUtils, orderUtils, paymentUtils } from '../../../utils/checkout';

export default function CheckoutPage() {
  const router = useRouter();
  const [cart, setCart] = useLocalStorage("cart", []);
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const authChecked = useRef(false);

  // Check authentication on mount
  useEffect(() => {
    if (authChecked.current) return; // Prevent multiple checks
    
    const checkAuth = () => {
      const token = localStorage.getItem('token');
      if (!token) {
        // Only navigate if we're not already on the checkout page
        if (window.location.pathname !== '/ecommerce/checkout') {
          router.push("/login?redirect=/ecommerce/checkout");
        }
        return;
      }
      
      try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        setUser({
          id: payload.id,
          name: payload.name,
          email: payload.email
        });
      } catch (error) {
        console.error('Error decoding token:', error);
        localStorage.removeItem('token');
        // Only navigate if we're not already on the checkout page
        if (window.location.pathname !== '/ecommerce/checkout') {
          router.push("/login?redirect=/ecommerce/checkout");
        }
        return;
      }
      setAuthLoading(false);
    };
    
    checkAuth();
    authChecked.current = true;
  }, [router]);

  // Load Razorpay script
  useEffect(() => {
    if (typeof window !== 'undefined' && !window.Razorpay) {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);



  const [product, setProduct] = useState({
    model: 'E3',
    basePrice: 28000,
    selectedRam: '8GB',
    selectedSSD: '512GB',
    selectedWarranty: '18 Months (Default)',
    ramUpgrade: 3000,
    ssdUpgrade: 4000,
    warrantyUpgrade: 1000,
    name: 'ENTION Laptop E3',
    images: ['/assets/product_/e3/cover-img.webp']
  });

  // Only keep these at the top:
  const savedAddresses = [];
  const paymentMethods = [];
  const deliveryDate = '';
  const [step, setStep] = useState(1);
  const [selectedAddressId, setSelectedAddressId] = useState(null);
  const [useSavedAddress, setUseSavedAddress] = useState(true);
  const [paymentMode, setPaymentMode] = useState('card');
  
  // Shipping address state
  const [shippingAddress, setShippingAddress] = useState({
    firstName: '',
    lastName: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'India',
    phone: ''
  });

  // Pincode validation
  const [pincodeValid, setPincodeValid] = useState(false);
  const [pincodeLoading, setPincodeLoading] = useState(false);

  // Calculate total price
  const calculateTotal = () => {
    let total = product.basePrice;
    
    // Add configuration costs
    if (product.selectedRam === '16GB') total += product.ramUpgrade;
    if (product.selectedSSD === '1TB') total += product.ssdUpgrade;
    if (product.selectedWarranty === '+6 Months') total += product.warrantyUpgrade;
    if (product.selectedWarranty === '+1 Year') total += product.warrantyUpgrade * 1.8;
    
    // Add shipping cost
    total += 150;
    
    // Add COD charges if selected
    if (paymentMode === 'cod') total += 50;
    
    return total;
  };

  const total = calculateTotal();

  // Get product data from URL params after component mounts
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const productModel = urlParams.get('model') || 'E3';
      const selectedRam = urlParams.get('ram') || '8GB';
      const selectedSSD = urlParams.get('ssd') || '512GB';
      const selectedWarranty = urlParams.get('warranty') || '18 Months (Default)';
      
      // Get base price based on model (for testing purposes)
      const getBasePrice = (model) => {
        switch (model) {
          case 'E3': return 28000;
          case 'E4': return 59999;
          case 'E5': return 28000; // E5 shows "Coming Soon" but we'll use E3 price for testing
          default: return 28000;
        }
      };

      const basePrice = getBasePrice(productModel);
      
      setProduct({
        model: productModel,
        basePrice: basePrice,
        selectedRam: selectedRam,
        selectedSSD: selectedSSD,
        selectedWarranty: selectedWarranty,
        ramUpgrade: productModel === 'E4' ? 4000 : 3000,
        ssdUpgrade: productModel === 'E4' ? 5000 : 4000,
        warrantyUpgrade: productModel === 'E4' ? 1500 : 1000,
        name: `ENTION Laptop ${productModel}`,
        images: [`/assets/product_/${productModel.toLowerCase()}/cover-img.webp`]
      });
    }
  }, []);

  // Pre-fill user data
  useEffect(() => {
    if (user?.name) {
      const nameParts = user.name.split(' ');
      setShippingAddress(prev => ({
        ...prev,
        firstName: nameParts[0] || '',
        lastName: nameParts.slice(1).join(' ') || ''
      }));
    }
  }, [user]);

  // Validate pincode
  const validatePincode = async (pincode) => {
    if (!pincode || pincode.length !== 6) {
      setPincodeValid(false);
      return;
    }

    setPincodeLoading(true);
    try {
      const result = await deliveryUtils.checkPincodeServiceability(pincode);
      if (result.success && result.serviceability.serviceable) {
        setPincodeValid(true);
        const { city, state } = result.serviceability;
        toast.success(`Pincode ${pincode} is serviceable! Delivery to ${city}, ${state}`);
        
        // Auto-fill city and state if available
        setShippingAddress(prev => ({
          ...prev,
          city: city || prev.city,
          state: state || prev.state
        }));
      } else {
        setPincodeValid(false);
        toast.error(`Pincode ${pincode} is not serviceable. Please enter a different pincode.`);
      }
    } catch (error) {
      console.error('Error validating pincode:', error);
      setPincodeValid(false);
      toast.error('Error checking pincode serviceability. Please try again.');
    } finally {
      setPincodeLoading(false);
    }
  };

  // Handle address change
  const handleAddressChange = (field, value) => {
    setShippingAddress(prev => ({
      ...prev,
      [field]: value
    }));

    // Auto-validate pincode when it reaches 6 digits
    if (field === 'zipCode' && value.length === 6) {
      validatePincode(value);
    } else if (field === 'zipCode' && value.length !== 6) {
      // Reset validation when pincode is not 6 digits
      setPincodeValid(false);
    }
  };
  // Remove these duplicate declarations:
  // const paymentMethods = [...];
  // const [selectedPayment, setSelectedPayment] = useState(paymentMethods[0].id);
  // const deliveryDate = 'Monday, 10 June 2024';
  // const product = {...};
  // const subtotal = product.price * product.quantity;
  // const shipping = 0;
  // const total = subtotal + shipping;

  // Stepper labels
  const steps = [
    'Shipping address',
    'Payment details',
    'Review your order',
  ];

  // Validate current step
  const validateStep = (step) => {
    switch (step) {
      case 1:
        const requiredFields = ['firstName', 'lastName', 'addressLine1', 'city', 'state', 'zipCode', 'phone'];
        const missingFields = requiredFields.filter(field => !shippingAddress[field]);
        if (missingFields.length > 0) {
          toast.error(`Please fill in: ${missingFields.join(', ')}`);
          return false;
        }
        if (!pincodeValid) {
          toast.error('Please enter a valid serviceable pincode');
          return false;
        }
        return true;
      
      case 2:
        if (!paymentMode) {
          toast.error('Please select a payment method');
          return false;
        }
        return true;
      
      default:
        return true;
    }
  };

  // Next step
  const nextStep = () => {
    if (validateStep(step)) {
      setStep(prev => Math.min(prev + 1, 3));
    }
  };

  // Previous step
  const prevStep = () => {
    setStep(prev => Math.max(prev - 1, 1));
  };

  // Process payment
  const processPayment = async () => {
    if (!validateStep(3)) return;

    setLoading(true);
    const toastId = toast.loading('Processing payment...', {
      autoClose: false,
      theme: "colored",
      type: "info",
    });

    try {
      const checkoutData = {
        product: {
          ...product,
          price: total
        },
        shippingAddress,
        user,
        paymentMethod: paymentMode
      };

                   if (paymentMode === 'card') {
        // Process Razorpay payment
        try {
          // Step 1: Create order first
          const orderData = {
            ...checkoutData,
            userId: user.id,
            paymentMethod: 'card' // Ensure payment method is set correctly
          };
          
          const orderResult = await orderUtils.createOrder(orderData);
          if (!orderResult.success) {
            throw new Error(orderResult.error || 'Failed to create order');
          }
          
          // Step 2: Initialize Razorpay payment
          const paymentResult = await paymentUtils.initializeRazorpayPayment({
            ...orderData,
            orderNumber: orderResult.order.orderNumber,
            paymentMethod: 'card' // Ensure payment method is set correctly
          });
          
          if (paymentResult.success) {
            toast.update(toastId, {
              render: "Razorpay payment gateway opened!",
              type: "success",
              isLoading: false,
              autoClose: 2000,
            });
          } else {
            throw new Error(paymentResult.error || 'Failed to initialize payment');
          }
        } catch (error) {
          toast.update(toastId, {
            render: error.message || "Payment initialization failed",
            type: "error",
            isLoading: false,
            autoClose: 3000,
          });
        }
      } else {
        // Process Cash on Delivery
        const result = await checkoutProcess.completeCheckout({
          ...checkoutData,
          paymentMethod: 'cod'
        });
        
        if (result.success) {
          toast.update(toastId, {
            render: "Order placed successfully! Cash on delivery confirmed.",
            type: "success",
            isLoading: false,
            autoClose: 3000,
          });
          
          setTimeout(() => {
            router.push('/dashboard');
          }, 3000);
        } else {
          toast.update(toastId, {
            render: result.error || "Order placement failed",
            type: "error",
            isLoading: false,
            autoClose: 3000,
          });
        }
      }
    } catch (error) {
      toast.update(toastId, {
        render: "Payment processing failed. Please try again.",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    } finally {
      setLoading(false);
    }
  };



  // Render step content
  function renderStepContent() {
    if (step === 1) {
      return (
        <div className="w-full">
          {savedAddresses.length > 0 && (
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Saved addresses</label>
              <select
                className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-2"
                value={useSavedAddress ? selectedAddressId : ''}
                onChange={e => {
                  setUseSavedAddress(true);
                  setSelectedAddressId(Number(e.target.value));
                }}
              >
                {savedAddresses.map(addr => (
                  <option key={addr.id} value={addr.id}>
                    {addr.label}: {addr.line1}, {addr.city}
                  </option>
                ))}
                <option value="">Add new address</option>
              </select>
              <button
                type="button"
                className="text-cyan-600 underline text-xs font-medium hover:text-cyan-800"
                onClick={() => { setUseSavedAddress(false); setSelectedAddressId(null); }}
              >
                + Add new address
              </button>
            </div>
          )}
          {(!useSavedAddress || savedAddresses.length === 0) && (
            <form className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">First name *</label>
                <input 
                  type="text" 
                  className="w-full border border-gray-300 rounded-lg px-4 py-3" 
                  placeholder="John"
                  value={shippingAddress.firstName}
                  onChange={(e) => handleAddressChange('firstName', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Last name *</label>
                <input 
                  type="text" 
                  className="w-full border border-gray-300 rounded-lg px-4 py-3" 
                  placeholder="Snow"
                  value={shippingAddress.lastName}
                  onChange={(e) => handleAddressChange('lastName', e.target.value)}
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Address line 1 *</label>
                <input 
                  type="text" 
                  className="w-full border border-gray-300 rounded-lg px-4 py-3" 
                  placeholder="Street name and number"
                  value={shippingAddress.addressLine1}
                  onChange={(e) => handleAddressChange('addressLine1', e.target.value)}
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Address line 2</label>
                <input 
                  type="text" 
                  className="w-full border border-gray-300 rounded-lg px-4 py-3" 
                  placeholder="Apartment, suite, unit, etc. (optional)"
                  value={shippingAddress.addressLine2}
                  onChange={(e) => handleAddressChange('addressLine2', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">City *</label>
                <input 
                  type="text" 
                  className="w-full border border-gray-300 rounded-lg px-4 py-3" 
                  placeholder="Mumbai"
                  value={shippingAddress.city}
                  onChange={(e) => handleAddressChange('city', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">State *</label>
                <input 
                  type="text" 
                  className="w-full border border-gray-300 rounded-lg px-4 py-3" 
                  placeholder="Maharashtra"
                  value={shippingAddress.state}
                  onChange={(e) => handleAddressChange('state', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Pincode *</label>
                <div className="relative">
                  <input 
                    type="text" 
                    className={`w-full border rounded-lg px-4 py-3 pr-20 ${
                      pincodeValid ? 'border-green-500' : 
                      shippingAddress.zipCode.length === 6 ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter 6-digit pincode"
                    maxLength={6}
                    value={shippingAddress.zipCode}
                    onChange={(e) => handleAddressChange('zipCode', e.target.value)}
                  />
                  {pincodeLoading && (
                    <div className="absolute right-3 top-3">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-cyan-600"></div>
                    </div>
                  )}
                  {pincodeValid && !pincodeLoading && (
                    <div className="absolute right-3 top-3 text-green-500">✓</div>
                  )}
                  {!pincodeLoading && !pincodeValid && shippingAddress.zipCode.length === 6 && (
                    <button
                      type="button"
                      onClick={() => validatePincode(shippingAddress.zipCode)}
                      className="absolute right-2 top-2 bg-cyan-600 text-white px-2 py-1 rounded text-xs hover:bg-cyan-700"
                    >
                      Check
                    </button>
                  )}
                </div>
                {shippingAddress.zipCode.length === 6 && !pincodeValid && !pincodeLoading && (
                  <p className="text-red-500 text-sm mt-1">Pincode not serviceable - Please enter a different pincode</p>
                )}
                {pincodeValid && (
                  <p className="text-green-600 text-sm mt-1">✓ Pincode is serviceable</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                <input 
                  type="tel" 
                  className="w-full border border-gray-300 rounded-lg px-4 py-3" 
                  placeholder="Enter phone number"
                  value={shippingAddress.phone}
                  onChange={(e) => handleAddressChange('phone', e.target.value)}
                />
              </div>
              <div className="md:col-span-2 flex items-center mt-2">
                <input type="checkbox" className="mr-2" id="useForPayment" />
                <label htmlFor="useForPayment" className="text-sm text-gray-700">Use this address for payment details</label>
              </div>
            </form>
          )}
        </div>
      );
    }
    if (step === 2) {
      return (
        <div className="w-full flex flex-col gap-8">
          <div className="text-lg font-semibold text-gray-700 mb-4">Select payment method</div>
          <div className="flex flex-col gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="paymentMode" value="card" checked={paymentMode === 'card'} onChange={() => setPaymentMode('card')} className="accent-cyan-600" />
               <span className="font-medium text-gray-800">Razorpay (Credit/Debit Card & UPI)</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="paymentMode" value="cod" checked={paymentMode === 'cod'} onChange={() => setPaymentMode('cod')} className="accent-cyan-600" />
              <span className="font-medium text-gray-800">Cash on Delivery</span>
            </label>
          </div>
          {paymentMode === 'card' && (
            <div className="flex flex-col gap-4 mt-4">
               <div className="text-sm text-gray-700 bg-cyan-50 rounded-lg px-4 py-3">
                 You will be redirected to Razorpay's secure payment gateway to complete your payment using Credit/Debit Card or UPI.
              </div>
            </div>
          )}
          {paymentMode === 'cod' && (
            <div className="mt-4 text-sm text-gray-700 bg-cyan-50 rounded-lg px-4 py-3">
              You will pay in cash when your order is delivered.
            </div>
          )}
        </div>
      );
    }
    if (step === 3) {
      return (
        <div className="w-full flex flex-col gap-8">
          <div className="text-lg font-semibold text-gray-700 mb-4">Review your order</div>
          
          {/* Product Details */}
          <div className="border-b border-gray-200 pb-4 mb-4">
            <h3 className="font-semibold text-gray-800 mb-2">Product Details</h3>
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-cyan-600">{product.model}</span>
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-gray-800">{product.name}</h4>
                <p className="text-sm text-gray-600">
                  {product.selectedRam} RAM, {product.selectedSSD} SSD
                </p>
                <p className="text-sm text-gray-600">
                  Warranty: {product.selectedWarranty}
                </p>
              </div>
            </div>
          </div>
          
          {/* Shipping Address */}
          <div className="border-b border-gray-200 pb-4 mb-4">
            <h3 className="font-semibold text-gray-800 mb-2">Shipping Address</h3>
            <div className="text-sm text-gray-600">
              <p>{shippingAddress.firstName} {shippingAddress.lastName}</p>
              <p>{shippingAddress.addressLine1}</p>
              {shippingAddress.addressLine2 && <p>{shippingAddress.addressLine2}</p>}
              <p>{shippingAddress.city}, {shippingAddress.state} {shippingAddress.zipCode}</p>
              <p>Phone: {shippingAddress.phone}</p>
            </div>
          </div>
          
                     {/* Payment Method */}
           <div className="border-b border-gray-200 pb-4 mb-4">
             <h3 className="font-semibold text-gray-800 mb-2">Payment Method</h3>
             <p className="text-sm text-gray-600">
               {paymentMode === 'card' ? 'Razorpay (Credit/Debit Card & UPI)' : 'Cash on Delivery'}
             </p>
           </div>
        </div>
      );
    }
    return null;
  }

  // Show loading while checking authentication
  if (authLoading) {
    return (
      <main className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-[#133B5C] via-[#0FAFCA] to-[#007e9e]">
        <div className="text-white text-xl">Loading...</div>
      </main>
    );
  }

  // Show error if not authenticated
  if (!user) {
    return (
      <main className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-[#133B5C] via-[#0FAFCA] to-[#007e9e]">
        <div className="text-white text-xl">Please log in to continue</div>
      </main>
    );
  }

  return (
    <>
      {/* Desktop Layout */}
      <main className="hidden md:block min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-[#133B5C] via-[#0FAFCA] to-[#007e9e] pt-32">
        <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row bg-white rounded-2xl shadow-2xl min-h-[70vh] overflow-hidden">
          {/* Left: Stepper and Form (now on the left) */}
          <section className="w-full md:w-3/5 flex flex-col items-start justify-start px-8 py-12">
            <h2 className="text-2xl font-bold text-[#0FAFCA] mb-8">Checkout</h2>
             
            {/* Stepper */}
            <div className="flex items-center mb-10 w-full">
              {steps.map((label, idx) => (
                <div key={label} className="flex items-center">
                  <div className={`flex items-center justify-center w-9 h-9 rounded-full border-2 border-cyan-400 font-bold transition-all ${step === idx + 1 ? 'bg-cyan-400 text-white' : 'bg-white text-cyan-400'}`}>{idx + 1}</div>
                  <span className={`ml-2 font-semibold transition-all ${step === idx + 1 ? 'text-gray-900' : 'text-gray-500'}`}>{label}</span>
                  {idx < steps.length - 1 && <div className="flex-1 h-0.5 bg-cyan-200 mx-2" />}
                </div>
              ))}
            </div>
            {/* Step Content */}
            {renderStepContent()}
          </section>
          {/* Right: Order Summary (now on the right) */}
          <aside className="w-full md:w-2/5 flex flex-col items-start justify-between px-8 py-12 border-l border-gray-200">
            <div className="w-full">
              {/* Back Arrow */}
              {step > 1 && (
                <button
                  className="mb-6 flex items-center gap-2 text-cyan-600 hover:text-cyan-800 font-medium text-base transition"
                  onClick={() => setStep(step - 1)}
                  type="button"
                >
                  <FaArrowLeft className="h-4 w-4" />
                  <span>Back</span>
                </button>
              )}
              <div className="mb-10 flex items-center gap-4">
                {/* Removed Sitemark logo and text */}
              </div>
              <div className="mb-10">
                <div className="text-gray-500 text-lg">Total</div>
                                 <div className="text-5xl font-extrabold text-gray-900 mb-4">₹{total.toLocaleString()}</div>
                <div className="flex flex-col gap-5">
                  <div className="flex justify-between w-80 max-w-full group hover:bg-cyan-50 rounded-lg px-2 py-1 transition">
                    <div>
                       <div className="font-semibold text-gray-900">{product.name}</div>
                       <div className="text-xs text-gray-500">Base model</div>
                     </div>
                                           <div className="text-gray-900">₹{product.basePrice.toLocaleString()}</div>
                   </div>
                  
                                     {product.selectedRam === '16GB' && (
                     <div className="flex justify-between w-80 max-w-full group hover:bg-cyan-50 rounded-lg px-2 py-1 transition">
                       <div>
                         <div className="font-semibold text-gray-900">RAM Upgrade</div>
                         <div className="text-xs text-gray-500">16GB RAM</div>
                       </div>
                       <div className="text-gray-900">₹{product.ramUpgrade.toLocaleString()}</div>
                     </div>
                   )}
                  
                                     {product.selectedSSD === '1TB' && (
                     <div className="flex justify-between w-80 max-w-full group hover:bg-cyan-50 rounded-lg px-2 py-1 transition">
                       <div>
                         <div className="font-semibold text-gray-900">SSD Upgrade</div>
                         <div className="text-xs text-gray-500">1TB SSD</div>
                    </div>
                       <div className="text-gray-900">₹{product.ssdUpgrade.toLocaleString()}</div>
                  </div>
                   )}
                  
                                     {product.selectedWarranty && product.selectedWarranty !== '18 Months (Default)' && (
                  <div className="flex justify-between w-80 max-w-full group hover:bg-cyan-50 rounded-lg px-2 py-1 transition">
                    <div>
                         <div className="font-semibold text-gray-900">Warranty Extension</div>
                         <div className="text-xs text-gray-500">{product.selectedWarranty}</div>
                    </div>
                       <div className="text-gray-900">₹{product.warrantyUpgrade.toLocaleString()}</div>
                  </div>
                   )}
                  
                  <div className="flex justify-between w-80 max-w-full group hover:bg-cyan-50 rounded-lg px-2 py-1 transition">
                    <div>
                      <div className="font-semibold text-gray-900">Shipping</div>
                      <div className="text-xs text-gray-500">Standard delivery</div>
                    </div>
                    <div className="text-gray-900">₹150</div>
                  </div>
                  
                  {paymentMode === 'cod' && (
                  <div className="flex justify-between w-80 max-w-full group hover:bg-cyan-50 rounded-lg px-2 py-1 transition">
                    <div>
                        <div className="font-semibold text-gray-900">COD Charges</div>
                        <div className="text-xs text-gray-500">Cash on delivery</div>
                      </div>
                      <div className="text-gray-900">₹50</div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <button
               className="w-full bg-[#0FAFCA] hover:bg-[#007e9e] text-white font-bold py-3 rounded-xl shadow-lg text-lg transition mt-8 disabled:bg-gray-300 disabled:cursor-not-allowed"
               onClick={step < 3 ? nextStep : processPayment}
               disabled={loading || (step === 1 && !pincodeValid)}
            >
               {loading ? 'Processing...' : step < 3 ? 'Next' : 'Place Order'}
            </button>
          </aside>
        </div>
      </main>

      {/* Mobile Layout */}
      <main className="block md:hidden min-h-screen w-full bg-gradient-to-b from-[#133B5C] via-[#0FAFCA] to-[#007e9e] p-2 py-36">
        <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-2xl my-6 overflow-hidden flex flex-col px-2">
          {/* Mobile Back Button */}
          {step > 1 && (
            <button
              className="flex items-center gap-2 text-cyan-600 hover:text-cyan-800 font-medium text-base transition mt-4 mb-2 ml-1"
              onClick={() => setStep(step - 1)}
              type="button"
            >
              <FaArrowLeft className="h-4 w-4" />
              <span>Back</span>
            </button>
          )}
          {/* Mobile Stepper */}
          <div className="flex items-center justify-center gap-2 py-4 bg-white sticky top-0 z-10">
            {steps.map((label, idx) => (
              <div key={label} className="flex flex-col items-center flex-1">
                <div className={`flex items-center justify-center w-7 h-7 rounded-full border-2 border-cyan-400 font-bold text-sm transition-all ${step === idx + 1 ? 'bg-cyan-400 text-white' : 'bg-white text-cyan-400'}`}>{idx + 1}</div>
                <span className={`mt-1 text-xs font-semibold transition-all ${step === idx + 1 ? 'text-gray-900' : 'text-gray-400'}`}>{label.split(' ')[0]}</span>
              </div>
            ))}
          </div>
          {/* Mobile Step Content */}
          <div className="px-1 py-6 flex-1">
            {/* Fix dropdown width in step 1 */}
            {step === 1 ? (
              <div className="w-full max-w-full">
                <label className="block text-sm font-medium text-gray-700 mb-2">Saved addresses</label>
                <select
                  className="w-full max-w-full border border-gray-300 rounded-lg px-4 py-3 mb-2"
                  value={useSavedAddress ? selectedAddressId : ''}
                  onChange={e => {
                    setUseSavedAddress(true);
                    setSelectedAddressId(Number(e.target.value));
                  }}
                >
                  {savedAddresses.map(addr => (
                    <option key={addr.id} value={addr.id}>
                      {addr.label}: {addr.line1}, {addr.city}
                    </option>
                  ))}
                  <option value="">Add new address</option>
                </select>
                <button
                  type="button"
                  className="text-cyan-600 underline text-xs font-medium hover:text-cyan-800"
                  onClick={() => { setUseSavedAddress(false); setSelectedAddressId(null); }}
                >
                  + Add new address
                </button>
              </div>
            ) : (
              renderStepContent()
            )}
          </div>
          {/* Mobile Order Summary (collapsible) */}
          <details className="bg-cyan-50 px-4 py-3 border-t border-cyan-100" open>
            <summary className="font-semibold text-cyan-700 cursor-pointer text-base">Order Summary</summary>
            <div className="flex flex-col gap-2 mt-2">
              <div className="flex justify-between text-sm">
                 <span>{product.name}</span>
                 <span>₹{product.basePrice.toLocaleString()}</span>
               </div>
                             {product.selectedRam === '16GB' && (
                 <div className="flex justify-between text-sm">
                   <span>RAM Upgrade</span>
                   <span>₹{product.ramUpgrade.toLocaleString()}</span>
                 </div>
               )}
                             {product.selectedSSD === '1TB' && (
                 <div className="flex justify-between text-sm">
                   <span>SSD Upgrade</span>
                   <span>₹{product.ssdUpgrade.toLocaleString()}</span>
              </div>
               )}
                             {product.selectedWarranty && product.selectedWarranty !== '18 Months (Default)' && (
              <div className="flex justify-between text-sm">
                   <span>Warranty Extension</span>
                   <span>₹{product.warrantyUpgrade.toLocaleString()}</span>
              </div>
               )}
              <div className="flex justify-between text-sm">
                <span>Shipping</span>
                <span>₹150</span>
              </div>
              {paymentMode === 'cod' && (
              <div className="flex justify-between text-sm">
                  <span>COD Charges</span>
                  <span>₹50</span>
              </div>
              )}
              <div className="flex justify-between font-bold text-lg mt-2">
                <span>Total</span>
                 <span>₹{total.toLocaleString()}</span>
              </div>
            </div>
          </details>
          <button
             className="w-full bg-[#0FAFCA] hover:bg-[#007e9e] text-white font-bold py-3 rounded-b-2xl text-lg transition disabled:bg-gray-300 disabled:cursor-not-allowed"
             onClick={step < 3 ? nextStep : processPayment}
             disabled={loading || (step === 1 && !pincodeValid)}
          >
             {loading ? 'Processing...' : step < 3 ? 'Next' : 'Place Order'}
          </button>
        </div>
      </main>
    </>
  );
} 