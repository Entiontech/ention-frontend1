import React, { useState } from 'react';


const products = ['Interested Field','As investment partner', 'As OEM manufacturer of component', 'As dealer', 'As warranty service provider', 'As freelancer' ]

const PopUpForm = () => {

 
    // const [city, setCity] = React.useState('INR');
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
    <>
      <form onSubmit={handleSubmit}>
        <div className='relative flex w-full flex-wrap items-stretch my-2 '>
          <input type="text"
            className="px-2 py-2 placeholder-white  text-white  relative bg-transparent rounded border outline-none focus:border-white w-full pr-10"
            id="name" name="name"  required variant="standard" placeholder='Name' />

          <span className="h-full leading-snug font-normal absolute text-center text-white  bg-transparent rounded text-base flex items-center justify-center right-0 pr-3">
            <i className="fa fa-user-circle text-orange-500 text-lg"></i>
          </span>
        </div>

        <div className='relative flex w-full flex-wrap items-stretch my-2 '>
          <input 
            className="px-2 py-2 placeholder-white text-white  relative bg-transparent rounded border outline-none focus:border-white w-full pr-10"
            id="email" name="email" type="email"  placeholder='Email' />

          <span className="h-full leading-snug font-normal absolute text-center text-white  bg-transparent rounded text-base flex items-center justify-center right-0 pr-3">
            <i className="fa fa-envelope text-orange-500 text-lg"></i>
          </span>
        </div>

        <div className='relative flex w-full flex-wrap items-stretch my-2 '>
          <input type="tel"
            className="px-2 py-2 placeholder-white  text-white  relative bg-transparent rounded border outline-none focus:border-white w-full pr-10"
            id="contact" name="contact" required variant="standard" placeholder='Phone Number'
            pattern="[0-9]{10}"
            />

          <span className="h-full leading-snug font-normal absolute text-center text-white  bg-transparent rounded text-base flex items-center justify-center right-0 pr-3">
            <i className="fa fa-phone-square text-orange-500 text-lg"></i>
          </span>
        </div>

        <div className='relative flex w-full flex-wrap items-stretch my-2'>
          <input 
            className="px-2 py-2 placeholder-white text-white  relative bg-transparent rounded border outline-none focus:border-white w-full pr-10"
            id="company" name="company" type="text" variant="standard" placeholder='Company' />

          <span className="h-full leading-snug font-normal absolute text-center text-white  bg-transparent rounded text-base flex items-center justify-center right-0 pr-3">
            <i className="fa fa-building text-orange-500 text-lg"></i>
          </span>
        </div>

        <div className='relative flex w-full flex-wrap items-stretch my-2 '>
          <input  className="px-2 py-2 placeholder-white  text-white  relative bg-transparent rounded border outline-none focus:border-white w-full pr-10"
            id="message" name="message" required type="text"  placeholder='Write Something....'  variant="standard" />

          <span className="h-full leading-snug font-normal absolute text-center text-white  bg-transparent rounded text-base flex items-center justify-center right-0 pr-3">
            <i className="fa fa-commenting text-orange-500 text-lg"></i>
          </span>
        </div>
        {/* <div className="relative flex w-full flex-wrap items-stretch my-2  ">
         
          <select id="city" name="city" placeholder='City' className="px-2 py-2 placeholder-white  text-white  relative bg-transparent rounded border outline-none focus:border-white w-full pr-10">
            {cities.map((option) => (
              <option className="text-black px-2" key={option} value={option}>
                {option}
              </option>
            ))}
        </select>
        </div> */}
        <div className="relative flex w-full flex-wrap items-stretch my-2 ">
          
          {/* <select id="product" name="product"  select variant="standard" placeholder='Our Service' className="px-2 py-2 placeholder-white  text-white  relative bg-transparent rounded border outline-none focus:border-white w-full pr-10">
            {products.map((option) => (
              <option className='text-black'  key={option} value={option} >
                {option}
              </option>
            ))}
          </select> */}
{/*           
          <label htmlFor="product" className='text-white font-bold text-lg pt-4'>Interested Field </label> */}
          <select id="product" name="product"  select variant="standard"  placeholder='Interested Field'  className="px-2 py-2 placeholder-white  text-white  relative bg-transparent rounded border outline-none focus:border-white w-full pr-10">
            {products.map((option) => (
              <option className='text-black'  key={option} value={option} >
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className='text-center my-2'>
          <button type="submit"
            className="font-semibold text-white px-4 py-1 rounded-lg shadow-2xl border-2">
              Submit
          </button>
        </div>
      </form>
    </>
  )
}
export default PopUpForm