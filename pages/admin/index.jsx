import React, { useState, useEffect } from 'react';
import { FaEdit, FaSave, FaTimes, FaPlus, FaTrash, FaLaptop, FaRupeeSign, FaCog, FaChartLine, FaUsers, FaShoppingCart, FaStar, FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { toast } from 'react-toastify';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

export default function AdminPanel() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingProduct, setEditingProduct] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newProduct, setNewProduct] = useState({
    model: '',
    name: '',
    basePrice: 0,
    ramUpgrade: 3000,
    ssdUpgrade: 4000,
    warrantyUpgrade: 1000,
    description: '',
    isActive: true
  });

  // Mock data for charts (you can replace with real data later)
  const [analytics] = useState({
    totalRevenue: 1250000,
    monthlyGrowth: 12.5,
    totalOrders: 156,
    orderGrowth: -2.3,
    totalCustomers: 89,
    customerGrowth: 8.7,
    averageOrderValue: 8025,
    aovGrowth: 5.2
  });

  // Fetch products on component mount
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/api/admin/products`);
      if (response.ok) {
        const data = await response.json();
        setProducts(data);
      } else {
        toast.error('Failed to fetch products');
      }
    } catch (error) {
      console.error('Error fetching products:', error);
      toast.error('Error fetching products');
    } finally {
      setLoading(false);
    }
  };

  const initializeProducts = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/admin/products/initialize`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      });
      if (response.ok) {
        const data = await response.json();
        toast.success('Products initialized successfully!');
        fetchProducts();
      } else {
        toast.error('Failed to initialize products');
      }
    } catch (error) {
      console.error('Error initializing products:', error);
      toast.error('Error initializing products');
    }
  };

  const handleEdit = (product) => {
    setEditingProduct({ ...product });
  };

  const handleSave = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/admin/products/${editingProduct.model}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editingProduct)
      });
      
      if (response.ok) {
        toast.success('Product updated successfully!');
        setEditingProduct(null);
        fetchProducts();
      } else {
        toast.error('Failed to update product');
      }
    } catch (error) {
      console.error('Error updating product:', error);
      toast.error('Error updating product');
    }
  };

  const handleCancel = () => {
    setEditingProduct(null);
  };

  const handleAddProduct = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/admin/products`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newProduct)
      });
      
      if (response.ok) {
        toast.success('Product added successfully!');
        setShowAddForm(false);
        setNewProduct({
          model: '',
          name: '',
          basePrice: 0,
          ramUpgrade: 3000,
          ssdUpgrade: 4000,
          warrantyUpgrade: 1000,
          description: '',
          isActive: true
        });
        fetchProducts();
      } else {
        const error = await response.json();
        toast.error(error.error || 'Failed to add product');
      }
    } catch (error) {
      console.error('Error adding product:', error);
      toast.error('Error adding product');
    }
  };

  const handleDelete = async (model) => {
    if (!confirm('Are you sure you want to delete this product?')) return;
    
    try {
      const response = await fetch(`${API_BASE_URL}/api/admin/products/${model}`, {
        method: 'DELETE'
      });
      
      if (response.ok) {
        toast.success('Product deleted successfully!');
        fetchProducts();
      } else {
        toast.error('Failed to delete product');
      }
    } catch (error) {
      console.error('Error deleting product:', error);
      toast.error('Error deleting product');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0FAFCA] via-[#007e9e] to-[#005a7a] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-white mx-auto"></div>
          <p className="mt-6 text-white text-lg font-semibold">Loading ENTION Admin Panel...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0FAFCA] via-[#007e9e] to-[#005a7a]">
      {/* Header with proper spacing */}
      <div className="bg-white/95 backdrop-blur-sm shadow-xl border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-8">
            <div className="flex items-center">
              <div className="p-3 rounded-xl bg-gradient-to-r from-[#0FAFCA] to-[#007e9e] shadow-lg">
                <FaLaptop className="h-8 w-8 text-white" />
              </div>
              <div className="ml-4">
                <h1 className="text-3xl font-bold text-gray-900">ENTION Admin Panel</h1>
                <p className="text-sm text-gray-600 mt-1">Product Management & Analytics</p>
              </div>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={initializeProducts}
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-xl flex items-center shadow-lg transition-all duration-200 transform hover:scale-105"
              >
                <FaCog className="mr-2" />
                Initialize Products
              </button>
              <button
                onClick={() => setShowAddForm(true)}
                className="bg-gradient-to-r from-[#0FAFCA] to-[#007e9e] hover:from-[#007e9e] hover:to-[#005a7a] text-white px-6 py-3 rounded-xl flex items-center shadow-lg transition-all duration-200 transform hover:scale-105"
              >
                <FaPlus className="mr-2" />
                Add Product
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-blue-100">
                <FaLaptop className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Products</p>
                <p className="text-2xl font-semibold text-gray-900">{products.length}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-green-100">
                <FaRupeeSign className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Active Products</p>
                <p className="text-2xl font-semibold text-gray-900">
                  {products.filter(p => p.isActive).length}
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-purple-100">
                <FaCog className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Last Updated</p>
                <p className="text-lg font-semibold text-gray-900">
                  {products.length > 0 ? new Date(products[0].updatedAt).toLocaleDateString() : 'N/A'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Products Table */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Product Management</h2>
            <p className="text-sm text-gray-600 mt-1">Manage ENTION laptop prices and configurations</p>
          </div>
          
          {products.length === 0 ? (
            <div className="text-center py-12">
              <FaLaptop className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-600 mb-4">Initialize products to get started</p>
              <button
                onClick={initializeProducts}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
              >
                Initialize Products
              </button>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Model
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Base Price
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Upgrades
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {products.map((product) => (
                    <tr key={product._id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {product.model}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {product.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {editingProduct && editingProduct._id === product._id ? (
                          <input
                            type="number"
                            value={editingProduct.basePrice}
                            onChange={(e) => setEditingProduct({
                              ...editingProduct,
                              basePrice: parseInt(e.target.value) || 0
                            })}
                            className="w-20 px-2 py-1 border border-gray-300 rounded text-sm"
                          />
                        ) : (
                          <span className="font-semibold">₹{product.basePrice.toLocaleString()}</span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {editingProduct && editingProduct._id === product._id ? (
                          <div className="space-y-1">
                            <input
                              type="number"
                              placeholder="RAM"
                              value={editingProduct.ramUpgrade}
                              onChange={(e) => setEditingProduct({
                                ...editingProduct,
                                ramUpgrade: parseInt(e.target.value) || 0
                              })}
                              className="w-16 px-2 py-1 border border-gray-300 rounded text-xs"
                            />
                            <input
                              type="number"
                              placeholder="SSD"
                              value={editingProduct.ssdUpgrade}
                              onChange={(e) => setEditingProduct({
                                ...editingProduct,
                                ssdUpgrade: parseInt(e.target.value) || 0
                              })}
                              className="w-16 px-2 py-1 border border-gray-300 rounded text-xs"
                            />
                            <input
                              type="number"
                              placeholder="Warranty"
                              value={editingProduct.warrantyUpgrade}
                              onChange={(e) => setEditingProduct({
                                ...editingProduct,
                                warrantyUpgrade: parseInt(e.target.value) || 0
                              })}
                              className="w-16 px-2 py-1 border border-gray-300 rounded text-xs"
                            />
                          </div>
                        ) : (
                          <div className="text-xs space-y-1">
                            <div>RAM: ₹{product.ramUpgrade.toLocaleString()}</div>
                            <div>SSD: ₹{product.ssdUpgrade.toLocaleString()}</div>
                            <div>Warranty: ₹{product.warrantyUpgrade.toLocaleString()}</div>
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {editingProduct && editingProduct._id === product._id ? (
                          <select
                            value={editingProduct.isActive}
                            onChange={(e) => setEditingProduct({
                              ...editingProduct,
                              isActive: e.target.value === 'true'
                            })}
                            className="px-2 py-1 border border-gray-300 rounded text-sm"
                          >
                            <option value={true}>Active</option>
                            <option value={false}>Inactive</option>
                          </select>
                        ) : (
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            product.isActive 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {product.isActive ? 'Active' : 'Inactive'}
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        {editingProduct && editingProduct._id === product._id ? (
                          <div className="flex space-x-2">
                            <button
                              onClick={handleSave}
                              className="text-green-600 hover:text-green-900"
                            >
                              <FaSave className="h-4 w-4" />
                            </button>
                            <button
                              onClick={handleCancel}
                              className="text-gray-600 hover:text-gray-900"
                            >
                              <FaTimes className="h-4 w-4" />
                            </button>
                          </div>
                        ) : (
                          <div className="flex space-x-2">
                            <button
                              onClick={() => handleEdit(product)}
                              className="text-blue-600 hover:text-blue-900"
                            >
                              <FaEdit className="h-4 w-4" />
                            </button>
                            <button
                              onClick={() => handleDelete(product.model)}
                              className="text-red-600 hover:text-red-900"
                            >
                              <FaTrash className="h-4 w-4" />
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Add Product Modal */}
      {showAddForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-md mx-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Add New Product</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Model</label>
                <select
                  value={newProduct.model}
                  onChange={(e) => setNewProduct({ ...newProduct, model: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select Model</option>
                  <option value="E3">E3</option>
                  <option value="E4">E4</option>
                  <option value="E5">E5</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  value={newProduct.name}
                  onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="ENTION Laptop E3"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Base Price (₹)</label>
                <input
                  type="number"
                  value={newProduct.basePrice}
                  onChange={(e) => setNewProduct({ ...newProduct, basePrice: parseInt(e.target.value) || 0 })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="28000"
                />
              </div>
              
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">RAM Upgrade</label>
                  <input
                    type="number"
                    value={newProduct.ramUpgrade}
                    onChange={(e) => setNewProduct({ ...newProduct, ramUpgrade: parseInt(e.target.value) || 0 })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="3000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">SSD Upgrade</label>
                  <input
                    type="number"
                    value={newProduct.ssdUpgrade}
                    onChange={(e) => setNewProduct({ ...newProduct, ssdUpgrade: parseInt(e.target.value) || 0 })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="4000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Warranty</label>
                  <input
                    type="number"
                    value={newProduct.warrantyUpgrade}
                    onChange={(e) => setNewProduct({ ...newProduct, warrantyUpgrade: parseInt(e.target.value) || 0 })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="1000"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  value={newProduct.description}
                  onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  rows="3"
                  placeholder="Product description..."
                />
              </div>
            </div>
            
            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => setShowAddForm(false)}
                className="px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={handleAddProduct}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
              >
                Add Product
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 