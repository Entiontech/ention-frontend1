import React from 'react';
import ContactForm from '../../components/ContactForm';

export default function CollaboratePage() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-[#133B5C] via-[#0FAFCA] to-[#007e9e] flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center py-20 px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tight drop-shadow-lg">Collaborate With ENTION</h1>
        <p className="text-lg md:text-2xl text-cyan-100 max-w-2xl mx-auto mb-6 font-medium">We believe in the power of partnership to drive innovation and growth. ENTION is actively seeking collaborations with investors, technology partners, and distributors who share our vision for the future of computing.</p>
      </section>
      {/* Why Partner With Us */}
      <section className="py-12 px-4 w-full max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            {/* Background decorative element */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-[#0FAFCA]/20 to-transparent rounded-full blur-xl"></div>
            
            {/* Main content with enhanced styling */}
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-1 bg-gradient-to-r from-[#0FAFCA] to-[#007e9e] rounded-full"></div>
                <span className="text-[#0FAFCA] font-semibold text-sm uppercase tracking-wider">Partnership</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Why Partner With 
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#0FAFCA] to-[#007e9e]">ENTION?</span>
              </h2>
              
              <p className="text-lg text-cyan-100 mb-8 leading-relaxed">
                ENTION is not just a laptop company; we are a <span className="font-semibold text-white">hub of innovation</span>, committed to pushing the boundaries of technology. Partnering with us means joining a journey of creating impactful products that resonate with a global audience.
              </p>
              
              {/* Key highlights */}
          <div className="space-y-4">
                <div className="flex items-center gap-3">
                
                </div>
                

              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-6 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-start gap-4">
                <div className="flex-shrink-0 size-8 text-white mt-1">
                {/* Market Leadership Icon */}
                  <svg aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8">
                    <path d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-3.75-2.25M21 12l-3.75 2.25" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Market Leadership</h3>
                <p className="text-base text-cyan-100">Benefit from our established brand presence and rapidly growing market share in the premium laptop segment.</p>
              </div>
            </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-6 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-start gap-4">
                <div className="flex-shrink-0 size-8 text-white mt-1">
                {/* Innovative Pipeline Icon */}
                  <svg aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8">
                    <path d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Innovative Pipeline</h3>
                <p className="text-base text-cyan-100">Gain access to our pipeline of next-generation products that are set to redefine the user experience.</p>
              </div>
            </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-6 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-start gap-4">
                <div className="flex-shrink-0 size-8 text-white mt-1">
                {/* Shared Success Icon */}
                  <svg aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8">
                    <path d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Shared Success</h3>
                <p className="text-base text-cyan-100">We are dedicated to building mutually beneficial relationships that foster long-term growth and profitability.</p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
      {/* Become an Investor + Contact Form */}
      <section className="py-16 px-4 bg-white/10 rounded-xl shadow-sm my-16 w-full max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-white mb-3">Become an Investor</h2>
            <p className="text-base text-cyan-100 mb-4">ENTION presents a compelling investment opportunity in the rapidly growing laptop market. We have a proven track record of innovation, strong financial fundamentals, and a clear strategic vision for global expansion.</p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 size-6 text-[#0FAFCA] mt-1">
                  <svg aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </div>
                <p className="text-sm text-cyan-100">Established market presence with growing brand recognition</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 size-6 text-[#0FAFCA] mt-1">
                  <svg aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </div>
                <p className="text-sm text-cyan-100">Innovative product pipeline with cutting-edge technology</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 size-6 text-[#0FAFCA] mt-1">
                  <svg aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </div>
                <p className="text-sm text-cyan-100">Strong financial position with clear growth trajectory</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 size-6 text-[#0FAFCA] mt-1">
                  <svg aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </div>
                <p className="text-sm text-cyan-100">Experienced leadership team with proven execution capabilities</p>
              </div>
            </div>
          </div>
          <div className="bg-white/80 rounded-lg shadow-md p-6 card">
            <h3 className="text-xl font-semibold text-[#133B5C] mb-4">Get in Touch</h3>
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSeg4vE5Nfcgf4IaDUOE1GlxWJ2YEKluhPKZVgRPQeyRnC4KUQ/viewform?embedded=true" 
              width="100%" 
              height="600" 
              frameBorder="0" 
              marginHeight="0" 
              marginWidth="0"
              style={{ minHeight: '600px' }}
            >
              Loading…
            </iframe>
          </div>
        </div>
      </section>
      {/* Partnership Opportunities */}
      <section className="py-12 px-4 w-full max-w-6xl">
        <h2 className="text-3xl font-semibold text-white text-center mb-4">Partnership Opportunities</h2>
        <p className="text-base text-cyan-100 text-center max-w-3xl mx-auto mb-12">We offer diverse opportunities for collaboration across our value chain.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/80 rounded-lg shadow-md p-6 card text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-[#0FAFCA]/30 rounded-full text-[#0FAFCA]">
                {/* Made In India Icon */}
                <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-[#133B5C]">Made In India Pride</h3>
            <p className="text-base text-[#133B5C] mt-2">Supporting domestic manufacturing and contributing to India's technological advancement.</p>
          </div>
          <div className="bg-white/80 rounded-lg shadow-md p-6 card text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-[#0FAFCA]/30 rounded-full text-[#0FAFCA]">
                {/* Cutting-Edge Technology Icon */}
                <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-[#133B5C]">Cutting-Edge Technology</h3>
            <p className="text-base text-[#133B5C] mt-2">Powered by the latest innovations to deliver exceptional performance and user experience.</p>
          </div>
          <div className="bg-white/80 rounded-lg shadow-md p-6 card text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-[#0FAFCA]/30 rounded-full text-[#0FAFCA]">
                {/* Affordable Solutions Icon */}
                <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-[#133B5C]">Affordable Solutions</h3>
            <p className="text-base text-[#133B5C] mt-2">Tailored for every budget without compromising on quality and performance.</p>
          </div>
          <div className="bg-white/80 rounded-lg shadow-md p-6 card text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-[#0FAFCA]/30 rounded-full text-[#0FAFCA]">
                {/* Sustainability First Icon */}
                <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-[#133B5C]">Sustainability First</h3>
            <p className="text-base text-[#133B5C] mt-2">Eco-friendly manufacturing and recycling programs for a greener future.</p>
          </div>
        </div>
      </section>

      {/* Our Offers */}
      <section className="py-12 px-4 w-full max-w-6xl">
        <h2 className="text-3xl font-semibold text-white text-center mb-4">Our Offers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* For Investors */}
          <div className="bg-gray-100 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-[#133B5C] mb-3">For Investors</h3>
            <p className="text-base text-[#133B5C] mb-4">Join us in revolutionizing the tech industry! Partner with ENTION to bring cutting-edge laptops to the market.</p>
            <div className="space-y-2 mb-4">
              <div className="flex items-start gap-2">
                <div className="flex-shrink-0 size-4 text-[#0FAFCA] mt-1">
                  <svg aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-4 h-4">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </div>
                <p className="text-sm text-[#133B5C]">High ROI potential</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="flex-shrink-0 size-4 text-[#0FAFCA] mt-1">
                  <svg aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-4 h-4">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </div>
                <p className="text-sm text-[#133B5C]">Sustainable and future-ready tech</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="flex-shrink-0 size-4 text-[#0FAFCA] mt-1">
                  <svg aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-4 h-4">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </div>
                <p className="text-sm text-[#133B5C]">Transparent collaboration</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="flex-shrink-0 size-4 text-[#0FAFCA] mt-1">
                  <svg aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-4 h-4">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </div>
                <p className="text-sm text-[#133B5C]">Comprehensive Business Plans</p>
              </div>
            </div>
            <button className="bg-[#0FAFCA] hover:bg-[#007e9e] text-white font-semibold py-2 px-4 rounded-lg transition">
              Explore Investment Opportunities
            </button>
          </div>

          {/* For Dealers */}
          <div className="bg-gray-100 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-[#133B5C] mb-3">For Dealers</h3>
            <p className="text-base text-[#133B5C] mb-4">Become a trusted partner in delivering our cutting-edge products to customers nationwide.</p>
            <div className="space-y-2 mb-4">
              <div className="flex items-start gap-2">
                <div className="flex-shrink-0 size-4 text-[#0FAFCA] mt-1">
                  <svg aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-4 h-4">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </div>
                <p className="text-sm text-[#133B5C]">Exclusive Dealer Discounts: Get competitive margins to grow your business.</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="flex-shrink-0 size-4 text-[#0FAFCA] mt-1">
                  <svg aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-4 h-4">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </div>
                <p className="text-sm text-[#133B5C]">Priority Stock Availability: Always have our latest models in your inventory.</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="flex-shrink-0 size-4 text-[#0FAFCA] mt-1">
                  <svg aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-4 h-4">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </div>
                <p className="text-sm text-[#133B5C]">Marketing & Sales Support: Access promotional materials, training, and customer insights.</p>
              </div>
            </div>
            <button className="bg-[#0FAFCA] hover:bg-[#007e9e] text-white font-semibold py-2 px-4 rounded-lg transition">
              Join Our Dealer Network
            </button>
          </div>

          {/* For Service Providers */}
          <div className="bg-gray-100 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-[#133B5C] mb-3">For Service Providers</h3>
            <p className="text-base text-[#133B5C] mb-4">Collaborate with us to offer exceptional after-sales service and technical support.</p>
            <div className="space-y-2 mb-4">
              <div className="flex items-start gap-2">
                <div className="flex-shrink-0 size-4 text-[#0FAFCA] mt-1">
                  <svg aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-4 h-4">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </div>
                <p className="text-sm text-[#133B5C]">Access to repair kits and spare parts</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="flex-shrink-0 size-4 text-[#0FAFCA] mt-1">
                  <svg aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-4 h-4">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </div>
                <p className="text-sm text-[#133B5C]">Regular training programs</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="flex-shrink-0 size-4 text-[#0FAFCA] mt-1">
                  <svg aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-4 h-4">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </div>
                <p className="text-sm text-[#133B5C]">Performance-based incentives</p>
              </div>
            </div>
            <button className="bg-[#0FAFCA] hover:bg-[#007e9e] text-white font-semibold py-2 px-4 rounded-lg transition">
              Partner With Us
            </button>
          </div>

          {/* For Universities */}
          <div className="bg-gray-100 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-[#133B5C] mb-3">For Universities</h3>
            <p className="text-base text-[#133B5C] mb-4">Transform education with customized laptops and bulk order discounts.</p>
            <div className="space-y-2 mb-4">
              <div className="flex items-start gap-2">
                <div className="flex-shrink-0 size-4 text-[#0FAFCA] mt-1">
                  <svg aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-4 h-4">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </div>
                <p className="text-sm text-[#133B5C]">Affordable bulk pricing</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="flex-shrink-0 size-4 text-[#0FAFCA] mt-1">
                  <svg aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-4 h-4">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </div>
                <p className="text-sm text-[#133B5C]">Custom configurations for academic needs</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="flex-shrink-0 size-4 text-[#0FAFCA] mt-1">
                  <svg aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-4 h-4">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </div>
                <p className="text-sm text-[#133B5C]">Warranty and on-campus tech support</p>
              </div>
            </div>
            <button className="bg-[#0FAFCA] hover:bg-[#007e9e] text-white font-semibold py-2 px-4 rounded-lg transition">
              Get Academic Pricing
            </button>
          </div>
        </div>
      </section>

      {/* Explore Our Specialized Offers */}
      <section className="py-12 px-4 w-full max-w-6xl">
        <h2 className="text-3xl font-semibold text-white text-center mb-8">Explore Our Specialized Offers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* For Investors */}
          <div className="bg-gray-100 rounded-lg shadow-md p-6">
            <div className="flex flex-col items-center text-center mb-4">
              <div className="flex-shrink-0 size-12 bg-black/10 rounded-lg flex items-center justify-center mb-3">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#133B5C] mb-2">For Investors</h3>
              <p className="text-sm text-[#133B5C] mb-3">Your opportunity to invest in the future of technology is here!</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <div className="flex-shrink-0 size-4 text-black mt-1">
                  <svg aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-4 h-4">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </div>
                <p className="text-xs text-[#133B5C]">High-Growth Potential</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="flex-shrink-0 size-4 text-black mt-1">
                  <svg aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-4 h-4">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </div>
                <p className="text-xs text-[#133B5C]">Sustainable Manufacturing</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="flex-shrink-0 size-4 text-black mt-1">
                  <svg aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-4 h-4">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </div>
                <p className="text-xs text-[#133B5C]">Transparent strategies</p>
              </div>
            </div>
          </div>

          {/* For Service Providers */}
          <div className="bg-blue-50 rounded-lg shadow-md p-6">
            <div className="flex flex-col items-center text-center mb-4">
              <div className="flex-shrink-0 size-12 bg-black/10 rounded-lg flex items-center justify-center mb-3">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#133B5C] mb-2">For Service Providers</h3>
              <p className="text-sm text-[#133B5C] mb-3">Provide your clients with reliable after-sales support and technical expertise.</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <div className="flex-shrink-0 size-4 text-black mt-1">
                  <svg aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-4 h-4">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </div>
                <p className="text-xs text-[#133B5C]">Access to Tools and Documentation</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="flex-shrink-0 size-4 text-black mt-1">
                  <svg aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-4 h-4">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </div>
                <p className="text-xs text-[#133B5C]">Dedicated Training Programs</p>
              </div>
            </div>
          </div>

          {/* For Universities and Corporate */}
          <div className="bg-gray-100 rounded-lg shadow-md p-6">
            <div className="flex flex-col items-center text-center mb-4">
              <div className="flex-shrink-0 size-12 bg-black/10 rounded-lg flex items-center justify-center mb-3">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#133B5C] mb-2">For Universities and Corporate</h3>
              <p className="text-sm text-[#133B5C] mb-3">Empowering tomorrow's leaders with technology today.</p>
            </div>
            <div className="space-y-2 mb-4">
              <div className="flex items-start gap-2">
                <div className="flex-shrink-0 size-4 text-black mt-1">
                  <svg aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-4 h-4">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </div>
                <p className="text-xs text-[#133B5C]">Bulk Discounts</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="flex-shrink-0 size-4 text-black mt-1">
                  <svg aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-4 h-4">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </div>
                <p className="text-xs text-[#133B5C]">Customizable Configurations</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="flex-shrink-0 size-4 text-black mt-1">
                  <svg aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-4 h-4">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </div>
                <p className="text-xs text-[#133B5C]">On-Campus Support</p>
              </div>
            </div>
            <button className="w-full bg-[#0FAFCA] hover:bg-[#007e9e] text-white font-semibold py-2 px-4 rounded-lg transition text-sm">
              Discover University Solutions
            </button>
          </div>
        </div>
      </section>

      {/* Our Product Line */}
      <section className="py-12 px-4 w-full max-w-6xl">
        <h2 className="text-3xl font-semibold text-white text-center mb-8">Our Product Line</h2>
        <div className="bg-blue-50 rounded-lg shadow-md p-6">
          <div className="flex items-start gap-4 mb-4">
            <div className="flex-shrink-0 size-12 bg-black/10 rounded-lg flex items-center justify-center">
              <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-[#133B5C] mb-2">Our Product Line</h3>
              <p className="text-base text-[#133B5C] mb-4">Laptops Designed for Every Need</p>
              <p className="text-sm text-[#133B5C] mb-4">From high-performance laptops for professionals to budget-friendly options for students, we offer a diverse range of devices that cater to:</p>
              <div className="space-y-2 mb-4">
                <div className="flex items-start gap-2">
                  <div className="flex-shrink-0 size-4 text-black mt-1">
                    <svg aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-4 h-4">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </div>
                  <p className="text-sm text-[#133B5C]">Businesses and startups</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="flex-shrink-0 size-4 text-black mt-1">
                    <svg aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-4 h-4">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </div>
                  <p className="text-sm text-[#133B5C]">Educational institutions</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="flex-shrink-0 size-4 text-black mt-1">
                    <svg aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-4 h-4">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </div>
                  <p className="text-sm text-[#133B5C]">Gamers and creatives</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="flex-shrink-0 size-4 text-black mt-1">
                    <svg aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-4 h-4">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </div>
                  <p className="text-sm text-[#133B5C]">Everyday users</p>
                </div>
              </div>
              <button className="bg-[#0FAFCA] hover:bg-[#007e9e] text-white font-semibold py-2 px-4 rounded-lg transition">
                Explore Our Product Catalog
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose ENTION */}
      <section className="py-12 px-4 w-full max-w-6xl">
        <h2 className="text-3xl font-semibold text-white text-center mb-8">Why Choose ENTION</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Innovation Card */}
          <div className="bg-gray-100 rounded-lg shadow-md p-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-black/10 rounded-full">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-[#133B5C] mb-2">Innovation</h3>
            <p className="text-sm text-[#133B5C]">Cutting-edge designs and top-tier performance.</p>
          </div>

          {/* Affordability Card */}
          <div className="bg-blue-50 rounded-lg shadow-md p-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-black/10 rounded-full">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-[#133B5C] mb-2">Affordability</h3>
            <p className="text-sm text-[#133B5C]">Competitive pricing ensures accessibility for all.</p>
          </div>

          {/* Sustainability Card */}
          <div className="bg-gray-100 rounded-lg shadow-md p-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-black/10 rounded-full">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-[#133B5C] mb-2">Sustainability</h3>
            <p className="text-sm text-[#133B5C]">Eco-friendly materials and manufacturing processes.</p>
          </div>

          {/* Customer Support Card */}
          <div className="bg-blue-50 rounded-lg shadow-md p-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-black/10 rounded-full">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-[#133B5C] mb-2">Customer Support</h3>
            <p className="text-sm text-[#133B5C]">A robust network of service providers and on-site technicians.</p>
          </div>
        </div>
      </section>

      {/* Latest Updates & News */}
      <section className="py-12 px-4 w-full max-w-6xl">
        <h2 className="text-3xl font-semibold text-white text-center mb-8">Latest Updates & News</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* New Product Launches Card */}
          <div className="bg-gray-100 rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-black/10 rounded-full">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-[#133B5C] mb-2">New Product Launches</h3>
            <p className="text-sm text-[#133B5C] mb-4">Stay updated with our latest laptop models and innovations.</p>
            <a href="#" className="inline-block bg-[#0FAFCA] hover:bg-[#007e9e] text-white font-semibold py-2 px-4 rounded-lg transition text-sm">
              Read More
            </a>
          </div>

          {/* Success Stories Card */}
          <div className="bg-blue-50 rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-black/10 rounded-full">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-[#133B5C] mb-2">Success Stories</h3>
            <p className="text-sm text-[#133B5C] mb-4">Discover how our partners are growing with ENTION.</p>
            <a href="#" className="inline-block bg-[#0FAFCA] hover:bg-[#007e9e] text-white font-semibold py-2 px-4 rounded-lg transition text-sm">
              Read More
            </a>
          </div>

          {/* Events & Webinars Card */}
          <div className="bg-gray-100 rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-black/10 rounded-full">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-[#133B5C] mb-2">Events & Webinars</h3>
            <p className="text-sm text-[#133B5C] mb-4">Join our upcoming webinars and industry events.</p>
            <a href="#" className="inline-block bg-[#0FAFCA] hover:bg-[#007e9e] text-white font-semibold py-2 px-4 rounded-lg transition text-sm">
              Read More
            </a>
          </div>
        </div>
      </section>
      <div className="h-12" />
    </main>
  );
} 