import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from '../../../lib/utils';
import TestCarousel from '../../../components/TestCarousel';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Same images as TestCarousel but simplified for mobile
const carouselImages = [
  "/assets/all_product_page/all product carousal 6.webp",
  "/assets/all_product_page/all product carousal photo1.webp",
  "/assets/all_product_page/all product carousal photo2.webp",
  "/assets/all_product_page/all product carousal photo3.webp",
  "/assets/all_product_page/all product carousal photo4.webp",
  "/assets/all_product_page/all product carousal photo5.webp",
  "/assets/all_product_page/all product carousal photo6.webp",
  "/assets/all_product_page/Copy of copy uncut (22).webp",
];

const workbookSeries = [
  {
    key: 'E5',
    name: 'Workbook series E5',
    features: [
      'Made for Everyday Hustlers,',
      'Powerful yet Budget Friendly,',
      'Control at your fingertips,',
      'Intel N95 processor upto 3.4Ghz (6Mb cache, 4 core, 4thread)',
      'Window 11',
      'Display 15.6inch, full HD IPS',
    ],
    bag: 'Laptop bag worth 1500',
    price: '₹' + (Math.floor(Math.random() * 10000) + 40000),
    image: '/assets/all_product_page/e5.webp',
  },
  {
    key: 'E4',
    name: 'Workbook series E4',
    features: [
      'Made for techy and Professional',
      'Powerful yet Budget Friendly,',
      'Dual RAM and Dual SSD slots give you the freedom to expand',
      'Intel i7 13th gen processor13620H 24M Cache, up to 4.90 GHz',
      'Window 11',
      'Display 15.6inch, full HD IPS',
    ],
    bag: 'Laptop bag worth 1500',
    price: '₹' + (Math.floor(Math.random() * 10000) + 50000),
    image: '/assets/all_product_page/e4.webp',
  },
];

function WorkbookCard({ series }) {
  const idMap = { E5: 5, E4: 4, E3: 3 };
  const productId = idMap[series.key];
  
  return (
    <div className="bg-[#b9d2df] shadow-2xl flex flex-col md:flex-row overflow-hidden border-0 h-[380px] my-6">
      {/* Left: Details */}
      <div className="flex-1 flex flex-col justify-between p-4 relative z">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-[#0d223a]">{series.name}</h2>
          <ul className="list-disc pl-6 mb-4 text-base text-[#222] space-y-1">
            {series.features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
          <div className="text-sm text-[#007e9e] mb-2">{series.bag}</div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between border-t pt-2 mt-2">
          <div className="text-lg font-semibold text-[#0d223a]">
            <span className="text-3xl font-extrabold text-[#007e9e] block mt-2 mb-1">Coming Soon</span>
          </div>
          <div className="mt-4 md:mt-0 flex gap-8 justify-center mr-[70px]">
            <Link href={`/ecommerce/product/e${productId}`} legacyBehavior>
              <a className="text-[#007e9e] underline font-medium hover:text-[#01E9FE] transition">Learn More</a>
            </Link>
          </div>
        </div>
      </div>
      {/* Right: Image */}
      <div className="md:w-1/2 w-full h-full flex items-center justify-center">
        <Image
          src={series.image}
          alt={series.name}
          width={400}
          height={380}
          className="w-full h-[980%] object-contain shadow-lg"
          style={{ background: 'transparent', objectFit: 'contain' }}
        />
      </div>
    </div>
  );
}

function WorkbookCardMobile({ series }) {
  const idMap = { E5: 5, E4: 4, E3: 3 };
  const productId = idMap[series.key];
  return (
    <div className="bg-[#b9d2df] shadow flex flex-col p-2 my-6 w-full max-w-xs mx-auto">
      {/* Image at the very top, full width, no rounded corners, larger height */}
      <div className="w-full">
        <Image
          src={series.image}
          alt={series.name}
          width={600}
          height={360}
          className="object-contain w-full h-80"
          style={{ background: 'transparent', objectFit: 'contain' }}
        />
      </div>
      {/* All text content below the image */}
      <h2 className="text-lg font-bold text-[#0d223a] mb-1 mt-4">{series.name}</h2>
      <ul className="list-disc pl-4 text-sm text-[#222] mb-1">
        {series.features.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>
      <div className="text-xs text-[#007e9e] mb-1">{series.bag}</div>
      <div className="flex flex-col gap-1 border-t pt-1 mt-1 text-xs">
        <div className="w-full text-center">
          <span className="text-2xl font-extrabold text-[#007e9e] block mt-2 mb-1">Coming Soon</span>
        </div>
        <div className="flex gap-2 mt-1">
          <div className="flex w-4/5 mx-auto justify-center">
            <Link href={`/ecommerce/product/e${productId}`} legacyBehavior>
              <a className="text-[#007e9e] underline font-medium hover:text-[#01E9FE] transition">Learn More</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProductLandingPage() {
  const [activeTab, setActiveTab] = useState("workbook");
  const mobileSwiperRef = useRef(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#070D2A] via-[#133B5C] to-[#0FAFCA] overflow-x-hidden">
      {/* Hero Section */}
      <div className="w-full flex justify-center items-center pb-4 py-[150px]">
        {/* Desktop: Complex carousel */}
        <div className="hidden md:block w-full">
          <TestCarousel />
        </div>
        {/* Mobile: Simplified carousel with same images */}
        <div className="block md:hidden w-full max-w-6xl px-4 relative">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            slidesPerView={1}
            spaceBetween={0}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={true}
            className="w-full"
          >
            {carouselImages.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="w-full aspect-video overflow-hidden shadow-lg">
                  <Image
                    src={image}
                    alt={`Product image ${index + 1}`}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                    style={{ background: 'transparent' }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Custom CSS for white navigation buttons */}
          <style jsx>{`
            .swiper-button-next,
            .swiper-button-prev {
              color: white !important;
              background: rgba(255, 255, 255, 0.2) !important;
              backdrop-filter: blur(4px) !important;
              border: 1px solid rgba(255, 255, 255, 0.3) !important;
              border-radius: 50% !important;
              width: 40px !important;
              height: 40px !important;
              margin-top: -20px !important;
            }
            .swiper-button-next:after,
            .swiper-button-prev:after {
              font-size: 16px !important;
            }
          `}</style>
        </div>
      </div>

      {/* Product Cards Section */}
      <section className="max-w-7xl mx-auto py-12 px-2 sm:px-4">
        {activeTab === "workbook" && (
          <>
            {/* Desktop: Row layout */}
            <div className="hidden md:flex flex-col gap-8">
              {workbookSeries.map((series) => (
                <WorkbookCard key={series.key} series={series} />
              ))}
            </div>
            {/* Mobile: Original layout */}
            <div className="block md:hidden">
              {workbookSeries.map((series) => (
                <WorkbookCardMobile key={series.key} series={series} />
              ))}
            </div>
          </>
        )}
        {activeTab === "swapbook" && (
          <div className="flex flex-col items-center justify-center min-h-[200px]">
            <h2 className="text-2xl font-bold text-[#000] mb-6 text-center">Swapbook Series</h2>
            <span className="text-2xl font-bold text-[#01E9FE]">Coming Soon.</span>
          </div>
        )}
      </section>
    </div>
  );
}
