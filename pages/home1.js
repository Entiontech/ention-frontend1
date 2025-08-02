import React, { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { Navbar, Footer, hooks } from 'components'
import { useAnimation, motion } from "framer-motion";
// import lappy from 'assets/section1bg.png' // Missing file
// import lappy1 from 'assets/lappy.png' // Missing file
// import lappy2 from '../public/assets/Products/E1/e1_9.svg' // Missing file

// import intelLogo from 'assets/intelcore.png' // Missing file
// import amdLogo from 'assets/amdimg.png' // Missing file
// import win11Logo from 'assets/window.png' // Missing file
// import business from 'assets/1.svg' // Missing file
// import highEndUser from 'assets/2.svg' // Missing file
// import general from 'assets/3.svg' // Missing file
// import student from 'assets/4.svg' // Missing file
// import service from 'assets/serviceimg.png' // Missing file
import PopUpForm from "../components/PopUpForm"
import { IoClose } from "react-icons/io5"
import Typewriter from 'typewriter-effect';
// import warranty from 'assets/warlog.png' // Missing file
const squareVariants = {
  visible: { opacity: 1, scale: 4, transition: { duration: 1 }, },
  hidden: { opacity: 0, scale: 0 }
}


export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [dot1, dot2, dot3, dot4, dot5] = [useRef(), useRef(), useRef(), useRef(), useRef()]
  const [section1, section2, section3, section4, section5] = [useRef(), useRef(), useRef(), useRef(), useRef()]
  const [currSection, setCurrSection] = useState(1)
  const animation = useAnimation()

  const observerFunction = (entries, n) => {
    if (entries[0].isIntersecting) setCurrSection(n)
  }

  const handleDotClick = (elem) => elem?.current?.scrollIntoView()

  useEffect(() => {
    if (section1.current && section2.current && section3.current && section4.current) {
      const observer1 = new IntersectionObserver(entries => observerFunction(entries, 1), { threshold: 0.5 })
      const observer2 = new IntersectionObserver(entries => observerFunction(entries, 2), { threshold: 0.5 })
      const observer3 = new IntersectionObserver(entries => observerFunction(entries, 3), { threshold: 0.5 })
      const observer4 = new IntersectionObserver(entries => observerFunction(entries, 4), { threshold: 0.5 })
      const observer5 = new IntersectionObserver(entries => observerFunction(entries, 5), { threshold: 0.5 })

      observer1.observe(section1.current);
      observer2.observe(section2.current);
      observer3.observe(section3.current);
      observer4.observe(section4.current);
      observer5.observe(section5.current);

      return () => {
        try {
          observer1.unobserve(section1.current);
          observer2.unobserve(section2.current);
          observer3.unobserve(section3.current);
          observer4.unobserve(section4.current);
          observer5.unobserve(section5.current);

        } catch (e) {
        }
      };
    }
  }, [])

  function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
        // reveals[i].querySelectorAll('.animate').forEach(el => el.classList.add(el.getAttribute('data-animate')) )
      } else {
        reveals[i].classList.remove("active");
        // reveals[i].querySelectorAll('.animate').forEach(el => el.classList.remove(el.getAttribute('data-animate')) )
      }
    }
  }

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", reveal);
  }

  return (
    <>
      <main className={'main overflow-x-hidden relative'}>

        {/* ================= { Dots } ================= */}
        <div className={styles.dots + " fixed top-96 md:top-1/2 transform -translate-y-1/2 left-2 lg:left-12 flex flex-col dots"}>
          <span ref={dot1} onClick={() => handleDotClick(section1, 1)} className={`${currSection === 1 ? 'bg-[#02b3e0]' : 'bg-gray-100'} cursor-pointer text-[10px] md:text-[20px] hover:bg-[#02b3e0]`}> </span>
          <span ref={dot2} onClick={() => handleDotClick(section2, 2)} className={`${currSection === 2 ? 'bg-[#02b3e0]' : 'bg-gray-100'} cursor-pointer text-[10px] md:text-[20px] hover:bg-[#02b3e0]`}> </span>
          <span ref={dot3} onClick={() => handleDotClick(section3, 3)} className={`${currSection === 3 ? 'bg-[#02b3e0]' : 'bg-gray-100'} cursor-pointer text-[10px] md:text-[20px] hover:bg-[#02b3e0]`}> </span>
          <span ref={dot4} onClick={() => handleDotClick(section4, 4)} className={`${currSection === 4 ? 'bg-[#02b3e0]' : 'bg-gray-100'} cursor-pointer text-[10px] md:text-[20px] hover:bg-[#02b3e0]`}> </span>
          <span ref={dot5} onClick={() => handleDotClick(section5, 5)} className={`${currSection === 5 ? 'bg-[#02b3e0]' : 'bg-gray-100'} cursor-pointer text-[10px] md:text-[20px] hover:bg-[#02b3e0]`}> </span>

        </div>

        <Navbar />
        <div ref={section1} className="lg:full-screen max-h-[50vh]  lg:min-h-[85vh] flex justify-center items-center" id='section1' style={{ backgroundImage: `url('/assets/0N1A1389.png')`, backgroundSize: '100% 100%' }}>

          <div className="w-[90%] md:w-[80%] h-[100%]  ">
            <div className="right ">
              <h1 className="w-full h-full text-white  text-right text-xl md:text-4xl lg:text-6xl pt-6 md:pt-10 lg:pt-4 font-semibold  ">
                Welcome to Ention™ world.

              </h1>
              <h1 className="w-full  h-full text-white text-right  text-lg md:text-4xl lg:text-5xl pt-1 md:pt-4 font-semibold  ">

                Introducing Made in India

              </h1>
              <h1 className="w-full  h-full text-white text-right  text-lg md:text-4xl lg:text-5xl pt-1 md:pt-4 font-semibold  ">


                Ention™ Workbook® series
              </h1>
              <h1 className="w-full  h-full text-white text-right  text-lg md:text-4xl lg:text-5xl pt-1 md:pt-4 font-semibold  ">
                <span className=' '>
                  {/* Style will be inherited from the parent element */}
                  <Typewriter options={{
                    strings: ["Computing Devices!"],
                    autoStart: true,
                    loop: true,
                  }}
                  />
                </span>
              </h1>
              <div className='flex item-right justify-end  '> <Link href="/products/laptops"><button className=' text-[12px] md:text-lg font-semibold bg-[#007E9E] px-4 md:px-6 py-2 md:py-3 rounded-full mt-4 md:mt-12 text-white mb-10 md:mb-20 lg:mb-0 transform hover:bg-primary hover:border-primary hover:scale-105  transition-all duration-300 ease-in-out'> Experience Ention™ Workbook® </button></Link>
              </div>
            </div>
            {/* <div className="fade right">
                  <Image src={dots} width={300} height={200} alt="Header" />
                </div> */}
          </div>
        </div>
        <div className=''>
          <div ref={section2} className="lg:full-screen relative max-h-[85vh]  lg:min-h-[75vh] bg-[#09101e] flex justify-center items-center" id='section2' style={{ backgroundImage: `url('/assets/0N1A1389.png')`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundBlendMode: 'overlay' }}>

            <div className="  w-full md:w-[85%] lg:w-[80%] max-h-auto mx-auto  text-white  pt-6 md:pt-10 pl-0 lg:pl-10 " >
              <div className=' '>
                <h1 className="  text-xl md:text-3xl  font-semibold text-center leading-6 mx-auto w-full lg:max-w-[80%] pl-10 md:pl-0 pr-10 md:pr-0"  > Technology at its core to develop the most promising laptop and computer brand for quality
                  and comprehensive, affordable price to establish and maintain an effective operational
                  efficiency.  </h1>
                <h3 className="text-center text-sm md:text-xl lg:text-lg mt-5 md:mt-10 lg:mt-5 w-full md:max-w-[60%] mx-auto pl-10 md:pl-0 pr-10 md:pr-0">

                </h3>


                <div className="w-full  flex  mt-0 md:mt-0 lg:mt-0 text-white items-center justify-center pl-2 lg:pl-4 px-10 pb-2 ">

                  <div className='w-[90%]  lg:w-full grid grid-cols-2  mx-auto md:grid-cols-4 gap-2 lg:gap-6 '>
                    <div className="flex flex-col   md:w-full ">
                      <h2 className="text-lg lg:text-3xl font-semibold text-center my-2 md:my-8">Business</h2>
                      <div className='w-full flex  items-center justify-center  '><Image src="/assets/0N1A1389.png" width={40} height={40} alt="High End User" className='block md:hidden' />
                        <Image src="/assets/0N1A1389.png" width={70} height={70} alt="Business" className='hidden md:block ' />
                      </div>

                      {/* <p className="grow flex-1 mt-3 text-sm md:text-xl lg:text-lg">Suppling laptop products with features that give users the ability to remain in touch with the latest trend in technology. </p> */}
                    </div>
                    <div className="flex flex-col   md:w-full  mx-auto  ">
                      <h2 className="text-lg lg:text-3xl font-semibold  text-center my-2 md:my-8">High End User</h2>
                      <div className=' w-full flex  items-center justify-center'>
                        <Image src="/assets/0N1A1389.png" width={70} height={70} alt="Business" className='hidden md:block ' />
                        <Image src="/assets/0N1A1389.png" width={40} height={40} alt="High End User" className='block md:hidden' /></div>

                      {/* <p className="grow flex-1 mt-3 text-sm md:text-xl lg:text-lg">To meet demand for top-tier products and services, often seeking cutting-edge technology and exceptional performance.</p> */}
                    </div>


                    <div className="flex flex-col   md:w-full  mx-auto  ">
                      <h2 className="text-xl lg:text-3xl font-semibold   text-center my-2 md:my-8">General</h2>
                      <div className='w-full flex  items-center justify-center'>
                        <Image src="/assets/0N1A1389.png" width={40} height={40} alt="General" className='block md:hidden' />
                        <Image src="/assets/0N1A1389.png" width={70} height={70} alt="General" className='hidden md:block' /></div>


                      {/* <p className="grow flex-1 mt-3 text-sm md:text-xl lg:text-lg">The stunning laptop range stole the show and made a distinct mark in the industry with higher-end processors.</p> */}
                    </div>
                    <div className="flex flex-col   md:w-full  mx-auto ">
                      <h2 className="text-xl lg:text-3xl font-semibold  text-center my-2 md:my-8">Student</h2>
                      <div className='w-full flex  items-center justify-center'>
                        <Image src="/assets/0N1A1389.png" width={40} height={40} alt="Student" className='md:hidden block' />
                        <Image src="/assets/0N1A1389.png" width={70} height={70} alt="Student" className='hidden md:block ' /></div>

                      {/* <p className="grow flex-1 mt-3 text-sm md:text-xl lg:text-lg">Specialized in offering future-ready solutions to the requirements of all students who are quality determined.</p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div ref={section3} className="lg:full-screen max-h-[140vh]  lg:min-h-[85vh] bg-[#0d1628] flex justify-center items-center" id='section3'>

            <div className=" relative w-[80%] md:w-[85%] lg:w-[80%] mx-auto text-white pl-0 lg:pl-10 pt-10 md:pt-0 " >
              <div className="reveal">
                <h2 className="text-xl md:text-4xl font-bold text-center">High performance power house</h2>
                <h3 className="w-full lg:w-[60%] mx-auto text-center text-sm md:text-xl lg:text-lg mt-3 px-4">
                Ention™ laptop equipped with latest generation processor and Window 11 for smart user experience.
                </h3>
                <div className="w-full flex flex-col md:flex-wrap lg:flex-row gap-2 mt-6 lg:mt-16  pl-0 md:pl-0 lg:pl-0 pr-0 md:pr-6 items-center justify-center">

                  <div className="flex flex-col w-full  lg:w-[30%] mx-auto md:mx-0 bg-[#000000]/20 rounded-lg shadow-xl p-4">

                    <h2 className="text-xl lg:text-2xl font-semibold mt-0 md:mt-0">Intel family processor</h2>
                    <div className=" mb-4 flex mt-4">
                      <Image src="/assets/0N1A1389.png" className='w-[20%] md:w-[30%] md:h-[30%] h-[20%]' alt="Intel" />
                    </div>
                    <p className='text-sm md:text-xl lg:text-lg pt-2'>
                      The lineup of Core processors includes the Intel Core i3, Intel Core i5, Intel Core i7, and Intel Core i9, along with the X-series of Intel Core CPUs.
                    </p>
                  </div>
                  <div className="flex flex-col mx-auto md:mx-4 lg:mx-10 bg-[#000000]/20 rounded-lg p-4 w-full shadow-xl lg:w-[30%] ">

                    <h2 className="text-xl lg:text-2xl font-semibold mt-0 md:mt-0 ">AMD series processor</h2>
                    <div className="grow mb-4 flex mt-4">
                      <Image src="/assets/0N1A1389.png" className='w-[20%] md:w-[30%] md:h-[30%] h-[20%]' alt="Intel" />
                    </div>
                    <p className='text-sm md:text-xl lg:text-lg pt-1'>
                      From small businesses to enterprises, AMD Ryzen™ Processors with PRO technologies provide work-anywhere flexibility for the modern workforce.
                    </p>
                  </div>

                  <div className="flex flex-col w-full lg:w-[30%] mx-auto bg-[#000000]/20 shadow-xl rounded-lg p-4 md:mx-0">


                    <h2 className="text-xl lg:text-2xl font-semibold mt-0 md:mt-0">Microsoft Window </h2>
                    <div className="grow mb-4 flex pt-2 ">
                      <Image src="/assets/0N1A1389.png" className='w-[20%] md:w-[28%] md:h-[20%] h-[20%]' alt="Windows" />
                    </div>
                    <p className='text-sm md:text-lg pt-0'>
                      It is Designed for the world of hybrid work, Windows 11 can help you work more simply and seamlessly from anywhere you want.
                    </p>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div ref={section4} className="lg:full-screen max-h-[110vh]  lg:min-h-[110vh] bg-[#0e182b] flex flex-col justify-center items-center pt-10" id='section4' >
            <div className="w-[80%] lg:w-[80%] mx-auto  flex flex-col items-center justify-center text-white   mt-0 md:mt-10 lg:mt-0 "  >
             
              <div className='w-full md:w-[80%] '> <h2 className="text-xl md:text-4xl tracking-wide font-semibold text-center  capitalize ">We also provide business services consultancy services and solution for your
                business need.
              </h2>
                <Image src="/assets/0N1A1389.png" width={600} height={400} className='hidden md:block mx-auto pt-6' alt="Intel" />
                <Image src="/assets/0N1A1389.png" width={300} height={100} className=' block md:hidden pt-4' alt="Intel" />
                <div className='flex item-center justify-center pl-0 md:pl-0 pb-0 md:pb-10'> <Link href="/service/start-a-business"><button className=' text-[12px] md:text-lg font-semibold bg-[#007E9E] px-4 md:px-6 py-2 md:py-3 rounded-full mt-4 md:mt-6 text-white mb-10 md:mb-10 lg:mb-0 transform hover:bg-primary hover:border-primary hover:scale-105  transition-all duration-300 ease-in-out'> Learn More </button></Link>
                </div>
              </div>

            </div>

          </div>
          <div ref={section4} className="lg:full-screen max-h-[60vh]  lg:min-h-[60vh] bg-[#0e1930] flex flex-col justify-center items-center pt-10" id='section4' >
            <div className="w-[80%] lg:w-[80%] mx-auto flex flex-col md:flex-row text-white  pl-0 lg:pl-14  pb-0 md:pb-10"  >
              <div className='w-full md:w-[70%] lg:w-[50%] mx-0 lg:mx-6'><h2 className="text-xl md:text-4xl tracking-wide font-semibold text-center mx-auto  w-full   mt-0 md:mt-0">  On-Site Warranty is Rather a Guaranty of Our Infallible Faith in Our Machine.
              </h2>
                {/* <p className='text-sm md:text-lg text-center pt-4'>
                      18 months warranty
                    </p> */}
                <div className='flex justify-center pt-2'>
                  <Image src="/assets/0N1A1389.png" width={100} height={100} className='block md:hidden' alt="Intel" />
                </div>
                <div className='flex item-center justify-center '> <Link href="/warranty"><button className=' text-[12px] md:text-lg font-semibold bg-[#007E9E] px-4 md:px-6 py-2 md:py-3 rounded-full mt-4  text-white mb-10 md:mb-20 lg:mb-0 transform hover:bg-primary hover:border-primary hover:scale-105  transition-all duration-300 ease-in-out'> Learn More </button></Link>
                </div>
              </div>
              <div className=' w-full md:w-[30%] lg:w-[50%] flex items-center justify-center'>
                <Image src="/assets/0N1A1389.png" className=' w-full lg:w-[30%] hidden md:block' alt="Intel" />

              </div>
            </div>
          </div>
          <div ref={section5} className="lg:full-screen max-h-[70vh]  lg:min-h-[75vh] bg-[#132039] flex justify-center items-center" id='section5' >

            <div className="w-[90%] mx-auto flex flex-col md:flex-row gap-2 justify-center items-center mt-10 md:mt-0 lg:mt-14 mb-0 md:mb-20"  >
              <div className="w-[60%] md:w-[50%] flex items-center justify-center" >
                <Image src="/assets/0N1A1389.png" className='' alt="Ention" />
              </div>
              <div className="w-full md:w-[50%] pr-4 pl-10 md:pl-10 ">
                <div className="right ">
                  <h1 className="w-full h-full text-white text-xl md:text-4xl text-left pt-0 md:pt-10 lg:pt-4  font-semibold pl-0 lg:pl-10 ">
                    Ention™ Workbook® series experience program for B2B and Bulk Purchase
                  </h1>

                  {/* <p className='text-sm md:text-xl text-center lg:text-lg text-white pt-4'>
                       Our company was incorporated on 28th Jan 2022 in India to provide Laptop products with features that gives users the ability to remain in touch with the latest trends  of technology.
                      </p> */}
                  <div className='pl-0 lg:pl-10  pt-0 md:pt-4' ><p className='text-sm md:text-xl text-left lg:text-lg text-white pt-4'>
                    ✓ No-Obligation to purchase <br /><br />
                    ✓ Exclusive Offers during B2B and Bulk purchase<br /><br />
                    ✓ Sample Delivery to your company
                  </p></div>
                  <div className='flex item-center justify-center  '>
                    {/*} <button className=' text-[12px] md:text-lg font-semibold bg-[#007E9E] px-4 md:px-6 py-2 md:py-3 rounded-full mt-4 md:mt-12 text-white mb-10 md:mb-20 lg:mb-0 transform hover:bg-primary hover:border-primary hover:scale-105  transition-all duration-300 ease-in-out' onClick={() => setShowModal(true)}> Connect Us </button> */}
                    <Link href="/corporate"> <button className=' text-[12px] md:text-lg font-semibold bg-[#007E9E] px-4 md:px-6 py-2 md:py-3 rounded-full mt-4 md:mt-12 text-white mb-10 md:mb-20 lg:mb-0 transform hover:bg-primary hover:border-primary hover:scale-105  transition-all duration-300 ease-in-out' > Connect Us </button>
                    </Link> </div>
                </div>

                {/* <div className="fade right">
                  <Image src={dots} width={300} height={200} alt="Header" />
                </div> */}
              </div>
            </div>
          </div>
          {/* --------------------------Popup Box Form----------------------------------- */}
          {showModal ? (
            <>
              <div className="fixed inset-0 z-[1200] flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
                <div className="relative my-6 mx-auto w-auto max-w-3xl">
                  <div className="relative flex w-full flex-col rounded-lg border-0 bg-[#007E9E] shadow-lg outline-none focus:outline-none md:w-[30rem]">
                    <div className="relative items-start justify-between rounded px-8 py-4 md:w-[30rem]">
                      <h3 className="text-center text-2xl font-semibold text-white">
                        CONNECT US
                      </h3>

                      <IoClose
                        className="absolute top-3 right-3 cursor-pointer text-3xl"
                        onClick={() => setShowModal(false)}
                      />


                      <div className="mt-6">
                        <PopUpForm
                          isOpen={showModal}

                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="fixed inset-0 z-20 bg-black opacity-80"></div>
            </>
          ) : null}


          {/* <div ref={section4} className=" px-6 lg:px-48 text-white bg-[#000F29] pt-0 md:pt-0 lg:pt-28  " id='section4' >
            <div className="reveal">
              <h2 className="text-xl md:text-4xl tracking-wide font-semibold text-center mx-auto  w-full md:max-w-[70%] capitalize mt-0 md:mt-0 pl-0 lg:pl-10">We are tecnology driven platform we offering
                buniess service that cover the need of energy
                business
              </h2>

              <div className="w-full mt-10 md:mt-24 text-white ">
                <div className="w-full  mx-auto flex flex-row gap-0  lg:gap-[20%] justify-between items-center ">
                  <div className="w-[50%] lg:w-[40%] flex flex-col mx-4 md:mx-10">
                    <div className="w-full flex-1 grow">
                      <Image src={incorporation} width={400} height={200} className='rounded-2xl' alt="Incorporation" />
                      <h3 className="text-[14px] md:text-2xl mt-2 text-center font-bold">Incorporation</h3>
                      <p className=' text-[12px]  md:text-xl lg:text-lg text-center pt-2'>
                        We’re global corporate incorporation for advancing high-potential technicians and managing director roles.

                      </p>
                    </div>
                  </div>
                  <div className="w-[50%] lg:w-[40%] flex flex-col mx-4 md:mx-10">
                    <div className="w-full flex-1 grow ">
                      <Image src={verticalEmployee} width={400} height={200} className='rounded-2xl' alt="Vertical Employee" />
                      <h3 className="text-[14px] md:text-2xl mt-2 text-center font-bold">Vertical Employee</h3>
                      <p className='text-[12px] md:text-xl lg:text-lg text-center pt-2'>
                      They possess deep expertise and knowledge while focusing on their designated vertical tasks and responsibilities.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-[70%] mx-auto flex flex-row justify-center items-center pt-4 md:pt-10 pb-10">
                  <div className="w-[50%] flex flex-col mx-4 md:mx-10 lg:mx-8">
                    <div className="w-full flex-1 grow">
                      <Image src={registration} width={400} height={200} className='rounded-2xl' alt="Registration" />
                      <h3 className="text-[14px] md:text-2xl mt-2 text-center font-bold">Registration On</h3>
                      <p className=' text-[12px] md:text-xl lg:text-lg text-center pt-2'>
                        Ention™ was consolidated on 28th Jan 2022 in India to provide laptop and desktop products with the latest trend in technology.
                      </p>
                    </div>
                  </div>
                  <div className="w-[50%] flex flex-column mx-4 md:mx-10 lg:mx-8">
                    <div className="w-full flex-1 grow items-center justify-center">
                      <Image src={annualCompliance} width={360} height={200} className='rounded-2xl' alt="Annual Compliance" />
                      <h3 className="text-[14px] md:text-2xl mt-2 text-center font-bold ">Annual Compliance</h3>
                      <p className='text-[12px] md:text-xl lg:text-lg text-center pt-2 '>
                      Adheres to all legal, regulatory, and financial obligations on an annual basis and maintaining good standing with relevant authorities.
                      </p>
                    </div>
                  </div>
                </div>

              </div> 
            </div>
          </div>*/}


        </div>
      </main>

      <Footer />
    </>
  )
}
