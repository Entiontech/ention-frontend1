import React, { useRef, useState } from 'react'
import { Navbar, Footer } from '../components/index'
import PopUpForm from "../components/PopUpForm"
import { IoClose } from "react-icons/io5"

const Associate = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <main className={'main overflow-x-hidden relative'}>
      <Navbar />

      {/* ====================== Header ======================  */}
      <div className="lg:full-screen max-h-[25vh] lg:min-h-[90vh] flex justify-center items-center ">
        <div className="py-20 lg:py-0">
          <h1 className="w-full hidden md:block text-center text-white text-3xl md:text-4xl lg:text-6xl font-semibold px-0 md:px-10 pt-0 md:pt-14 lg:pt-0 ">
            Welcome to the Ention™
          </h1>
          <h1 className="w-full  text-center text-white text-3xl md:text-4xl lg:text-6xl font-semibold px-0 md:px-10 mt-10 md:mt-0">
            Associate Member program </h1>
          {/*<div className='mx-10 md:mx-auto  flex justify-center items-center mt-6 md:mt-12 gap-4 md:gap-10' >
               <button className='w-32 md:w-52 lg:w-72 h-10 lg:h-16 text-[14px] md:text-sm lg:text-[20px] bg-[#007E9E]   rounded-md text-white '>  Become A Partner</button>
              <button className='w-36 md:w-52 lg:w-72 h-10 lg:h-16 text-[12px] md:text-sm  lg:text-[20px] bg-[#007E9E] rounded-md  text-white '> Partners Make More Possible </button>
    </div>*/}
          <div className='flex items-center justify-center'>
          <button onClick={() => setShowModal(true)} className=' bg-[#007E9E]text-[12px] md:text-lg font-semibold bg-[#007E9E] px-4 md:px-10 py-2 md:py-4 rounded-full mt-4 lg:mt-12 text-white mb-10 md:mb-20 lg:mb-0 transform hover:bg-primary hover:border-primary hover:scale-105  transition-all duration-300 ease-in-out'>Contact Us</button>
            {/* <Link href="/login"><button className=' text-[12px] md:text-lg font-semibold bg-[#007E9E] px-4 md:px-10 py-2 md:py-4 rounded-full mt-4 lg:mt-12 text-white mb-10 md:mb-20 lg:mb-0 transform hover:bg-primary hover:border-primary hover:scale-105  transition-all duration-300 ease-in-out'>  Sign In</button></Link> */}
          </div>
        </div>

      </div>

      {/* ====================== Explore this program ======================  */}
      <div className="w-[90%] lg:w-[80%]  text-left text-white mb-10 md:mb-10 mx-auto md:mx-10 lg:mx-auto overflow-x-hidden  ">
        <h2 className="text-3xl md:text-5xl font-semibold text-center pt-6 md:pt-10 lg:pt-10">Explore The Program</h2>
        <p className="w-full md:w-[80%] mx-auto mt-6 text-sm md:text-xl text-center pr-0 lg:pr-0">
          Our ultimate destination “India will be computing
          manufacturing hub in coming future”. <br />Let&apos;s come together to
          make this dream come into reality. <br />
          As we know this will happen with combined efforts of
          everyone. For this we want to create a hand holding program
          to come together to create history and make India as a
          manufacturing hub in computing industry.

        </p>

      </div>
      {/* ======================  Discover how we can Work together to achieve more ======================  */}
      <div className="w-full lg:w-[70%] h-full  text-left text-white mb-4 lg:mb-16 px-4 mx-auto overflow-x-hidden  ">
        <h2 className="w-[90%] mx-auto text-2xl md:text-4xl font-semibold pt-0 md:pt-10 lg:pt-14 text-center "> Discover how we can work together to achieve our common goal.</h2>
        <div className=' text-white mb-4 md:mb-10 w-full  flex flex-col md:flex-row items-center justify-center px-14 md:px-6 pt-0 md:pt-10 lg:pt-0'>
          <div className='w-full hover:scale-105  transition duration-150 ease-in-out md:w-1/3 mt-8 md:mt-4 lg:mt-20'>
            <div className='h-14 md:h-32 lg:h-52  border-2 border-[#007E9E] flex items-center justify-center py-14 md:py-20 px-4 md:px-10 rounded-t-md'>
              <h3 className="text-md md:text-lg lg:text-2xl font-semibold  text-center capitalize "> As investment partner</h3>

            </div>
            <button className='w-full h-10 lg:h-14 bg-[#007E9E] px-4 md:px-20  text-sm lg:text-[20px] text-white rounded-b-md'> Explore</button>
          </div>
          <div className='w-full hover:scale-105  transition duration-150 ease-in-out md:w-1/3 mt-8 md:mt-4 lg:mt-20 ml-0 md:ml-4 lg:ml-10'>
            <div className=' h-20 md:h-32 lg:h-52 border-2 border-[#007E9E] flex items-center justify-center py-14 md:py-20 px-10 rounded-t-md'>
              <h3 className="text-md md:text-lg lg:text-2xl font-semibold  text-center capitalize  px-2">As OEM manufacturer of component</h3>

            </div>
            <button className='w-full h-10 lg:h-14 bg-[#007E9E] px-4 md:px-20 text-sm lg:text-[20px] text-white rounded-b-md'> Explore</button>
          </div>
          <div className='w-full hover:scale-105  transition duration-150 ease-in-out md:w-1/3 mt-8 md:mt-4 lg:mt-20 ml-0 md:ml-4 lg:ml-10'>
            <div className=' h-12 md:h-32 lg:h-52 border-2 border-[#007E9E] flex items-center justify-center py-14 md:py-20 px-10 rounded-t-md'>
              <h3 className="text-md md:text-lg lg:text-2xl font-semibold  text-center capitalize "> As dealer
              </h3>

            </div>
            <button className='w-full h-10 lg:h-14 bg-[#007E9E] px-4 md:px-20  text-sm lg:text-[20px] text-white rounded-b-md'> Explore</button>
          </div>
        </div>
        <div className=' text-white mb-12 w-full  flex flex-col md:flex-row items-center justify-center px-14 md:px-10'>
          <div className='w-full hover:scale-105  transition duration-150 ease-in-out md:w-1/3 mt-8 md:mt-4 lg:mt-0 '>
            <div className=' h-12 md:h-32 lg:h-52 border-2 border-[#007E9E] flex items-center justify-center py-14 md:py-20 px-10 rounded-t-md'>
              <h3 className="text-md md:text-lg lg:text-2xl font-semibold  text-center capitalize "> As warranty service provide </h3>

            </div>
            <button className='w-full  h-10 lg:h-14 bg-[#007E9E] px-4 md:px-20  text-sm lg:text-[20px] text-white rounded-b-md'> Explore</button>
          </div>
          <div className='w-full hover:scale-105  transition duration-150 ease-in-out md:w-1/3 mt-8 md:mt-4 lg:mt-0 ml-0 md:ml-4 lg:ml-10'>
            <div className=' h-12 md:h-32 lg:h-52 border-2 border-[#007E9E] flex items-center justify-center py-14 md:py-20 px-10 rounded-t-md'>
              <h3 className="text-md md:text-lg lg:text-2xl font-semibold  text-center capitalize "> As free lancer </h3>

            </div>
            <button className='w-full h-10 lg:h-14 bg-[#007E9E] px-4 md:px-20  text-sm lg:text-[20px] text-white rounded-b-md'> Explore</button>
          </div>
          {/* <div className='w-full  hover:scale-105  transition duration-150 ease-in-out md:w-1/3 mt-8 md:mt-4 lg:mt-0 ml-0 md:ml-4 lg:ml-10'>
            <div className=' h-12 md:h-32 lg:h-52 border-2 border-[#007E9E] flex items-center justify-center py-14 md:py-20 px-10 rounded-t-md'>
              <h3 className="text-md md:text-md lg:text-2xl font-semibold  text-center capitalize ">partener directory
              </h3>

            </div>
            <button className='w-full h-10 lg:h-14 bg-[#007E9E] px-4 md:px-20   text-sm lg:text-[20px] text-white rounded-b-md'> Explore</button>
          </div> */}
        </div>
      </div>
      {/* <div className='pt-0 md:pt-0  text-white mb-12 w-full lg:w-[70%]  gap-6 lg:gap-12 md:flex  mx-auto px-14 md:px-10 lg:px-0'>
        <div className='w-full md:w-[30%]'>
          <Image src={supplier} alt="/" className='rounded-md'></Image>
          <h5 className='text-lg lg:text-2xl py-3 font-bold capitalize pr-0 md:pr-6'>as component supplier</h5>
          <p className="w-full  text-sm md:text-base text-left  lg:text-justify">

            Business component suppliers may offer a wide range of products, from raw materials like micro-chips or hard-drives, to more complex parts like CPU boards or mouse.

          </p>
        </div>
        <div className='w-full md:w-[30%] pt-10 md:pt-0 '>
          <Image src={manufacture} alt="/" className='rounded-md'></Image>
          <h5 className='text-lg lg:text-2xl py-3 font-bold capitalize'>as component Manufacture</h5>
          <p className="w-full  text-sm md:text-base text-left lg:text-justify">
            We often use advanced manufacturing technologies and techniques, such as CAD (computer-aided design)  and CAM (computer-aided manufacturing) software, precision machining tools, and quality control systems.

          </p>
        </div>
        <div className='w-full md:w-[30%] pt-10 md:pt-0'>
          <Image src={distribution} alt="/" className='rounded-md'></Image>
          <h5 className='text-lg lg:text-2xl py-3 font-bold capitalize'>as component Distribution</h5>
          <p className="w-full  text-sm md:text-base  text-left lg:text-justify">
            Distributors work with manufacturers to provide a reliable supply of components that are critical for the creation of finished products. It&apos;s process of delivering components to manufacturers, that needs them for their production processes.

          </p>
        </div> 
        </div>*/}


      {/* ======================  business service provider  ======================  */}
      {/* <div className="w-full lg:w-[70%]  text-left text-white mb-0 md:mb-10 mx-auto overflow-x-hidden">
        <h2 className="text-3xl md:text-5xl font-semibold pt-0 lg:pt-20 text-center px-10 lg:px-24 capitalize">business service provider</h2>
        <p className="w-full mt-6 text-sm md:text-xl  text-center px-10 md:px-20">
          Business service providers can work with businesses of all sizes and across various industries, providing them with the expertise and support they need to achieve their goals. It can offer businesses a variety of benefits, including cost savings, increased efficiency, and access to specialized knowledge and resources.

        </p>

      </div>
      <div className='w-full lg:w-[80%] mx-auto pt-6 md:pt-10  flex gap-2 md:gap-10 px-6 md:px-10 lg:px-0'>
        <button className='w-full  hover:scale-105 hover:shadow-mission transition duration-150 ease-in-out h-12 lg:h-24 border-2 border-[#007E9E]   text-sm lg:text-[17px] text-white '> Loreum Ipseum</button>
        <button className='w-full hover:scale-105 hover:shadow-mission transition duration-150 ease-in-out border-2 border-[#007E9E]   text-sm lg:text-[17px] text-white '> Loreum Ipseum</button>
        <button className='w-full  hover:scale-105 hover:shadow-mission transition duration-150 ease-in-out border-2 border-[#007E9E]  text-sm lg:text-[17px] text-white '> Loreum Ipseum</button>
        <button className='w-full  hover:scale-105 hover:shadow-mission transition duration-150 ease-in-out border-2 border-[#007E9E]   text-sm lg:text-[17px] text-white '> Loreum Ipseum</button>
      </div> */}
      {/* ======================  as investment parnter  ======================  */}
      <div className="w-full lg:w-[70%] h-full text-left text-white mb-10 lg:mb-20 mx-auto ">
        {/* <h2 className="text-3xl md:text-5xl font-semibold text-center px-0 md:px-24 capitalize">Partners</h2> */}
        {/* <div className='flex gap-2 md:gap-6 items-center justify-center pt-4 lg:pt-10'>
        <button className='w-[20%] h-20  hover:scale-105 hover:shadow-mission transition duration-150 ease-in-out border-2 border-[#007E9E]   text-sm lg:text-xl text-white '>Intel</button>
        <button className='w-[20%] h-20  hover:scale-105 hover:shadow-mission transition duration-150 ease-in-out border-2 border-[#007E9E]   text-sm lg:text-xl text-white '>Microsoft</button>
        <button className='w-[20%] h-20  hover:scale-105 hover:shadow-mission transition duration-150 ease-in-out border-2 border-[#007E9E]   text-sm lg:text-xl text-white '>AMD</button>
        <button className='w-[20%] h-20  hover:scale-105 hover:shadow-mission transition duration-150 ease-in-out border-2 border-[#007E9E]   text-sm lg:text-xl text-white '>Web Designer<br/>eveIt</button>

         
       </div>  */}
        <div className='flex items-center justify-center '>
          {/* <Link href="/corporate"> */}
            <button onClick={() => setShowModal(true)} className=' bg-[#007E9E] px-4 md:px-10 py-2 md:py-4 mt-6 lg:mt-0 text-sm md:text-[17px] lg:text-lg text-white  rounded-md transform hover:bg-primary hover:border-primary hover:scale-105  transition-all duration-300 ease-in-out'>Contact Us</button>
            {/* </Link>    */}
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
      <Footer />
    </main>
  )

}
export default Associate
