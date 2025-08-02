import React, { useRef } from 'react';
import { Navbar, Footer } from '../index';
import styles from 'styles/Products.module.css';
import Slider from 'react-slick';
import Image from 'next/image';
import Link from 'next/link';
import laptop from '../../public/assets/banner/ban4.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import mid from 'assets/mid.png';
import pick from 'assets/pick.png';
import { useLocalStorage } from 'react-use';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { FaCartArrowDown, FaCircle } from 'react-icons/fa';
// import lappy1 from 'assets/section1bg.png'; // Missing file
// import comingsoon from 'assets/comingsoon.png'; // Missing file

// import lappy2 from 'assets/lappy.png'; // Missing file

const settings = () => ({
  dots: true,
  // infinite: true,
  // speed: 1000,
  // slidesToShow: length > 3 ? 3 : 1,
  slidesToShow: 1,
  // slidesToScroll: 1,
  autoPlay: true,
  focusOnSelect: true,
  arrows: true,
  initialSlide: 0,
  centerMode: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

const ProductCard = ({ product }) => {
  const [cart, setCart, removeFromCart] = useLocalStorage('cart', []);
  const router = useRouter();

  // console.log(cart)

  const addToCart = (e, product) => {
    // e.preventDefault();
    // toast.dismiss();
    // toast.loading("Adding to cart...", { type: "info", theme: "colored" });
    // console.log(cart);
    // console.log("product", product);
    // const exist = cart.find((x) => x.slug === product.slug);
    // if (!exist) {
    //   setCart([...cart, { slug: product.slug, quantity: 1 }]);
    //   router.push("/cart");
    // } else {
    //   router.push("/cart");
    //   toast.dismiss();
    //   // toast.error('Product already in cart', { theme: 'colored' })
    // }
  };

  // add sample products to cart

  return (
    <div className={`w-full  px-2 lg:px-5 mb-6 group cursor-pointer `}>
      <Link href={'/product/' + product.id}>
        <div className="flex flex-col justify-center items-center mb-8 ">
          <h2 className="text-2xl font-semibold text-center mb-1">
            {' '}
            {/* {product?.specifications["Model Number"] || "Others"}{" "} */}
            {product.modelName ?? ''}
          </h2>
          <hr
            className={`w-[40%] border-2 border-transparent group-hover:border-[#007E9E]`}
          />
        </div>
        <div
          className={`border border-[#007E9E] w-full mx-0 md:mx-5 group relative  group-hover:bg-teal-500/10`}
        >
          <Image
            src="/assets/0N1A1389.png"
            width={80}
            height={80}
            className="hidden md:block rounded-full absolute -top-4 -left-4"
          />

          <Image
            src="/assets/0N1A1389.png"
            width={50}
            height={50}
            className="block md:hidden rounded-full absolute -top-4 -left-4"
          />

          <button
            onClick={(e) => addToCart(e, { slug: product.id })}
            className="p-3 rounded-full bg-slate-600 hidden group-hover:flex justify-center items-center absolute top-2 right-2"
          >
            <FaCartArrowDown size={20} />
          </button>

          <div className="w-full flex item-center justify-center pt-2 bg-teal-500/10 group-hover:bg-teal-500/30">
            <Image
              src={process.env.NEXT_PUBLIC_SUPABASE_URL + product?.image}
              alt="specification"
              width={150}
              height={150}
              style={{
                height: '150px',
                widows: '150px',
                objectFit: 'cover',
              }}
              className="h-100px"
            />
          </div>
          <hr className="w-full border-1 border-gray-500" />
          <div className="w-full py-4 text-center px-2 md:px-10 ">
            <h3 className="text-md md:text-lg line-clamp-2">
              {' '}
              {product?.name}{' '}
            </h3>
            <h3 className="text-md md:text-lg line-clamp-2 pt-2">
              {' '}
              Ention™ Workbook® Series
            </h3>
          </div>
          <hr className="w-full border-1 border-gray-500" />
          <div className="py-4 text-center">
            <h3 className="text-sm md:text-lg">
              {' '}
              <span className="text-red-500 font-semibold">
                Starting From{' '}
              </span>{' '}
              Rs. .........{' '}
            </h3>
          </div>

          <hr className="w-full border-1 border-gray-500" />
          <div className="py-4 text-center">
            <h2 className="text-[#02b7e6] text-sm md:text-xl font-semibold flex items-center justify-center">
              {' '}
              View More{' '}
            </h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

const ProductsCarousel = ({ products, title }) => {
  return (
    <div className="mt-8 md:mt-20   w-full md:w-[80%] flex lg:mx-auto px-4 md:px-0 md:mx-14 items-center justify-center">
      <div>
        <h2 className="text-2xl md:text-3xl text-center font-semibold capitalize">
          {title}
        </h2>
        <div>
          <p className="text-sm md:text-lg text-center text-white mx-auto lg:max-w-[65%] pt-4 ">
            {products?.[0]?.category?.description}
          </p>
        </div>

        <div className="mt-4 md:mt-14 w-full flex items-center justify-center">
          {/*}   <Slider {...settings(products.length)} ref={slider1}>*/}
          {products?.map((product, i) => (
            <div
              key={product.id}
              className="w-full md:w-[50%] lg:w-[40%] lg:mx-auto"
            >
              <ProductCard product={product} />{' '}
            </div>
          ))}
          {/*}  </Slider>    */}
        </div>
        <div className="w-[50%] mx-auto flex items-center justify-center gap-4 mt-6 my-8 md:my-10 lg:my-10 ">
          <hr className="w-[40%] border-1 border-gray-300 " />
          <div className="bg-gray-300 w-2 h-2 rounded-full"></div>
          <div className="bg-gray-300 w-2 h-2 rounded-full"></div>
          <div className="bg-gray-300 w-2 h-2 rounded-full"></div>
          <hr className="w-[40%] border-1 border-gray-300 " />
        </div>
      </div>
    </div>
  );
};
const Products = ({ products, data }) => {
  const [slider] = [useRef()];

  const dataByCategory =
    data?.reduce((acc, product) => {
      const { category } = product;

      if (!acc[category.name]) {
        acc[category.name] = [];
      }

      acc[category.name].push(product);

      return acc;
    }, {}) || {};

  console.log('Joseph data ', data, ' ', dataByCategory);

  return (
    <main className={`text-white overflow-x-hidden`}>
      <Navbar />
      {/* ====================== Header ======================  */}
      <div>
        <Slider ref={slider}>
          <div className="  relative w-full min-h-[25vh] md:min-h-[30vh] lg:min-h-[60vh] ">
            {' '}
            <Image src={laptop} fill alt="Header" />
          </div>
          <div className="  relative w-full min-h-[25vh] md:min-h-[40vh] ">
            {' '}
            <Image src="/assets/0N1A1389.png" fill alt="Header" />
          </div>
          <div className="  relative w-full min-h-[25vh] md:min-h-[40vh] ">
            {' '}
            <Image src="/assets/0N1A1389.png" fill alt="Header" />
          </div>
        </Slider>
      </div>
      <div className="w-full lg:w-[90%] mx-auto flex flex-wrap md:flex-row items-center justify-center   text-xl text-center font-semibold mb-5 py-2">
        <div className="w-full md:w-[30%] flex gap-1 lg:gap-2  items-center justify-center text-center">
          <Image src={mid} alt="" className="w-10 h-10"></Image>
          <h2 className="pt-3 text-sm md:text-lg lg:text-xl">
            {' '}
            Made In India{' '}
          </h2>
        </div>
        <div className="w-full md:w-[30%]  text-center text-sm md:text-lg lg:text-xl pl-6 md:pl-0  py-6 md:py-2 ">
          {' '}
          18 Months Warranty{' '}
        </div>
        <div className="w-full md:w-[30%]  flex gap-1 md:gap-2 items-center justify-center text-center">
          <Image src={pick} alt="" className="w-10 h-9"></Image>
          <h2 className="pt-3 text-sm md:text-lg lg:text-xl">
            {' '}
            On-Site Warranty{' '}
          </h2>
        </div>
      </div>
      <hr
        className="border"
        style={{ borderTop: '0.1px solid rgba(94, 92, 92, 0.5)' }}
      />
      <div className=" overflow-x-hidden w-full text-sm md:text-2xl py-6 text-center">
        <h2 className="anim flex ">
          {' '}
          6 Months Additional Complimentary Warranty
          <span className="">
            <FaCircle className="text-[#007E9E] text-xl pt-2 mx-4" />
          </span>
          Limited Time Period Offer{' '}
        </h2>
      </div>
      <hr
        className="border"
        style={{ borderTop: '0.1px solid rgba(94, 92, 92, 0.5)' }}
      />
      <div className="w-full ">
        {Object.keys(dataByCategory).map((category, i) => {
          return (
            <ProductsCarousel
              key={`category-${category}-${i}`}
              title={category}
              products={dataByCategory[category]}
            />
          );
        })}
      </div>

      <Footer />
    </main>
  );
};

export default Products;
