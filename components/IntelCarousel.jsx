import React, { useCallback, useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

export default function IntelCarousel() {
  const [selectedSlide, setSelectedSlide] = useState(0);
  const [parallax, setParallax] = useState({}); // {0: {x, y}, 1: {x, y}, 2: {x, y}}
  const [isMobile, setIsMobile] = useState(false);
  const [loadedImages, setLoadedImages] = useState(new Set());
  const slideRefs = [useRef(), useRef(), useRef()];
  const slideTextVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.4, delay: 0.3 } },
  };
  const router = useRouter();

  // Use direct string paths instead of Next.js imports
  const slides = [
    "/assets/landing_page/2A.webp",
    "/assets/landing_page/3A.webp",
    "/assets/landing_page/4A.webp",
  ];

  // Preload images for faster loading
  useEffect(() => {
    const preloadImages = async () => {
      const promises = slides.map((src) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.onload = () => {
            setLoadedImages(prev => new Set([...prev, src]));
            resolve();
          };
          img.src = src;
        });
      });
      await Promise.all(promises);
    };
    preloadImages();
  }, []);

  // Debug log
  useEffect(() => {
    console.log("IntelCarousel mounted, slides:", slides.length);
  }, []);

  const getSlideUniqueStyle = useCallback(
    (slideIndex) => {
      switch (slideIndex) {
        case 0:
          return {
            flexBasis: selectedSlide === 0 ? "200vw" : "clamp(8rem,30vw,18rem)",
          };
        case 1:
          return {
            flexBasis: selectedSlide === 1 ? "200vw" : "clamp(8rem,30vw,18rem)",
            transform:
              selectedSlide === 1 ? "translateY(0)" : "translateY(3.8rem)",
          };
        case 2:
          return {
            flexBasis: selectedSlide === 2 ? "200vw" : "clamp(8rem,30vw,18rem)",
            transform:
              selectedSlide === 2 ? "translateY(0)" : "translateY(3.8rem)",
          };
        default:
          return {};
      }
    },
    [selectedSlide]
  );

  // Parallax effect handler
  const handleMouseMove = (e, idx) => {
    const rect = slideRefs[idx].current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 30; // max 15px left/right
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 30; // max 15px up/down
    setParallax((prev) => ({ ...prev, [idx]: { x, y } }));
  };
  const handleMouseLeave = (idx) => {
    setParallax((prev) => ({ ...prev, [idx]: { x: 0, y: 0 } }));
  };

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-scroll for mobile
  useEffect(() => {
    if (!isMobile) return;
    
    const interval = setInterval(() => {
      setSelectedSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [isMobile, slides.length]);

  const navigateToProductPage = () => {
    router.push("/product");
  };

  return (
    <div
      style={{
        alignItems: "flex-start",
        display: isMobile ? "block" : "flex",
        gap: isMobile ? "0" : "2rem",
        justifyContent: "center",
        listStyle: "none",
        margin: "0",
        padding: "0",
        transitionDuration: "0ms",
        position: "relative",
        width: isMobile ? "100vw" : "100%",
        height: isMobile ? "100vh" : "100%",
        transform: "translate3d(0px, 0px, 0px)",
        transitionDelay: "0ms",
        boxSizing: "border-box",
        zIndex: 1,
        marginLeft: isMobile ? "calc(-50vw + 50%)" : "0",
        marginRight: isMobile ? "calc(-50vw + 50%)" : "0",
        minHeight: "400px", // Add minimum height to ensure visibility
      }}
      className={isMobile ? "" : "w-full"}
    >
      {slides && slides.length > 0 ? (
        slides.map((slide, idx) => {
          const isLoaded = loadedImages.has(slide);
          return (
            <div
              key={idx}
              ref={slideRefs[idx]}
              onClick={() => !isMobile && setSelectedSlide(selectedSlide === idx ? null : idx)}
              onMouseMove={(e) => !isMobile && handleMouseMove(e, idx)}
              onMouseLeave={() => !isMobile && handleMouseLeave(idx)}
              style={{
                ...(isMobile ? {
                  width: "100vw",
                  height: "100vh",
                  display: selectedSlide === idx ? "block" : "none",
                  position: "relative",
                  cursor: "default"
                } : getSlideUniqueStyle(idx)),
                cursor: isMobile ? "default" : "pointer",
              }}
              className={`front-page-slider relative ${isMobile ? "mobile-slide" : ""}`}
            >
              <div
                className="background-image-center front-slide-hover"
                style={{
                  height: isMobile ? "100vh" : (
                    selectedSlide === idx
                      ? "40rem"
                      : idx === 1
                      ? "clamp(20rem,70vh,35rem)"
                      : "clamp(20rem,70vh,40rem)"
                  ),
                  width: isMobile ? "100vw" : "auto",
                  backgroundImage: `url(${slide})`,
                  backgroundSize: isMobile ? "cover" : "cover",
                  backgroundPosition: isMobile ? "center" : "center",
                  transition: "transform 0.2s cubic-bezier(.23,1.01,.32,1)",
                  transform: isMobile ? "none" : (parallax[idx]
                    ? `translate3d(${parallax[idx].x || 0}px, ${parallax[idx].y || 0}px, 0)`
                    : "none"),
                  opacity: isLoaded ? 1 : 0.8,
                }}
              >
               
              </div>
              {!isMobile && selectedSlide !== idx && (
                <div className="absolute w-full h-full top-0 left-0 slide-dark-cover"></div>
              )}
            </div>
          );
        })
      ) : (
        <div style={{ 
          width: "100%", 
          height: "400px", 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center",
          backgroundColor: "#f0f0f0",
          color: "#333"
        }}>
          Loading carousel...
        </div>
      )}
      
      {/* Mobile Navigation */}
      {isMobile && slides && slides.length > 0 && (
        <>
          {/* Navigation Buttons */}
          <button
            onClick={() => setSelectedSlide((prev) => (prev - 1 + slides.length) % slides.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full w-10 h-10 flex items-center justify-center z-20 hover:bg-black/60 transition"
            style={{ outline: 'none', border: 'none' }}
          >
            ‹
          </button>
          <button
            onClick={() => setSelectedSlide((prev) => (prev + 1) % slides.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full w-10 h-10 flex items-center justify-center z-20 hover:bg-black/60 transition"
            style={{ outline: 'none', border: 'none' }}
          >
            ›
          </button>
          
          {/* Slide Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedSlide(idx)}
                className={`w-2 h-2 rounded-full transition ${
                  selectedSlide === idx ? 'bg-white' : 'bg-white/50'
                }`}
                style={{ outline: 'none', border: 'none' }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
