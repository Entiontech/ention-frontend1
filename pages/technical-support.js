
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiDownload, FiHeadphones, FiPhone, FiTool, FiChevronRight, FiSearch, FiMonitor, FiSettings, FiShield, FiWifi, FiBatteryCharging, FiCheckCircle, FiAlertTriangle, FiBookOpen, FiArrowRight, FiMessageCircle } from 'react-icons/fi';
import { useState } from 'react';
import dynamic from 'next/dynamic';

const resourceLinks = [
  { title: 'Troubleshooting', desc: 'Guides and solutions for common issues', href: '#' },
  { title: 'Drivers & Downloads', desc: 'Get the latest drivers and software', href: '#' },
  { title: 'Warranty Services', desc: 'Check and manage your warranty', href: '#' },
  { title: 'User Manuals', desc: 'Find and download user manuals', href: '#' },
  { title: 'Product Registration', desc: 'Register your Ention product', href: '#' },
  { title: 'Order Parts', desc: 'Order replacement parts and accessories', href: '#' },
  { title: 'FAQs', desc: 'Frequently asked questions', href: '#' },
  { title: 'Community Forums', desc: 'Join the Ention community', href: '#' },
  { title: 'Contact Support', desc: 'Get in touch with our support team', href: '#' },
];

const articleData = [
  {
    title: 'How to Optimize Battery Life',
    desc: "Learn tips to extend your laptop's battery performance",
    views: '15,234 views',
    icon: FiBatteryCharging,
    img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80',
    link: '#',
  },
  {
    title: 'WiFi Connection Issues',
    desc: 'Troubleshoot wireless connectivity problems',
    views: '12,891 views',
    icon: FiWifi,
    img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    link: '#',
  },
  {
    title: 'Installing Latest Drivers',
    desc: 'Step-by-step guide to update your drivers',
    views: '18,567 views',
    icon: FiDownload,
    img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80',
    link: '#',
  },
  {
    title: 'Laptop Overheating Solutions',
    desc: 'Fix overheating issues and improve cooling',
    views: '9,432 views',
    icon: FiAlertTriangle,
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    link: '#',
  },
  {
    title: 'Keyboard Not Working Fix',
    desc: 'Resolve keyboard and key responsiveness issues',
    views: '11,765 views',
    icon: FiTool,
    img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    link: '#',
  },
  {
    title: 'Screen Flickering Solutions',
    desc: 'Fix display issues and screen problems',
    views: '7,891 views',
    icon: FiMonitor,
    img: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80',
    link: '#',
  },
];

const categoryData = [
  {
    key: 'hardware',
    icon: FiMonitor,
    title: 'Hardware Support',
    items: [
      'Battery Issues',
      'Display Problems',
      'Keyboard & Touchpad',
      'Audio Issues',
      'Overheating',
    ],
  },
  {
    key: 'software',
    icon: FiSettings,
    title: 'Software Support',
    items: [
      'Driver Updates',
      'BIOS Updates',
      'Windows Issues',
      'Performance Optimization',
      'Security Updates',
    ],
  },
  {
    key: 'warranty',
    icon: FiShield,
    title: 'Warranty & Service',
    items: [
      'Check Warranty Status',
      'Extended Warranty',
      'Repair Services',
      'Parts Replacement',
      'Service Centers',
    ],
  },
];

const IconWrapper = ({ icon: Icon, size = 24 }) => <Icon size={size} />;

export default function TechnicalSupport() {
  const [modalOpen, setModalOpen] = useState(false);
  const [docxUrl, setDocxUrl] = useState(null);
  const [docxHtml, setDocxHtml] = useState('');

  // Dynamically import mammoth only on client
  const loadDocx = async (url) => {
    setDocxHtml('Loading...');
    if (typeof window !== 'undefined') {
      const mammoth = await import('mammoth');
      const response = await fetch(url);
      const arrayBuffer = await response.arrayBuffer();
      const result = await mammoth.convertToHtml({ arrayBuffer });
      setDocxHtml(result.value);
    }
  };

  const handleOpenDocx = (filename) => {
    const url = `/assets/support_page_docx/${filename}`;
    setDocxUrl(url);
    setModalOpen(true);
    loadDocx(url);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setDocxUrl(null);
    setDocxHtml('');
  };

  return (
    <main className="bg-[#070D2A] min-h-screen">
      
      {/* Header Section */}
      <header className="text-center py-20">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3 space-y-32">Ention Support</h1>
        <p className="text-lg md:text-xl text-white mb-8 font-medium">Get help with your Ention laptop. Find drivers, manuals, troubleshooting guides and more.</p>
        <form className="flex justify-center items-center mx-auto max-w-xl border border-gray-200 rounded-lg overflow-hidden">
          <div className="relative w-full">
            <input className="w-full py-3 px-4 pr-12 bg-gray-100 border-none rounded-l-lg text-base focus:outline-none" placeholder="Search for support articles, drivers, or product guides..." aria-label="Search" />
            <button type="submit" aria-label="Search" className="absolute right-0 top-0 bottom-0 px-3 text-gray-600 hover:text-blue-600 flex items-center justify-center text-xl">
              <FiSearch />
            </button>
          </div>
        </form>
      </header>

      {/* Quick Support Options */}
      <section className="py-12 w-full">
        <h2 className="text-center text-2xl font-extrabold underline underline-offset-8 mb-10 text-white ">Quick Support Options</h2>
        <div className="flex flex-wrap justify-center gap-8 mb-8">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-md flex flex-col items-center w-72 max-w-xs p-0 flex-1 justify-between">
            <div className="flex items-center justify-center w-full h-[150px] rounded-t-2xl bg-[#E6F7FF]">
              <FiPhone size={64} className="text-[#0091D1]" />
            </div>
            <div className="flex flex-col items-center p-4 w-full flex-1 justify-between">
              <div className="font-bold text-lg mb-1">Request a Callback</div>
              <div className="text-gray-600 text-base mb-2 font-semibold">We’re here to help!</div>
              <div className="text-gray-600 text-base mb-4">Got a question about our laptops, pre-booking, service, or anything else? Just fill out this form, and one of our team members will call you back at your convenience.</div>
              <button className="text-[#0091D1] font-bold text-base hover:underline transition text-center p-0 bg-transparent border-none shadow-none mt-auto" onClick={() => window.location.href='/support/request-callback'}>Request Callback</button>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-md flex flex-col items-center w-72 max-w-xs p-0 flex-1 justify-between">
            <div className="flex items-center justify-center w-full h-[150px] rounded-t-2xl bg-[#E6F7FF]">
              <FiTool size={64} className="text-[#0091D1]" />
            </div>
            <div className="flex flex-col items-center p-4 w-full flex-1 justify-between">
              <div className="font-bold text-lg mb-1">Service Request Booking</div>
              <div className="text-gray-600 text-base mb-2 font-semibold">Need help with your Ention device?</div>
              <div className="text-gray-600 text-base mb-4">We’re committed to providing quick and hassle–free support. Fill out the form below, and our service team will get in touch with you shortly.</div>
              <button className="text-[#0091D1] font-bold text-base hover:underline transition text-center p-0 bg-transparent border-none shadow-none mt-auto" onClick={() => window.location.href='/support/service-request'}>Book Service</button>
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-md flex flex-col items-center w-72 max-w-xs p-0 flex-1 justify-between">
            <div className="flex items-center justify-center w-full h-[150px] rounded-t-2xl bg-[#E6F7FF]">
              <FiShield size={64} className="text-[#0091D1]" />
            </div>
            <div className="flex flex-col items-center p-4 w-full flex-1 justify-between">
              <div className="font-bold text-lg mb-1">Required Extended Warranty</div>
              <div className="text-gray-600 text-base mb-2 font-semibold">Peace of Mind. Extended.</div>
              <div className="text-gray-600 text-base mb-4">Our Extended Warranty Plans, you can continue to enjoy uninterrupted service and comprehensive protection for your Ention devices—beyond the standard warranty period.</div>
              <button className="text-[#0091D1] font-bold text-base hover:underline transition text-center p-0 bg-transparent border-none shadow-none mt-auto" onClick={() => window.location.href='/support/extended-warranty'}>Buy Extended Warranty</button>
            </div>
          </div>
        </div>
      </section>
      {/* Modal for docx preview */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 relative">
            <button onClick={handleCloseModal} className="absolute top-2 right-2 text-2xl text-gray-600 hover:text-black">&times;</button>
            <div dangerouslySetInnerHTML={{ __html: docxHtml }} />
          </div>
        </div>
      )}

      {/* Support Downloads & Resources */}
      <section className="py-12 w-full">
        <h2 className="text-center text-2xl font-extrabold underline underline-offset-8  mb-10 text-white">Support Downloads & Resources</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {resourceLinks.filter(link => !['Drivers & Downloads', 'Warranty Services', 'Order Parts'].includes(link.title)).map(link => (
            <a href={link.title === 'Troubleshooting' ? '/support/troubleshooting' : '/404'} key={link.title} tabIndex={0} aria-label={link.title} className="bg-white rounded-xl shadow-md p-8 flex flex-col hover:shadow-lg transition-all cursor-pointer">
              <div className="font-bold text-lg text-sky-700 mb-2">{link.title}</div>
              <div className="text-gray-600 text-base">{link.desc}</div>
            </a>
          ))}
        </div>
      </section>

      {/* Browse Support by Category */}
      <section className="py-12 w-full">
        <h2 className="text-center text-2xl font-extrabold underline underline-offset-8  mb-10 text-white">Browse Support by Category</h2>
        <div className="flex flex-wrap justify-center gap-8 mb-8">
          {/* Hardware Support */}
          <div className="bg-white rounded-2xl shadow-md p-8 min-w-[240px] max-w-xs flex-1 flex flex-col">
            <div className="flex items-center text-sky-700 font-bold text-lg mb-4 gap-2">
              <IconWrapper icon={FiMonitor} /> Hardware Support
            </div>
            <ul className="text-gray-800 text-base font-medium flex-1 flex flex-col gap-2">
              <li><a href="/support/troubleshooting/laptop-not-charging" className="hover:underline">Battery Issues</a></li>
              <li><a href="/404" className="hover:underline">Display Problems</a></li>
              <li><a href="/support/troubleshooting/keyboard-not-responding" className="hover:underline">Keyboard & Touchpad</a></li>
              <li><a href="/support/troubleshooting/no-sound-from-laptop" className="hover:underline">Audio Issues</a></li>
              <li><a href="/support/troubleshooting/laptop-getting-too-hot" className="hover:underline">Overheating</a></li>
            </ul>
          </div>
          {/* Software Support */}
          <div className="bg-white rounded-2xl shadow-md p-8 min-w-[240px] max-w-xs flex-1 flex flex-col">
            <div className="flex items-center text-sky-700 font-bold text-lg mb-4 gap-2">
              <IconWrapper icon={FiSettings} /> Software Support
            </div>
            <ul className="text-gray-800 text-base font-medium flex-1 flex flex-col gap-2">
              <li><a href="/404" className="hover:underline">Windows Issues</a></li>
              <li><a href="/support/troubleshooting/laptop-running-slow" className="hover:underline">Performance Optimization</a></li>
              <li><a href="/404" className="hover:underline">Security Updates</a></li>
            </ul>
          </div>
          {/* Warranty & Service */}
          <div className="bg-white rounded-2xl shadow-md p-8 min-w-[240px] max-w-xs flex-1 flex flex-col">
            <div className="flex items-center text-sky-700 font-bold text-lg mb-4 gap-2">
              <IconWrapper icon={FiShield} /> Warranty & Service
            </div>
            <ul className="text-gray-800 text-base font-medium flex-1 flex flex-col gap-2">
              <li><a href="/support/extended-warranty" className="hover:underline">Extended Warranty</a></li>
              <li><a href="/404" className="hover:underline">Repair Services</a></li>
              <li><a href="/404" className="hover:underline">Parts Replacement</a></li>
              <li><a href="/404" className="hover:underline">Service Centers</a></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Find Your Product */}
      <section className="py-12 w-full">
        <h3 className="text-center text-xl font-extrabold underline underline-offset-8 mb-2 text-white">Find Your Product</h3>
        <p className="text-center text-white mb-6">Enter your service tag or product model to get personalized support</p>
        <form className="flex flex-col items-center gap-3 bg-white rounded-xl shadow-md p-8 max-w-md mx-auto">
          <input className="w-full border border-gray-200 rounded-md py-3 px-4 text-base" placeholder="e.g., ENTION-XPS-13-2024" aria-label="Service Tag or Product Model" />
          <button type="submit" className="w-full bg-gray-900 text-white font-bold py-3 rounded-md hover:bg-black transition">Find My Product</button>
        </form>
        <div className="text-center text-sky-600 mt-2 text-base">Don't know your service tag? <a href="#" className="underline">Learn how to find it</a></div>
      </section>

      {/* Service Tools & Features */}
      <section className="py-12 w-full">
        <h2 className="text-center text-2xl font-extrabold underline underline-offset-8 mb-10 text-white">Service Tools & Features</h2>
        <div className="flex flex-wrap justify-center gap-8 mb-8">
          <div className="bg-green-50 rounded-2xl shadow-md p-8 min-w-[320px] max-w-md flex-1 flex flex-col items-start">
            <div className="flex items-center text-green-700 font-bold text-lg mb-4 gap-2"><FiBookOpen /> Track Service Status</div>
            <div className="text-gray-800 text-base mb-6">Monitor your repair progress in real-time and get updates on your service request.</div>
            <button className="w-full bg-green-700 text-white font-bold py-3 rounded-md hover:bg-green-800 transition">Track Your Service</button>
          </div>
        </div>
      </section>

      {/* Help Footer */}
      <footer className="text-center py-12 mt-12">
        <h3 className="text-2xl font-extrabold underline underline-offset-8  mb-2 text-white">Still Need Help?</h3>
        <p className="text-lg text-white mb-6">Our support team is here to assist you 24/7</p>
        <div className="flex justify-center gap-4">
          <button className="bg-white border border-sky-600 text-sky-600 font-bold py-3 px-8 rounded-md hover:bg-sky-50 transition">Contact Support</button>
          <button className="bg-sky-600 text-white font-bold py-3 px-8 rounded-md hover:bg-sky-700 transition">Schedule Callback</button>
        </div>
      </footer>

      {/* Floating Chat Button */}
      <button aria-label="Chat with support" className="fixed right-8 bottom-8 z-50 bg-sky-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-3xl shadow-lg hover:bg-sky-700 transition">
        <FiMessageCircle />
      </button>
      
    </main>
  );
}
