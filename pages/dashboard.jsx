import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaUserCircle, FaEdit, FaSignOutAlt, FaBoxOpen, FaHeart, FaTicketAlt, FaCog, FaEnvelope, FaPlus, FaShoppingCart, FaFileInvoiceDollar, FaMapMarkerAlt, FaHistory } from "react-icons/fa";
import Image from "next/image";
import { getUserFromToken, logout } from "utils/auth";

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [wishlist, setWishlist] = useState([]); // Empty array
  const [tickets, setTickets] = useState([]); // Empty array
  const [newTicket, setNewTicket] = useState("");
  const [newsletter, setNewsletter] = useState(true);
  const [trackOrderId, setTrackOrderId] = useState(null);

  // Check authentication on mount
  useEffect(() => {
    const checkAuth = () => {
      const userFromToken = getUserFromToken();
      if (!userFromToken) {
        router.push('/login?redirect=/dashboard');
        return;
      }
      setUser(userFromToken);
      setAuthLoading(false);
    };
    
    checkAuth();
  }, [router]);

  const handleRemoveWishlist = (id) => setWishlist(wishlist.filter(w => w.id !== id));
  const handleAddToCart = (id) => alert("Added to cart!");
  const handleCreateTicket = (e) => {
    e.preventDefault();
    if (newTicket.trim()) {
      setTickets([{ id: Date.now(), subject: newTicket, status: "Open", date: new Date().toISOString().slice(0,10) }, ...tickets]);
      setNewTicket("");
    }
  };
  const handleTrackOrder = (id) => setTrackOrderId(trackOrderId === id ? null : id);
  const handleDownloadInvoice = (id) => alert("Invoice downloaded for order #" + id);

  // Show loading while checking authentication
  if (authLoading) {
    return (
      <div className="min-h-screen bg-[#f7fafc] flex items-center justify-center">
        <div className="text-2xl text-gray-600">Loading Dashboard...</div>
      </div>
    );
  }

  // Show unauthorized message if not authenticated
  if (!user) {
    return (
      <div className="min-h-screen bg-[#f7fafc] flex items-center justify-center">
        <div className="text-2xl text-gray-600">Please log in to access the dashboard.</div>
      </div>
    );
  }

  // Use user from JWT token
  const userData = user;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#133B5C] via-[#0FAFCA] to-[#007e9e] pb-10 pt-12">
      {/* Topbar */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between px-6 py-6 mb-8 mt-8" style={{background: 'transparent'}}>
        <div className="flex items-center gap-4">
          <Image src={userData.image || userData.avatar} alt="avatar" width={64} height={64} className="w-16 h-16 rounded-full border-2 border-[#007e9e]" />
          <div>
            <div className="text-2xl font-bold text-white">Welcome, {userData.name}!</div>
            <div className="text-white/70">{userData.email}</div>
          </div>
        </div>
      </div>
      {/* Main grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {/* Orders */}
        <div className="bg-white rounded-xl shadow p-6 flex flex-col">
          <div className="flex items-center gap-2 mb-4 text-xl font-bold text-[#007e9e]"><FaBoxOpen /> Recent Orders</div>
          {/* No mock orders, so this section will be empty */}
          <Link href="/orders" className="mt-4 text-[#007e9e] hover:underline text-sm">View All Orders</Link>
        </div>
        {/* Support Tickets */}
        <div className="bg-white rounded-xl shadow p-6 flex flex-col">
          <div className="flex items-center gap-2 mb-4 text-xl font-bold text-[#01E9FE]"><FaTicketAlt /> Support Tickets</div>
          <form onSubmit={handleCreateTicket} className="flex gap-2 mb-4">
            <input value={newTicket} onChange={e => setNewTicket(e.target.value)} placeholder="New ticket subject..." className="border rounded-3xl px-4 py-2 flex-1" />
            <button type="submit" className="bg-[#01E9FE] text-white rounded-3xl px-4 py-2 font-semibold flex items-center gap-1"><FaPlus /> Create</button>
          </form>
          {tickets.length === 0 && <div className="text-gray-400">No tickets yet.</div>}
          {tickets.map(ticket => (
            <div key={ticket.id} className="border-b py-3 last:border-b-0">
              <div className="font-semibold">{ticket.subject}</div>
              <div className="text-xs text-gray-500">{ticket.status} • {ticket.date}</div>
            </div>
          ))}
        </div>
        {/* Account Settings */}
        <div className="bg-white rounded-xl shadow p-6 flex flex-col">
          <div className="flex items-center gap-2 mb-4 text-xl font-bold text-[#000f29]"><FaCog /> Account Settings</div>
          <Link href="/profile" className="mb-2 text-[#007e9e] hover:underline">Edit Profile</Link>
          <Link href="/profile/password" className="mb-2 text-[#007e9e] hover:underline">Change Password</Link>
          <Link href="/profile/address" className="mb-2 text-[#007e9e] hover:underline">Manage Addresses</Link>
        </div>
        {/* Newsletter & Offers */}
        <div className="bg-white rounded-xl shadow p-6 flex flex-col col-span-1 md:col-span-2 lg:col-span-3">
          <div className="flex items-center gap-2 mb-4 text-xl font-bold text-[#007e9e]"><FaEnvelope /> Newsletter & Offers</div>
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="flex-1">{newsletter ? "You are subscribed to our newsletter and will receive the latest offers and updates." : "You are not subscribed to our newsletter."}</div>
            <button onClick={() => setNewsletter(!newsletter)} className="px-6 py-2 rounded-3xl font-semibold border border-[#007e9e] text-[#007e9e] hover:bg-[#007e9e] hover:text-white transition">
              {newsletter ? "Unsubscribe" : "Subscribe"}
            </button>
          </div>
        </div>
        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow p-6 flex flex-col col-span-1 md:col-span-2 lg:col-span-3">
          <div className="flex items-center gap-2 mb-4 text-xl font-bold text-[#000f29]"><FaHistory /> Recent Activity</div>
          <ul className="text-sm text-gray-700 space-y-2">
            {/* No mock activity, so this section will be empty */}
          </ul>
        </div>
      </div>
    </div>
  );
} 