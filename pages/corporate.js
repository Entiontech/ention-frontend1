import React, { useRef, useState } from 'react'
import { Navbar, Footer } from '../components/index'
import Image from 'next/image'
import Link from 'next/link'


const products = [ 'Our Service', 'Laptops',]

const Corporate_Sale = () => {

 
    const [city, setCity] = React.useState('INR');
    const handleSubmit = (e) => {
      e.preventDefault()
      const name = e.target.name.value,
        email = e.target.email.value,
        contact = e.target.contact.value,
        city = e.target.city.value,
        company = e.target.company.value,
        product = e.target.product.value,
      
        message = e.target.message.value;
      
      console.log({name, email, contact, city, company, product, message})  
      return 
    }

  return (
    <main className={'main overflow-x-hidden relative'}>
      <Navbar />

      {/* ====================== Header ======================  */}
      <div className="lg:full-screen max-h-[25vh] lg:min-h-[90vh] flex justify-center items-center " >
        <div className="py-20 md:py-10 lg:py-0">
         <h1 className="w-full  text-center text-white text-3xl md:text-5xl lg:text-6xl font-semibold px-10 mt-10 lg:mt-0">
            Ention Experience Program
          </h1>
          <div className='mx-auto flex gap-2 lg:gap-6 justify-center items-center mt-0' ><Link href="/login"><button className=' text-[12px] md:text-lg font-semibold bg-[#007E9E] px-4 md:px-10 py-2 md:py-4 rounded-full mt-4 md:mt-6 lg:mt-12 text-white mb-10 md:mb-20 lg:mb-0 transform hover:bg-primary hover:border-primary hover:scale-105  transition-all duration-300 ease-in-out'>  Sign In</button></Link>
          <a href="#contact"> <button className=' text-[12px] md:text-lg font-semibold bg-[#007E9E] px-4 md:px-10 py-2 md:py-4 rounded-full mt-4 lg:mt-12 text-white mb-10 md:mb-20 lg:mb-0 transform hover:bg-primary hover:border-primary hover:scale-105  transition-all duration-300 ease-in-out'> Contact Us </button></a>  
          </div>
        
        </div>

      </div>

      {/* ====================== About this program ======================  */}
     <div className="w-full lg:w-[80%]  text-left text-white mb-0 md:mb-16 mx-10 lg:mx-auto overflow-x-hidden  ">
        <h2 className="text-3xl md:text-5xl font-semibold pt-10 md:pt-20"> About This Program</h2>
        <p className="w-full mt-4 text-sm md:text-xl pr-20 lg:pr-0">
        Corporate sales refer to the process of selling products or services to other businesses or organizations rather than to individual consumers. This type of sales involves building relationships with key decision-makers and understanding the needs and requirements of the business to provide tailored solutions that meet their unique needs.


        </p>
      <div className='w-[90%] hidden md:block  mx-auto '>
      <ul id="list" className="w-full   mt-0 md:mt-20 text-sm lg:text-lg  ml-6 md:ml-0 lg:ml-0">

  <li><button className='  h-[57px] bg-[#007E9E] text-center rounded-md  text-white '>Fill up the Form  </button></li>
  <li className="mt-3 mx-2 hidden md:block">       <Image src="/Arrow 14.png"  alt="Logo" /></li>
  <li> <button className=' h-[57px] bg-[#007E9E] text-center rounded-md  text-white '>We will get in touch	 </button></li>
 	<li className=" mt-3 mx-2">       <Image src="/Arrow 14.png"  alt="Logo" /></li>
	<li><button className='  md:w-52 lg:w-80 md:h-20  lg:h-[57px] bg-[#007E9E] text-center rounded-md  text-white  mt-0 lg:mt-0'> Receive laptops at company&apos;s doorstep	 </button>
 
  <Image src="/Arrow 14.png"  alt="Logo" className="rotate-90 ml-10 lg:ml-28 mt-12"/> 
</li>

 
	<li className=""><button className='w-28 md:w-40 h-[57px] bg-[#007E9E] text-center rounded-md  text-white mt-14 lg:mt-12 ml-56 lg:ml-60'>Return 	 </button></li>
  <li className="mt-4 lg:mt-3 mr-2 ml-1">       <Image src="/Arrow 14.png"  alt="Logo" className="rotate-180 ml-0 mt-12" /></li>
	<li><button className='w-48 lg:w-full  md:h-20 lg:h-[57px] bg-[#007E9E] text-center rounded-md  text-white mt-12 '> Experience 3
days trial without any obligation </button>
  <Image src="/Arrow 14.png"  alt="Logo" className="rotate-90 ml-10 lg:ml-32 mt-12"/> </li>
  <li className=""><button className='w-40 md:w-52 px-8 h-[57px] bg-[#007E9E] text-center rounded-md  text-white mt-12 ml-40 lg:ml-60'>Become a Partner 	 </button></li>
  <li className="mt-3 mr-2 ml-1">       <Image src="/Arrow 14.png"  alt="Logo" className="rotate-180 ml-0 mt-12" /></li>
	<li><button className=' h-[57px] bg-[#007E9E] text-center rounded-md  text-white mt-12 '>Purchase with exclusive offers </button></li>

</ul>
</div>
<div className='block md:hidden mx-4 flex items-center justify-center'>
<ul id="list" className=" mt-20 text-sm lg:text-lg  ">
	<li> <button className='w-60 h-[57px] bg-[#007E9E] text-center rounded-md  text-white '>Fill up the Form 	 </button>
  <Image src="/Arrow 14.png"  alt="Logo" className="rotate-90 w-10 mt-8 mx-auto"/></li>
 	
  <li><button className=' w-60 h-[57px] bg-[#007E9E] text-center rounded-md  text-white mt-6'>We will get in touch	  </button>
  <Image src="/Arrow 14.png"  alt="Logo" className="rotate-90 w-10 mt-8 mx-auto"/></li>

	<li><button className=' w-60 h-[57px] bg-[#007E9E] text-center rounded-md  text-white  mt-6'>Receive laptops at company&apos;s doorstep	 </button>
  <Image src="/Arrow 14.png"  alt="Logo" className="rotate-90 w-10 mt-8 mx-auto"/></li>
  <li><button className='w-60 h-[57px] bg-[#007E9E] text-center rounded-md  text-white mt-6 '> Experience 3days trial without any obligationn	 </button>
 <div className='flex mx-auto items-center justify-center gap-4'> <Image src="/Arrow 15.png"  alt="Logo" className="rotate-45  h-14  "/>
  <Image src="/Arrow 15.png"  alt="Logo" className="-rotate-45 h-14  "/></div> </li>
<li>
 <div className='w-full flex gap-6'>
	<button className='px-4 w-28 h-[57px] bg-[#007E9E] text-center rounded-md  text-white mt-2'>Return 	 </button>
<div>
  <button className='px-4 w-28  h-28 bg-[#007E9E] text-center rounded-md  text-white  ml-10'> Purchase with exclusive offers  </button>
  <Image src="/Arrow 14.png"  alt="Logo" className="rotate-90 w-10 mt-8 ml-20"/></div>
	</div> </li>
  <li className="ml-48 mt-4"><button className='px-4 w-28 h-[57px] bg-[#007E9E] text-center rounded-md  text-white '>Become a Partner 	 </button></li>
 
	

</ul>
</div>
      </div>
      <div className='w-[50%] mx-auto flex items-center justify-center gap-4  mt-8 md:mt-10 lg:mt-20 '>
           <hr className="w-[40%] border-1 border-gray-300 " /><div className='bg-gray-300 w-2 h-2 rounded-full'></div><div className='bg-gray-300 w-2 h-2 rounded-full'></div><div className='bg-gray-300 w-2 h-2 rounded-full'></div><hr className='w-[40%] border-1 border-gray-300 '/>
        </div>
    
  {/* ====================== form ======================  */}
 <div id="contact" className='pt-0 lg:pt-0 w-[80%] lg:w-[70%] mx-auto overflow-x-hidden'>
 <form onSubmit={handleSubmit} className='my-0 md:my-10 flex justify-center items-center flex-wrap text-white '>
        <div className="w-full flex flex-col md:flex-row gap-4 md:gap-20 text-white">
          <div className="w-full md:w-1/2">
          <div className="w-full  border-b border-white my-4 md:my-14">
          <label htmlFor="name" className='text-white font-bold text-lg '>Full Name <span className="text-red-500">* </span></label>
          <input id="name" name="name" type="text"  required variant="standard"  className="w-full outline-none  bg-transparent text-white mt-4" />
        </div>
        
        <div className="w-full border-b border-[#FFFFFF] my-4 md:my-14">
          <label htmlFor="contact" className='text-white font-bold text-lg pt-4 '>Contact Number </label>
          <input id="contact" name="contact" type="text"  required variant="standard"  className="w-full outline-none  bg-transparent text-white mt-4" />
        </div>
       
        <div className="w-full border-b border-white my-4 md:my-14 text-white">
          <label htmlFor="company" className='text-white font-bold text-lg pt-4'>Company Name(If Any) </label>
          <input id="company" name="company" type="text" variant="standard"  className="w-full outline-none  bg-transparent text-white mt-4" />
        </div>
        
        <div className="w-full border-b border-white my-4 md:my-14 text-white">
          <label htmlFor="message" className='text-white font-bold text-lg pt-4'>Message </label>
          <input id="message" name="message" required type="text"  placeholder='Write Something....'  variant="standard" className="w-full outline-none bg-transparent text-white mt-4" />
        </div>
        </div>
        
        <div className="w-full md:w-1/2">
        <div className="w-full  border-b border-white my-4 md:my-14">
          <label htmlFor="email" className='text-white font-bold text-lg  '>Email ID<span className="text-red-500">* </span></label>
          <input id="email" name="email" type="email"   className="w-full   bg-transparent  mt-4" />
        </div>
        <div className="w-full  border-b border-white my-4 md:my-14">
          <label htmlFor="city" className='text-white font-bold text-lg pt-4'>City </label>
          <select id="city" name="city"  className="w-full  bg-transparent text-white mt-4">
            {/* cities.map((option) => ( */}
              <option className="text-black px-2" key="INR" value="INR">
                INR
              </option>
            {/* ))} */}
        </select>
        </div>
        <div className="w-full border-b border-white my-4 text-white md:my-14 ">
          <label htmlFor="product" className='text-white font-bold text-lg pt-4'>Our Service/Product </label>
          <select id="product" name="product"  select variant="standard" className="w-full  bg-transparent text-white mt-4">
            {products.map((option) => (
              <option className='text-black'  key={option} value={option} >
                {option}
              </option>
            ))}
          </select>
         
        </div>
        </div>
        </div>
        <div className="flex justify-center items-center w-full mt-0 mb-10">
            <button type="submit"  variant='contained' size='large' className='rounded-md  bg-[#007E9E] px-8 py-2  lg:mt-10 text-white text-sm md:text-lg mt-4 transform hover:bg-primary hover:border-primary hover:scale-105  transition-all duration-300 ease-in-out'>
               Submit
            </button>
        </div>
     
    </form>
  </div>


      <Footer />
    </main>
  )

}
export default Corporate_Sale
