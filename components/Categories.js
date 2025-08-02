import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Slider from 'react-slick';
//import Link from 'next/link'

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  dots: false,
  infinite: true,
  arrows: true,

  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoPlay: true,
  focusOnSelect: true,
  arrows: false,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 820,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Remove all imports from '../services' and any code that uses them.
  }, []);

  return (
    <div className="w-full  shadow-lg rounded-lg py-8 pb-12">
      <div className="relative flex w-full overflow-x-scroll overflow-y-hidden lg:overflow-x-auto items-center">
        {categories.map((category, index) => (
          <div key={index} className="text-center">
            <div className="mx-2">
              <Link
                legacyBehavior
                key={index}
                href={`/blogs/category/${category.slug}`}
              >
                <p
                  className={`w-full bg-[#007E9E] transition duration-150 ease-in-out hover:scale-105 hover:rounded-lg text-md lg:text-xl cursor-pointer mr-2 lg:mr-4 px-2 py-4 rounded-md`}
                >
                  {category.name}
                </p>
              </Link>
            </div>
            {/* <div>
              <Link legacyBehavior key={index} href={`/blogs/category/${category.slug}`}>
                <span className={"cursor-pointer mt-4 justify-content-center text-black font-semibold pb-3 mb-3"}>{category.name}</span>
              </Link>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
