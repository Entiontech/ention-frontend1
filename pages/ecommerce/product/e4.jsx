import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Footer from "components/layout/footer";
import Header from "components/layout/header";
import { Zoom } from "react-awesome-reveal";
import dynamic from 'next/dynamic';
import gradientbg1 from "/public/assets/gradient-bg1.png";
import ImageCaraousel from "components/ImageCaraousel";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaShoppingCart, FaBolt, FaCamera, FaBatteryFull, FaMicrochip } from "react-icons/fa";
import { BentoGrid, BentoGridItem } from "./index";

const E4Images = [
  "/assets/product_/e4/IMG_9893.webp",
  "/assets/product_/e4/IMG_9879 (1).webp",
  "/assets/product_/e4/IMG_9878.webp",
  "/assets/product_/e4/IMG_9877.webp",
  "/assets/product_/e4/IMG_9873 (1).webp",
  "/assets/product_/e4/IMG_9873.webp",
  "/assets/product_/e4/IMG_9872.webp",
  "/assets/product_/e4/IMG_9867 (1).webp",
  "/assets/product_/e4/IMG_9860.webp",
  "/assets/product_/e4/IMG_1125.webp",
  "/assets/product_/e4/IMG_1124.webp",
  "/assets/product_/e4/IMG_1123.webp",
  "/assets/product_/e4/IMG_1122.webp",
];

const E5FeatureImages = [
  "/assets/product_/e5/feature_images/1.png",
  "/assets/product_/e5/feature_images/Copy of Copy of 28,000 (1).png",
  "/assets/product_/e5/feature_images/Copy of Copy of 28,000 (2).png",
  "/assets/product_/e5/feature_images/copy uncut (4).png",
  "/assets/product_/e5/feature_images/copy uncut (5).png",
];

const ramOptions = ["8GB", "16GB", "32GB"];
const ssdOptions = ["512GB SSD", "1TB SSD", "2TB SSD"];
const warrantyOptions = ["18 months (Default)", "+6 Months", "+1 Year"];
const originalPrice = 59999;

function ReviewForm() {
  const [review, setReview] = useState("");
  const [files, setFiles] = useState([]);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <form className="mb-6 bg-transparent flex flex-col gap-4 border-none shadow-none">
      <div className="flex flex-col md:flex-row md:items-center gap-2">
        <label className="font-medium text-sm text-gray-700 md:w-32">Your Review</label>
        <textarea
          className="border border-gray-200 rounded-md p-2 min-h-[60px] w-full text-sm focus:ring-1 focus:ring-[#007e9e] transition bg-[#fafbfc]"
          placeholder="Share your experience..."
          value={review}
          onChange={e => setReview(e.target.value)}
        />
      </div>
      <div className="flex flex-col md:flex-row md:items-center gap-2">
        <label className="font-medium text-sm text-gray-700 md:w-32">Photos/Videos</label>
        <input
          type="file"
          accept="image/*,video/*"
          multiple
          className="text-xs file:mr-2 file:py-1 file:px-2 file:rounded file:border-0 file:bg-[#f0f4f8] file:text-gray-600 file:font-medium"
          onChange={e => setFiles([...e.target.files])}
        />
      </div>
      <div className="flex flex-col md:flex-row md:items-center gap-2">
        <label className="font-medium text-sm text-gray-700 md:w-32">Your Rating</label>
        <div className="flex gap-1 items-center">
          {[1,2,3,4,5].map(star => (
            <button
              type="button"
              key={star}
              onClick={() => setRating(star)}
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(0)}
              className="text-2xl focus:outline-none transition-transform duration-100 px-0.5"
              style={{
                color: (hover || rating) >= star ? '#FFD700' : '#E5E7EB',
                transform: (hover === star || rating === star) ? 'scale(1.1)' : 'scale(1)'
              }}
              aria-label={`Rate ${star} star${star > 1 ? 's' : ''}`}
            >
              ★
            </button>
          ))}
        </div>
      </div>
      <div className="flex justify-end mt-2">
        <button
          type="submit"
          className="bg-[#007e9e] text-white px-6 py-2 rounded-md font-semibold text-sm shadow-none hover:bg-[#01E9FE] hover:text-[#000f29] transition border-0"
          style={{boxShadow: 'none'}}
        >
          Submit Review
        </button>
      </div>
    </form>
  );
}

const PRODUCT_ID = "E4";

export default function E4ProductPage() {
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedRam, setSelectedRam] = useState(ramOptions[0]);
  const [selectedSSD, setSelectedSSD] = useState(ssdOptions[0]);
  const [selectedWarranty, setSelectedWarranty] = useState(warrantyOptions[0]);
  const [coupon, setCoupon] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponError, setCouponError] = useState("");
  const [offerPrice, setOfferPrice] = useState(null);
  // Review section state
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [loadingReviews, setLoadingReviews] = useState(true);
  const [reviewError, setReviewError] = useState(null);
  const [selectedRating, setSelectedRating] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [reviewTitle, setReviewTitle] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [reviewRating, setReviewRating] = useState(0);
  const [reviewTopic, setReviewTopic] = useState("");
  const [reviewFiles, setReviewFiles] = useState([]);
  // Pre Book overlay state
  const [showPreBookOverlay, setShowPreBookOverlay] = useState(false);

  // Fetch reviews from backend
  useEffect(() => {
    setLoadingReviews(true);
    fetch(`/api/reviews?productId=${PRODUCT_ID}`)
      .then(res => res.json())
      .then(data => {
        setReviews(data.reviews || []);
        setLoadingReviews(false);
      })
      .catch(err => {
        setReviewError("Failed to load reviews");
        setLoadingReviews(false);
      });
  }, []);

  // Generate filter options from real data
  const ratingOptions = Array.from(new Set(reviews.map(r => r.rating))).sort((a, b) => b - a);
  const topicOptions = Array.from(new Set(reviews.map(r => r.topic).filter(Boolean)));

  // Filtered reviews
  const filteredReviews = reviews.filter(r =>
    (!selectedRating || r.rating === Number(selectedRating)) &&
    (!selectedTopic || r.topic === selectedTopic)
  );

  // Submit review handler
  const handleSubmitReview = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId: PRODUCT_ID,
          user: "Anonymous", // Replace with real user if available
          rating: reviewRating,
          topic: reviewTopic,
          text: reviewText,
          title: reviewTitle
        })
      });
      if (!res.ok) throw new Error("Failed to submit review");
      // Refresh reviews
      const refreshed = await fetch(`/api/reviews?productId=${PRODUCT_ID}`).then(r => r.json());
      setReviews(refreshed.reviews || []);
      setShowReviewForm(false);
      setReviewTitle("");
      setReviewText("");
      setReviewRating(0);
      setReviewTopic("");
    } catch (err) {
      setSubmitError("Failed to submit review");
    } finally {
      setSubmitting(false);
    }
  };

  const changeImage = (dir) => {
    setCurrentImage((prev) => (prev + dir + E4Images.length) % E4Images.length);
  };
  const setImage = (idx) => setCurrentImage(idx);

  const handleApplyCoupon = () => {
    if (coupon.trim().toUpperCase() === "SAVE10") {
      setOfferPrice(Math.round(originalPrice * 0.9));
      setCouponApplied(true);
      setCouponError("");
    } else {
      setCouponApplied(false);
      setOfferPrice(null);
      setCouponError("Invalid coupon code");
    }
  };

  const router = useRouter();

  // Pricing logic
  const basePrice = 59999;
  let price = basePrice;
  if (selectedRam === '16GB') price += 4000;
  if (selectedRam === '32GB') price += 9000;
  if (selectedSSD === '1TB SSD') price += 5000;
  if (selectedSSD === '2TB SSD') price += 12000;
  if (selectedWarranty === '+6 Months') price += 1500;
  if (selectedWarranty === '+1 Year') price += 2500;
  let displayPrice = price;
  if (couponApplied && offerPrice) displayPrice = offerPrice;

  // Review form submit handler (dummy)
  const handleReviewSubmit = (e) => {
    e.preventDefault();
    // Here you would send the review to your backend
    setShowReviewForm(false);
    setReviewTitle("");
    setReviewText("");
    setReviewRating(0);
    setReviewFiles([]);
  };

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#133B5C] via-[#0FAFCA] to-[#007e9e] text-white pt-24 md:pt-32 pb-24">
      {/* Tab Navigation Bar */}
      <nav className="w-full flex flex-col md:flex-row justify-start items-center ml-0 md:ml-4 mb-4 mt-24 gap-2">
        {/* Mobile: Two separate rows with backgrounds */}
        <div className="flex flex-col w-full md:hidden gap-2">
          {/* Single row for all tabs on mobile */}
          <div className="flex flex-row gap-1 bg-white/20 rounded-md px-1 py-2 shadow-lg w-full">
            {[
              { href: 'techspecs', label: 'Technical Specifications' },
              { href: 'features', label: 'Features & Design' },
              { href: 'video', label: 'Product Video' },
              { href: 'compliance', label: 'Regulatory Product Compliance' },
              { href: 'reviews', label: 'Customer Review' },
            ].map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-white font-semibold text-xs flex-1 text-center py-2 px-1 hover:text-cyan-300 transition-colors"
                style={{ background: 'none', border: 'none' }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
        {/* Desktop: original layout */}
        <div className="hidden md:flex flex-row justify-between items-center max-w-6xl w-full bg-white/20 rounded-md px-1 py-1 shadow-lg gap-x-0 whitespace-nowrap">
          {[
            { href: 'techspecs', label: 'Technical Specifications' },
            { href: 'features', label: 'Features & Design' },
            { href: 'video', label: 'Product Video' },
            { href: 'compliance', label: 'Regulatory Product Compliance' },
            { href: 'reviews', label: 'Customer Review' },
          ].map((item, idx, arr) => (
            <React.Fragment key={item.href}>
              <button
                onClick={() => scrollToSection(item.href)}
                className="text-white font-semibold text-xs flex-1 text-center py-1 px-1 hover:text-cyan-300 transition-colors whitespace-nowrap"
                style={{ background: 'none', border: 'none' }}
              >
                {item.label}
              </button>
              {idx < arr.length - 1 && (
                <span className="inline-block w-px h-5 bg-white/70 mx-1 align-middle"></span>
              )}
            </React.Fragment>
          ))}
        </div>
      </nav>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 py-12 px-4">
        {/* Left: Carousel */}
        <div className="flex-1 flex flex-col items-end ml-auto">
          <div className="relative w-full mx-auto mt-24 flex items-center justify-center w-full">
            {/* Mobile Arrows at left/right, vertically centered */}
            <button
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-[#133B5C] text-white rounded-full p-2 shadow-md"
              onClick={() => changeImage(-1)}
              aria-label="Previous image"
            >
              &#8249;
            </button>
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-[#133B5C] text-white rounded-full p-2 shadow-md"
              onClick={() => changeImage(1)}
              aria-label="Next image"
            >
              &#8250;
            </button>
            <div className="flex items-center justify-center w-full" style={{ width: '100%', height: 'auto' }}>
              <Image
                src={E4Images[currentImage]}
                alt={`E4 Product Image ${currentImage + 1}`}
                width={1200}
                height={800}
                className="object-contain w-full h-auto"
                priority
                style={{width: '100%', height: 'auto'}}
              />
              <div className="absolute bottom-3 right-3 bg-[#007e9e]/80 text-xs px-3 py-1 rounded-full border border-white">
                {currentImage + 1} / {E4Images.length}
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 justify-center items-center pt-4 w-full">
            {E4Images.map((img, idx) => (
              <div
                key={img}
                className={`${idx === currentImage ? "opacity-100" : "opacity-70"} rounded bg-[#133B5C] cursor-pointer transition-all`}
                onClick={() => setImage(idx)}
                style={{ border: '1px solid transparent', boxShadow: '0 0 0 0.5px #fff' }}
              >
                <Image src={img} alt="E4 Thumbnail" width={60} height={40} className="object-cover w-12 h-9" loading="lazy" style={{width: 60, height: 'auto'}} />
              </div>
            ))}
          </div>
        </div>
        {/* Divider */}
        <div className="hidden md:block w-[2px] bg-white/20 mx-8 rounded"></div>
        {/* Right: Product Info */}
        <div className="flex-1 flex flex-col gap-6 bg-transparent p-0 items-start">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2">ENTION WORKBOOK SERIES E4</h1>
          {/* Badges: 2 per row on mobile, all in a row on desktop */}
          <div>
            <div className="hidden md:flex flex-nowrap justify-between items-center gap-x-3 w-full mb-2">
              <span className="bg-white/10 border border-[#0FAFCA]/40 backdrop-blur-md shadow-md px-3 py-1 rounded-xl text-white font-semibold text-sm flex-shrink-0 w-[200px] text-center whitespace-normal break-words">Made for techy and Professional</span>
              <span className="bg-white/10 border border-[#0FAFCA]/40 backdrop-blur-md shadow-md px-3 py-1 rounded-xl text-white font-semibold text-sm flex-shrink-0 w-[200px] text-center whitespace-normal break-words">Powerful yet Budget Friendly</span>
              <span className="bg-white/10 border border-[#0FAFCA]/40 backdrop-blur-md shadow-md px-3 py-1 rounded-xl text-white font-semibold text-sm flex-shrink-0 w-[200px] text-center whitespace-normal break-words">Dual RAM and SSD slots  &nbsp</span>
            </div>
            <div className="grid grid-cols-2 gap-2 w-full mb-2 md:hidden">
              <span className="bg-white/10 border border-[#0FAFCA]/40 backdrop-blur-md shadow-md px-3 py-1 rounded-xl text-white font-semibold text-sm text-center whitespace-normal break-words min-w-0 w-full">Made for techy and Professional</span>
              <span className="bg-white/10 border border-[#0FAFCA]/40 backdrop-blur-md shadow-md px-3 py-1 rounded-xl text-white font-semibold text-sm text-center whitespace-normal break-words min-w-0 w-full">Powerful yet Budget Friendly</span>
              <span className="bg-white/10 border border-[#0FAFCA]/40 backdrop-blur-md shadow-md px-3 py-1 rounded-xl text-white font-semibold text-sm text-center whitespace-normal break-words min-w-0 w-full">Dual RAM and SSD slots  &nbsp</span>
            </div>
          </div>
          {/* Customization */}
          <div className="mt-4">
            <h3 className="font-bold mb-2">Customize Your E4 Laptop</h3>
            <div className="flex flex-col gap-2 mb-3">
              <div className="flex flex-row items-center gap-6 flex-wrap">
                <div className="flex items-center gap-2">
                  <span className="font-semibold mr-1">RAM:</span>
                  {ramOptions.map(opt => (
                    <button
                      key={opt}
                      className={`px-4 py-2 rounded bg-[#133B5C] font-semibold ${selectedRam === opt ? "bg-[#007e9e] text-white" : "text-[#0FAFCA] hover:bg-[#0FAFCA]/20"}`}
                      onClick={() => setSelectedRam(opt)}
                      style={{ borderWidth: '0.5px', borderColor: '#fff', borderStyle: 'solid' }}
                    >{opt}</button>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold mr-1">SSD:</span>
                  {ssdOptions.map(opt => (
                    <button
                      key={opt}
                      className={`px-4 py-2 rounded bg-[#133B5C] font-semibold ${selectedSSD === opt ? "bg-[#007e9e] text-white" : "text-[#0FAFCA] hover:bg-[#0FAFCA]/20"}`}
                      onClick={() => setSelectedSSD(opt)}
                      style={{ borderWidth: '0.5px', borderColor: '#fff', borderStyle: 'solid' }}
                    >{opt}</button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Warranty */}
          <div className="mt-2">
            <h3 className="font-bold mb-2">Warranty Options</h3>
            <div className="flex gap-2 flex-wrap">
              {warrantyOptions.map(opt => (
                <button
                  key={opt}
                  className={`px-4 py-2 rounded bg-[#133B5C] font-semibold ${selectedWarranty === opt ? "bg-[#007e9e] text-white" : "text-[#0FAFCA] hover:bg-[#0FAFCA]/20"}`}
                  onClick={() => setSelectedWarranty(opt)}
                  style={{ borderWidth: '0.5px', borderColor: '#fff', borderStyle: 'solid' }}
                >{opt}</button>
              ))}
            </div>
          </div>
          {/* Price & CTA */}
          <div className="mt-8 flex flex-col items-start gap-3 w-full">
            <div className="text-3xl font-extrabold text-cyan-200 drop-shadow-lg">Coming Soon</div>
            <div className="text-sm text-white font-bold mt-2 bg-white/10 px-3 py-1 rounded shadow drop-shadow-lg" style={{textShadow: '0 2px 8px #0008'}}>No cost EMI available. See options at checkout.</div>
            <div className="flex gap-3">
              <button
                className="bg-gray-500 cursor-not-allowed text-white font-bold px-8 py-2 rounded-2xl text-lg shadow-lg transition"
                disabled
              >
                Buy Now
              </button>
              <button
                onClick={() => setShowPreBookOverlay(true)}
                className="bg-[#007e9e] hover:bg-[#01E9FE] hover:text-[#000f29] text-white font-bold px-8 py-2 rounded-2xl text-lg shadow-lg transition"
              >
                Pre Book
              </button>
            </div>
            {/* Coupon Section */}
            <div className="mt-4 w-full max-w-xs">
              <label className="block text-white font-semibold mb-1">Have a coupon?</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={coupon}
                  onChange={e => setCoupon(e.target.value)}
                  className="px-3 py-2 rounded bg-white/80 text-black w-full focus:outline-none"
                  placeholder="Enter coupon code"
                />
                <button
                  type="button"
                  onClick={handleApplyCoupon}
                  className="bg-[#0FAFCA] hover:bg-[#007e9e] text-white font-bold px-4 py-2 rounded"
                >Apply</button>
              </div>
              {couponError && <div className="text-red-400 text-sm mt-1">{couponError}</div>}
              {couponApplied && offerPrice && (
                <div className="text-green-400 text-sm mt-1">Coupon applied! You saved ₹{(originalPrice - offerPrice).toLocaleString()}.</div>
              )}
            </div>
          </div>
          {/* Included */}
          <div className="mt-6 bg-[#007e9e]/80 border border-[#0FAFCA] px-6 py-4 rounded-xl text-base font-semibold">
            Included: Windows 11 Pro, Office 365, Laptop Bag Pack
          </div>
        </div>
      </div>
      {/* Tech Specs */}
      <section id="techspecs" className="max-w-6xl mx-auto mt-12 px-4">
        <h2 className="text-2xl font-bold mb-6">Technical Specifications</h2>
        {/* Mobile: 2-column grid */}
        <div className="block md:hidden rounded-2xl bg-white/10 backdrop-blur-sm border border-white p-4 shadow-xl">
          <div className="grid grid-cols-2 gap-0 border border-white/30 rounded overflow-hidden">
            {/* Each pair: label/value */}
            <div className="font-bold text-white bg-[#0FAFCA]/10 p-2 border-b border-r border-white/30">Colour</div>
            <div className="text-white bg-[#0FAFCA]/5 p-2 border-b border-white/30">sliver</div>
            <div className="font-bold text-white bg-[#0FAFCA]/10 p-2 border-b border-r border-white/30">Power</div>
            <div className="text-white bg-[#0FAFCA]/5 p-2 border-b border-white/30">DC 12V</div>
            <div className="font-bold text-white bg-[#0FAFCA]/10 p-2 border-b border-r border-white/30">Display</div>
            <div className="text-white bg-[#0FAFCA]/5 p-2 border-b border-white/30">15.6inch, Full HD 1920*1080 IPS 16:9 ratio</div>
            <div className="font-bold text-white bg-[#0FAFCA]/10 p-2 border-b border-r border-white/30">Battery</div>
            <div className="text-white bg-[#0FAFCA]/5 p-2 border-b border-white/30">5000mah</div>
            <div className="font-bold text-white bg-[#0FAFCA]/10 p-2 border-b border-r border-white/30">Processor</div>
            <div className="text-white bg-[#0FAFCA]/5 p-2 border-b border-white/30">intel N95 up to 3.4GHz with Turbo boost</div>
            <div className="font-bold text-white bg-[#0FAFCA]/10 p-2 border-b border-r border-white/30">RJ45</div>
            <div className="text-white bg-[#0FAFCA]/5 p-2 border-b border-white/30">yes</div>
            <div className="font-bold text-white bg-[#0FAFCA]/10 p-2 border-b border-r border-white/30">Core, threads, Cache</div>
            <div className="text-white bg-[#0FAFCA]/5 p-2 border-b border-white/30">4core, 4 threads, 6MB cache</div>
            <div className="font-bold text-white bg-[#0FAFCA]/10 p-2 border-b border-r border-white/30">Memory card reader</div>
            <div className="text-white bg-[#0FAFCA]/5 p-2 border-b border-white/30">yes, SD card upto 128Gb</div>
            <div className="font-bold text-white bg-[#0FAFCA]/10 p-2 border-b border-r border-white/30">Graphic</div>
            <div className="text-white bg-[#0FAFCA]/5 p-2 border-b border-white/30">intel UHD graphics 1.20Ghz</div>
            <div className="font-bold text-white bg-[#0FAFCA]/10 p-2 border-b border-r border-white/30">Earphone port</div>
            <div className="text-white bg-[#0FAFCA]/5 p-2 border-b border-white/30">3.5mm standard headphone jack</div>
            <div className="font-bold text-white bg-[#0FAFCA]/10 p-2 border-b border-r border-white/30">Fingerprint reader</div>
            <div className="text-white bg-[#0FAFCA]/5 p-2 border-b border-white/30">yes, on touch pad</div>
            <div className="font-bold text-white bg-[#0FAFCA]/10 p-2 border-b border-r border-white/30">Mic</div>
            <div className="text-white bg-[#0FAFCA]/5 p-2 border-b border-white/30">Built in Analog microphone</div>
            <div className="font-bold text-white bg-[#0FAFCA]/10 p-2 border-b border-r border-white/30">Operating system</div>
            <div className="text-white bg-[#0FAFCA]/5 p-2 border-b border-white/30">window 11</div>
            <div className="font-bold text-white bg-[#0FAFCA]/10 p-2 border-b border-r border-white/30">Speaker</div>
            <div className="text-white bg-[#0FAFCA]/5 p-2 border-b border-white/30">front facing Built in stereo speaker 1.0W*2</div>
            <div className="font-bold text-white bg-[#0FAFCA]/10 p-2 border-b border-r border-white/30">MS office</div>
            <div className="text-white bg-[#0FAFCA]/5 p-2 border-b border-white/30">yes, 365</div>
            <div className="font-bold text-white bg-[#0FAFCA]/10 p-2 border-b border-r border-white/30">Webcam</div>
            <div className="text-white bg-[#0FAFCA]/5 p-2 border-b border-white/30">2.0Mega+DMIC, with Privcay sutter</div>
            <div className="font-bold text-white bg-[#0FAFCA]/10 p-2 border-b border-r border-white/30">USB</div>
            <div className="text-white bg-[#0FAFCA]/5 p-2 border-b border-white/30">3 port of USB 3.0, type C(Data+DP)</div>
            <div className="font-bold text-white bg-[#0FAFCA]/10 p-2 border-b border-r border-white/30">Touchpad</div>
            <div className="text-white bg-[#0FAFCA]/5 p-2 border-b border-white/30">Yes, extra large</div>
            <div className="font-bold text-white bg-[#0FAFCA]/10 p-2 border-b border-r border-white/30">HDMI</div>
            <div className="text-white bg-[#0FAFCA]/5 p-2 border-b border-white/30">HDMI A type</div>
            <div className="font-bold text-white bg-[#0FAFCA]/10 p-2 border-b border-r border-white/30">Keyboard</div>
            <div className="text-white bg-[#0FAFCA]/5 p-2 border-b border-white/30">US, Round with Backlight & Square with Backlight</div>
            <div className="font-bold text-white bg-[#0FAFCA]/10 p-2 border-b border-r border-white/30">Product Dimension and weight</div>
            <div className="text-white bg-[#0FAFCA]/5 p-2 border-b border-white/30">357.4*228*19 mm, 1.68kg</div>
            <div className="font-bold text-white bg-[#0FAFCA]/10 p-2 border-b border-r border-white/30">Included in Box</div>
            <div className="text-white bg-[#0FAFCA]/5 p-2 border-b border-white/30">Laptop, Power Cord, Adapter, User Manual</div>
            <div className="font-bold text-white bg-[#0FAFCA]/10 p-2 border-b border-r border-white/30">Covered in warranty</div>
            <div className="text-white bg-[#0FAFCA]/5 p-2 border-b border-white/30">Manufacturing Defects, Physical Damage not covered.</div>
            <div className="font-bold text-white bg-[#0FAFCA]/10 p-2 border-b border-r border-white/30">Manufactured by</div>
            <div className="text-white bg-[#0FAFCA]/5 p-2 border-b border-white/30">Ention, Made in India.</div>
          </div>
        </div>
        {/* Desktop: Table */}
        <div className="hidden md:block rounded-2xl bg-white/10 backdrop-blur-sm border border-white p-6 overflow-x-auto shadow-xl">
          <table className="w-full text-white text-base border-separate border-spacing-0">
            <colgroup>
              <col />
              <col />
              <col className="vertical-divider" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <td className="font-bold border border-white/30 px-4 py-2">Colour</td>
                <td className="border border-white/30 px-4 py-2">sliver</td>
                <td className="font-bold border border-white/30 vertical-divider px-4 py-2">Power</td>
                <td className="border border-white/30 px-4 py-2">DC 12V</td>
              </tr>
              <tr>
                <td className="font-bold border border-white/30 px-4 py-2">Display</td>
                <td className="border border-white/30 px-4 py-2">15.6inch, Full HD 1920*1080 IPS 16:9 ratio</td>
                <td className="font-bold border border-white/30 vertical-divider px-4 py-2">Battery</td>
                <td className="border border-white/30 px-4 py-2">5000mah</td>
              </tr>
              <tr>
                <td className="font-bold border border-white/30 px-4 py-2">Processor</td>
                <td className="border border-white/30 px-4 py-2">intel N95 up to 3.4GHz with Turbo boost</td>
                <td className="font-bold border border-white/30 vertical-divider px-4 py-2">RJ45</td>
                <td className="border border-white/30 px-4 py-2">yes</td>
              </tr>
              <tr>
                <td className="font-bold border border-white/30 px-4 py-2">Core, threads, Cache</td>
                <td className="border border-white/30 px-4 py-2">4core, 4 threads, 6MB cache</td>
                <td className="font-bold border border-white/30 vertical-divider px-4 py-2">Memory card reader</td>
                <td className="border border-white/30 px-4 py-2">yes, SD card upto 128Gb</td>
              </tr>
              <tr>
                <td className="font-bold border border-white/30 px-4 py-2">Graphic</td>
                <td className="border border-white/30 px-4 py-2">intel UHD graphics 1.20Ghz</td>
                <td className="font-bold border border-white/30 vertical-divider px-4 py-2">Earphone port</td>
                <td className="border border-white/30 px-4 py-2">3.5mm standard headphone jack</td>
              </tr>
              <tr>
                <td className="font-bold border border-white/30 px-4 py-2">Fingerprint reader</td>
                <td className="border border-white/30 px-4 py-2">yes, on touch pad</td>
                <td className="font-bold border border-white/30 vertical-divider px-4 py-2">Mic</td>
                <td className="border border-white/30 px-4 py-2">Built in Analog microphone</td>
              </tr>
              <tr>
                <td className="font-bold border border-white/30 px-4 py-2">Operating system</td>
                <td className="border border-white/30 px-4 py-2">window 11</td>
                <td className="font-bold border border-white/30 vertical-divider px-4 py-2">Speaker</td>
                <td className="border border-white/30 px-4 py-2">front facing Built in stereo speaker 1.0W*2</td>
              </tr>
              <tr>
                <td className="font-bold border border-white/30 px-4 py-2">MS office</td>
                <td className="border border-white/30 px-4 py-2">yes, 365</td>
                <td className="font-bold border border-white/30 vertical-divider px-4 py-2">Webcam</td>
                <td className="border border-white/30 px-4 py-2">2.0Mega+DMIC, with Privcay sutter</td>
              </tr>
              <tr>
                <td className="font-bold border border-white/30 px-4 py-2">USB</td>
                <td className="border border-white/30 px-4 py-2">3 port of USB 3.0, type C(Data+DP)</td>
                <td className="font-bold border border-white/30 vertical-divider px-4 py-2">Touchpad</td>
                <td className="border border-white/30 px-4 py-2">Yes, extra large</td>
              </tr>
              <tr>
                <td className="font-bold border border-white/30 px-4 py-2">HDMI</td>
                <td className="border border-white/30 px-4 py-2">HDMI A type</td>
                <td className="font-bold border border-white/30 vertical-divider px-4 py-2">Keyboard</td>
                <td className="border border-white/30 px-4 py-2">US, Round with Backlight & Square with Backlight</td>
              </tr>
              <tr>
                <td className="font-bold border border-white/30 px-4 py-2">Product Dimension and weight</td>
                <td className="border border-white/30 px-4 py-2">357.4*228*19 mm, 1.68kg</td>
                <td className="font-bold border border-white/30 vertical-divider px-4 py-2">Included in Box</td>
                <td className="border border-white/30 px-4 py-2">Laptop, Power Cord, Adapter, User Manual</td>
              </tr>
              <tr>
                <td className="font-bold border border-white/30 px-4 py-2">Covered in warranty</td>
                <td className="border border-white/30 px-4 py-2">Manufacturing Defects, Physical Damage not covered.</td>
                <td className="font-bold border border-white/30 vertical-divider px-4 py-2">Manufactured by</td>
                <td className="border border-white/30 px-4 py-2">Ention, Made in India.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <style jsx>{`
          .vertical-divider {
            border-left: 2px solid rgba(255,255,255,0.6) !important;
            position: relative;
            z-index: 2;
            background-clip: padding-box;
          }
        `}</style>
      </section>
      {/* Video Section: Product Video */}
      <section id="video" className="max-w-7xl mx-auto mt-24 mb-24 px-4">
        <div className="flex justify-center items-center w-full">
          <div className="w-full max-w-lg md:max-w-7xl aspect-video rounded-xl overflow-hidden bg-black">
            <video
              src="/assets/product_/e4/Building (2).mp4 (1).mp4"
              controls
              className="w-full h-full object-cover rounded-xl shadow-lg bg-black"
              preload="auto"
              playsInline
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
      {/* Features & Design */}
      <section id="features" className="max-w-6xl mx-auto mt-12 px-4 hidden md:block">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-3 mt-20 text-white">Features & Design</h2>
        <div className="w-80 h-1 bg-white rounded-full mb-8"></div>
        <div className="flex flex-col gap-8">
          {/* Row 1: Image Left, Text and Image Right Row */}
          <div className="flex flex-col md:flex-row bg-[#18408b] rounded-xl overflow-hidden items-center" style={{ height: '390px' }}>
            <div
              className="flex-shrink-0"
              style={{ flexBasis: '60%', width: '60%', height: '100%' }}
            >
              <Image
                src="/assets/product_/e5/feature_images/copy uncut (4).png"
                alt="Laptop Open"
                width={400}
                height={320}
                className="object-cover w-full h-full"
                style={{height: '100%', width: '100%', objectFit: 'cover'}}
              />
            </div>
            <div className="flex flex-col justify-center p-8 relative" style={{ height: '100%', width: '40%' }}>
              <div className="text-white text-lg md:text-xl font-normal">Power Your Day with Your Ultimate Working Companion Ention Workbook Series E4.</div>
            </div>
          </div>
         
          {/* Row 2: Image Left, Text and Image Right Row */}
          <div className="flex flex-col md:flex-row bg-[#18408b] rounded-xl overflow-hidden items-center" style={{ height: '320px' }}>
            <div className="flex flex-col justify-center p-8" style={{ height: '100%', width: '40%' }}>
              <div className="text-white text-lg md:text-xl font-normal text-left leading-relaxed">
                Unleash seamless performance with the Intel® 13th Gen Core™ i7-13620H processors delivering speeds of up to 4.90 GHz, powered by 10 Cores, 16 Threads, and a generous 24MB Intel Smart Cache.<br />
                Whether you're coding, designing, multitasking, or analysing complex data.
              </div>
            </div>
            <div
              className="flex-shrink-0"
              style={{ flexBasis: '60%', width: '60%', height: '100%' }}
            >
              <Image
                src="/assets/product_/e5/feature_images/copy uncut (4).png"
                alt="Laptop Open"
                width={400}
                height={320}
                className="object-cover w-full h-full"
                style={{height: '100%', width: '100%', objectFit: 'cover'}}
              />
            </div>
          </div>

          {/* Row 3: Backlit Keyboard and Numeric Keypad */}
          <div className="w-full bg-[#18408b] rounded-xl p-8">
            <div className="flex flex-col md:flex-row items-stretch justify-between gap-8">
              {/* Left: Backlit Keyboard */}
              <div className="flex-1 flex flex-col items-center justify-center text-center md:text-left">
                <div className="text-2xl font-semibold mb-4 text-white">Backlit Keyboard:</div>
                <div className="text-lg text-white">Work efficiently in any lighting condition with a soft white backlight that ensures visibility during late–night sessions or dim environments.</div>
              </div>
              {/* Divider */}
              <div className="hidden md:block w-px bg-white mx-8"></div>
              {/* Right: Numeric Keypad */}
              <div className="flex-1 flex flex-col items-center justify-center text-center md:text-left">
                <div className="text-2xl font-semibold mb-4 text-white">Dedicated Numeric Keypad:</div>
                <div className="text-lg text-white">Whether you're entering data, working on spreadsheets, or using design software, the separate number pad enhances speed and accuracy — making it ideal for professionals in finance, engineering, or analytics.</div>
              </div>
            </div>
          </div>

          {/* Row 4: Single Image Only, no card */}
          <div className="w-full flex items-center justify-center py-8 mt-[-130px]" style={{height: '900px'}}>
            <img
              src="/assets/product_/e4/feature_image/Copy of copy uncut (11).png"
              alt="Spacious Storage Feature"
              className="object-cover w-full h-full"
              style={{height: '100%', width: '100%', objectFit: 'contain'}}
              loading="lazy"
            />
          </div>

          {/* Row 5: Single Image Only */}
          <div className="w-full flex items-center justify-center py-8 mt-[-256px]" style={{height: '900px', width: '100%'}}>
            <img
              src="/assets/product_/e4/feature_image/Copy of copy uncut (16).png"
              alt="Feature"
              className="object-contain w-full h-full"
              style={{height: '100%', width: '100%', objectFit: 'contain'}}
              loading="lazy"
            />
          </div>

          {/* Row 6: insipired by innovation */}
          <div className="w-full bg-[#18408b] rounded-xl p-8 text-center mt-[-130px]">
            <div className="text-2xl md:text-3xl font-bold text-white mb-2"> Inspired by Innovation, Assembled with Integrity </div>
            <div className="text-3XL md:text-lg text-white font-bold mt-4">Proudly Made in India.</div>
          </div>

          {/* Row 7: Privacy Shutter Only Row */}
          <div className="w-full bg-[#18408b] rounded-xl flex items-center justify-center p-12" style={{minHeight: '300px'}}>
            <div className="text-white text-3xl md:text-4xl font-extrabold text-center w-full">Privacy Shutter on Webcam adds peace of mind during off–camera moments</div>
          </div>
          {/* Row 8: Product Compliance Certification Row */}
          <div className="w-full bg-[#007e9e]/80 border border-[#0FAFCA] px-6 py-8 rounded-xl text-center flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4">Product compliance certification</h2>
            <div className="text-lg">
              Ention ensures all its products comply with Indian regulatory standards. Devices are certified under BIS CRS for electrical safety and WPC–ETA for wireless communication compliance. Ention also follows global benchmarks for product safety, electromagnetic compatibility, ergonomics, and environmental responsibility. Every product is developed through certified processes to guarantee quality, legal distribution, and user safety.
            </div>
          </div>
        </div>
      </section>
      {/* Mobile Features & Design */}
      <section id="features" className="max-w-6xl mx-auto mt-12 px-2 block md:hidden">
        <h2 className="text-2xl font-extrabold mb-3 mt-10 text-white w-fit mx-auto">Features & Design</h2>
        <div className="h-1 bg-white rounded-full mb-6 mx-auto" style={{width:'100%',maxWidth:'100%',marginTop:'-8px'}}></div>
        <div className="flex flex-col gap-6">
          {/* Row 1: Image Left, Text and Image Right Row */}
          <div className="bg-[#18408b] rounded-xl flex flex-col items-center p-0">
            <img src="/assets/product_/e5/feature_images/copy uncut (4).png" alt="Laptop Open" className="w-full h-56 object-cover rounded-t-xl" loading="lazy" />
            <div className="w-full p-4 text-white text-base text-center">Power Your Day with Your Ultimate Working Companion Ention Workbook Series E4.</div>
          </div>
          {/* Row 2: Image Left, Text and Image Right Row */}
          <div className="bg-[#18408b] rounded-xl flex flex-col items-center p-0">
            <div className="w-full p-4 text-white text-base text-center">
              Unleash seamless performance with the Intel® 13th Gen Core™ i7-13620H processors delivering speeds of up to 4.90 GHz, powered by 10 Cores, 16 Threads, and a generous 24MB Intel Smart Cache.<br />Whether you're coding, designing, multitasking, or analysing complex data.
            </div>
            <img src="/assets/product_/e5/feature_images/copy uncut (4).png" alt="Laptop Open" className="w-full h-56 object-cover rounded-b-xl" loading="lazy" />
          </div>
          {/* Row 3: Backlit Keyboard and Numeric Keypad */}
          <div className="bg-[#18408b] rounded-xl flex flex-col items-center p-4 text-white text-center gap-4">
            <div>
              <div className="text-xl font-semibold mb-2">Backlit Keyboard:</div>
              <div className="text-base mb-4">Work efficiently in any lighting condition with a soft white backlight that ensures visibility during late–night sessions or dim environments.</div>
            </div>
            <div>
              <div className="text-xl font-semibold mb-2">Dedicated Numeric Keypad:</div>
              <div className="text-base">Whether you're entering data, working on spreadsheets, or using design software, the separate number pad enhances speed and accuracy — making it ideal for professionals in finance, engineering, or analytics.</div>
            </div>
          </div>
          {/* Row 4: Single Image Card */}
          <div className="bg-[#18408b] flex items-center justify-center rounded-xl" style={{height:'320px'}}>
            <img src="/assets/product_/e4/feature_image/Copy of copy uncut (11).png" alt="Spacious Storage Feature" className="object-cover w-full h-full rounded-xl" loading="lazy" />
          </div>
          {/* Row 5: Single Image Only */}
          <div className="flex items-center justify-center" style={{height:'320px', width:'100%'}}>
            <img src="/assets/product_/e4/feature_image/Copy of copy uncut (16).png" alt="Feature" className="object-contain w-full h-full" loading="lazy" />
          </div>
          {/* Row 6: Ports and Audio Row (the one you want to replace) */}
          <div className="bg-[#18408b] rounded-xl p-4 text-center">
            <div className="text-xl font-bold text-white mb-2">Inspired by Innovation, Assembled with Integrity</div>
            <div className="text-base text-white font-bold mt-2">Proudly Made in India.</div>
          </div>
          {/* Row 7: Privacy Shutter Only Row */}
          <div className="bg-[#18408b] rounded-xl flex items-center justify-center p-6" style={{minHeight:'180px'}}>
            <div className="text-white text-xl font-extrabold text-center w-full">Privacy Shutter on Webcam adds peace of mind during off–camera moments</div>
          </div>
          {/* Row 8: Product Compliance Certification Row */}
          <div id="compliance" className="w-full bg-[#007e9e]/80 border border-[#0FAFCA] px-4 py-6 rounded-xl text-center flex flex-col items-center">
            <h2 className="text-xl font-bold mb-2">Product compliance certification</h2>
            <div className="text-base">
              Ention ensures all its products comply with Indian regulatory standards. Devices are certified under BIS CRS for electrical safety and WPC–ETA for wireless communication compliance. Ention also follows global benchmarks for product safety, electromagnetic compatibility, ergonomics, and environmental responsibility. Every product is developed through certified processes to guarantee quality, legal distribution, and user safety.
            </div>
          </div>
        </div>
      </section>
      {/* Review Section */}
      <section id="reviews" className="w-full bg-white border-t border-gray-100 mt-16 mb-0 p-0 m-0">
        <div className="w-full px-4 sm:px-8 lg:px-16 py-0 pb-0 mb-0 mx-0">
          <h2 className="text-3xl font-bold text-center text-[#111418] mb-2">What Our Customers Say</h2>
          <p className="text-center text-[#637488] mb-8">Real stories from real people.</p>
          {/* Filter Bar */}
          <div className="mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 border border-gray-300 rounded-lg p-4 bg-white/80">
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-2">
                <label className="text-sm font-medium text-[#888888]" htmlFor="rating-filter">Filter by Rating:</label>
                <select
                  className="block w-full sm:w-auto pl-3 pr-10 py-2 text-base border border-gray-300 text-[#888888] focus:outline-none focus:ring-[#0c77f2] focus:border-[#0c77f2] sm:text-sm rounded-md"
                  id="rating-filter"
                  name="rating-filter"
                  value={selectedRating}
                  onChange={e => setSelectedRating(e.target.value)}
                >
                  <option value="">All Ratings</option>
                  {ratingOptions.map(opt => (
                    <option key={opt} value={opt}>{opt} Stars</option>
                  ))}
                </select>
              </div>
              <div className="flex items-center gap-2">
                <label className="text-sm font-medium text-[#888888]" htmlFor="topic-filter">Filter by Topic:</label>
                <select
                  className="block w-full sm:w-auto pl-3 pr-10 py-2 text-base border border-gray-300 text-[#888888] focus:outline-none focus:ring-[#0c77f2] focus:border-[#0c77f2] sm:text-sm rounded-md"
                  id="topic-filter"
                  name="topic-filter"
                  value={selectedTopic}
                  onChange={e => setSelectedTopic(e.target.value)}
                >
                  <option value="">All Topics</option>
                  {topicOptions.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
            </div>
            <button onClick={() => setShowReviewForm(true)} className="bg-[#0c77f2] text-white font-semibold py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors">Write a Review</button>
          </div>
          {/* Review Form (show only if showReviewForm is true) */}
          {showReviewForm && (
            <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
              <h3 className="text-xl font-semibold text-[#111418] mb-4">Share Your Experience</h3>
              <form className="space-y-4" onSubmit={handleSubmitReview}>
                <div>
                  <label className="block text-sm font-medium text-[#637488]" htmlFor="review-title">Review Title</label>
                  <input className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#0c77f2] focus:border-[#0c77f2] sm:text-sm" id="review-title" name="review-title" placeholder="e.g., Best Laptop I've Ever Owned!" type="text" value={reviewTitle} onChange={e => setReviewTitle(e.target.value)} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#637488]" htmlFor="review-text">Your Review</label>
                  <textarea className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#0c77f2] focus:border-[#0c77f2] sm:text-sm" id="review-text" name="review-text" placeholder="Tell us more about your experience..." rows="4" value={reviewText} onChange={e => setReviewText(e.target.value)}></textarea>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#637488]">Your Rating</label>
                  <div className="flex items-center gap-1 mt-1">
                    {[1,2,3,4,5].map(star => (
                      <button key={star} type="button" className={`text-2xl transition-colors ${reviewRating >= star ? 'text-yellow-400' : 'text-gray-300'}`} onClick={() => setReviewRating(star)}>{'★'}</button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#637488]" htmlFor="topic">Topic (optional)</label>
                  <input className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#0c77f2] focus:border-[#0c77f2] sm:text-sm" id="topic" name="topic" placeholder="e.g., Battery Life, Performance" type="text" value={reviewTopic} onChange={e => setReviewTopic(e.target.value)} />
                </div>
                <div className="flex justify-end items-center gap-3 pt-2">
                  <button type="button" onClick={() => setShowReviewForm(false)} className="bg-gray-200 text-gray-700 font-semibold py-2 px-6 rounded-md hover:bg-gray-300 transition-colors">Cancel</button>
                  <button className="bg-[#0c77f2] text-white font-semibold py-2 px-6 rounded-md hover:bg-opacity-90 transition-colors" type="submit" disabled={submitting}>{submitting ? 'Submitting...' : 'Submit Review'}</button>
                </div>
                {submitError && <div className="text-red-500 text-sm mt-2">{submitError}</div>}
              </form>
            </div>
          )}
          {/* Review List or Empty State */}
          {loadingReviews ? (
            <div className="text-center text-gray-500 py-8">Loading reviews...</div>
          ) : filteredReviews.length === 0 ? (
            <div className="text-center text-gray-500 py-8">Be the first to review!</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredReviews.map((review, idx) => (
                <div key={review._id || idx} className="bg-white rounded-xl shadow-lg p-6 flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold text-[#007e9e]">{review.user?.[0] || 'U'}</div>
                    <div>
                      <p className="font-semibold text-base text-[#111418]">{review.user || 'Anonymous'}</p>
                      <p className="text-xs text-[#637488]">{new Date(review.createdAt).toLocaleDateString()}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {[1,2,3,4,5].map(star => (
                      <span key={star} className={`text-xl ${review.rating >= star ? 'text-yellow-400' : 'text-gray-300'}`}>★</span>
                    ))}
                  </div>
                  <p className="text-[#637488] text-sm font-semibold">{review.topic}</p>
                  <p className="text-[#637488] text-sm">{review.text}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Pre Book Overlay */}
      {showPreBookOverlay && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-bold text-gray-800">Pre Book Your E4 Laptop</h2>
              <button
                onClick={() => setShowPreBookOverlay(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
              >
                ×
              </button>
            </div>
            <div className="p-4">
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSffWPbu_nNMDX7KJbRRXD1yBcHmBn29scv-r5LS11p1wTXY2A/viewform?embedded=true" 
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
        </div>
      )}
    </div>
  );
} 