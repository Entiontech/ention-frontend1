import React, { useEffect, useRef, useState } from 'react';
import computer1 from 'public/assets/Ention-Laptop-E3-Catalogue-design-2.png';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';

const ImageSlider = () => {
  // Array of image URLs for the slider
  const video1Ref = useRef(null);
  const video2Ref = useRef(null);
  const video3Ref = useRef(null);

  const sliderObj = [
    {
      img: computer1,
      ref: video1Ref,
      video: '/assets/landing_page/0709 (1)(1) (1).mp4', // Local video
    },
    {
      img: computer1,
      ref: video2Ref,
      video: '/assets/landing_page/0709 (1)(1) (1).mp4',
    },
    {
      img: computer1,
      ref: video3Ref,
      video: '/assets/landing_page/0709 (1)(1) (1).mp4',
    },
  ];

  // State for the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderObj.length);
  };

  // Function to go to the previous image
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sliderObj.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    video1Ref.current.play();
    video2Ref.current.play();
    video3Ref.current.play();
  }, []);

  return (
    <div className="flex items-center justify-center gap-8 lg:gap-16">
      {/* Previous Button */}
      <button
        onClick={prevImage}
        className="min-w-[50px] h-[50px] rounded-full transition flex center"
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)' }}
      >
        <FaChevronLeft />
      </button>

      {/* Slider Image */}
      <div className="relative w-full h-full overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`, // Moves the container to the left
          }}
        >
          {sliderObj.map((slider, index) => {
            return (
              <div key={index} className="relative w-full h-full flex-shrink-0">
                {/* Image */}
                <Image
                  src={slider.img.src}
                  alt={`Image ${index + 1}`}
                  width={1200}
                  height={800}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {/* Text Overlay */}
                <div className="absolute rounded-md top-[16px] lg:top-[5%] left-[40px] lg:left-[8%] w-[396px] lg:w-[84%] h-[230px] lg:h-[73%] bg-black">
                  <video
                    className="w-full h-full"
                    src={slider.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    ref={slider.ref}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Next Button */}
      <button
        onClick={nextImage}
        className="min-w-[50px] h-[50px] rounded-full transition flex center"
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)' }}
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default ImageSlider;
