import React, { useEffect, useState } from "react";
import Image from 'next/image';

const ImageModal = ({ isOpen, onClose, images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState(null); // Track direction for smooth transition
  const [isTransitioning, setIsTransitioning] = useState(false); // Track if transition is in progress

  // Handle next image action
  const nextImage = () => {
    if (isTransitioning) return; // Prevent multiple clicks during transition
    setDirection("next");
    setIsTransitioning(true);
  };

  // Handle previous image action
  const prevImage = () => {
    if (isTransitioning) return; // Prevent multiple clicks during transition
    setDirection("prev");
    setIsTransitioning(true);
  };

  // Prevent modal from closing when clicking inside the modal content area
  const handleModalClick = (e) => {
    e.stopPropagation(); // Stop the click event from propagating to the backdrop
  };

  // Reset direction state and update current image index after transition is finished
  useEffect(() => {
    if (!isTransitioning) return; // Wait for the transition to finish

    const timeout = setTimeout(() => {
      setCurrentImageIndex((prevIndex) => {
        if (direction === "next") {
          return (prevIndex + 1) % images.length;
        } else if (direction === "prev") {
          return (prevIndex - 1 + images.length) % images.length;
        }
        return prevIndex;
      });
      setDirection(null); // Reset direction
      setIsTransitioning(false); // Reset transition state
    }, 500); // Wait for the transition duration (500ms)

    return () => clearTimeout(timeout);
  }, [direction, isTransitioning, images.length]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose} // Close modal when clicking on the backdrop
    >
      <div
        className="bg-[rgb(34,121,137)] p-3 rounded-lg relative max-w-2xl w-full"
        onClick={handleModalClick} // Prevent closing the modal when clicking inside
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white cursor-pointer rounded-full flex items-center justify-center w-8 h-8 text-4xl "
        >
          &times;
        </button>

        {/* Image Slider */}
        <div className="relative overflow-hidden mt-10 h-[600px]">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentImageIndex * 100}%)`, // This moves the image in a carousel-like manner
            }}
          >
            {images.map((image, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <Image
                  src={image.src}
                  alt={`Slider Image ${index}`}
                  width={800}
                  height={560}
                  className="w-full h-[560px] rounded-lg object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevImage}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white text-2xl"
          >
            &#10094;
          </button>
          <button
            onClick={nextImage}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white text-2xl"
          >
            &#10095;
          </button>
        </div>

        {/* Dots for carousel */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentImageIndex ? "bg-blue-500" : "bg-gray-300"
              }`}
              onClick={() => setCurrentImageIndex(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
