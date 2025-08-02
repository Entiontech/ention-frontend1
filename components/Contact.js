import React, {useState} from 'react'
import services from 'lib/services'
import { toast } from 'react-toastify'
// import { sendEmail } from 'utils/email'
// import cities from 'lib/cities' // Missing file

const Contact = ({title}) => {

    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [city, setCity] = useState("")
   const [service, setService] = useState("")
    const handleSubmit = async () => {
        toast.dismiss()
        const toastId = toast.loading('Processing...', {type: 'info', theme: 'colored'})
        const res = await fetch('http://localhost:5000/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                accept: 'application/json'
            },
            body: JSON.stringify({
                subject: `Business Enquiry - (${title})`, 
                message: `
                <small> Source: Ention Website </small>
                <br />
                <p>Email: ${email}</p>
                <p>Phone No: ${phone}</p>
                <br />
                <p>City: ${city}</p>
                <br />
                <br />
                <p>Service: ${service}</p>
                <br />
                <p> I would like to dicuss regarding <b>${title}</b>
                `
            })
        })
        console.log(res.status)
        const data = await res.json()
        console.log(data)
        let toastOptions = {isLoading: false, autoClose: 4000, type: res.status === 200 ? 'success' : 'error'}
        toastOptions.render = res.status === 200 ? `We've received yout request, will get back to you soon!` : `Failed to deliver your message please try again later` 
        toast.update(toastId, toastOptions)
        return 
    }


    return (
        <div className='w-full max-w-[380px] max-h-fit p-4 lg:p-6 rounded-md bg-white text-black text-center '>
            <h2 className="text-xl lg:text-3xl font-bold" >Get started!</h2>
            <input className='mt-6  w-full h-10 px-2 rounded-md bg-[#F0F1F3]' type="email" placeholder="Email ID" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input className='mt-4 w-full h-10 px-2 rounded-md bg-[#F0F1F3]' type="text" placeholder="Mobile Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
            <select id="city" name="city" variant="standard" className="mt-4 w-full h-10 px-2 rounded-md bg-[#F0F1F3] outline-none text-black" onChange={(e) => setCity(e.target.value)} >
                <option value="Mumbai">Mumbai</option>
                <option value="Delhi">Delhi</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Chennai">Chennai</option>
                <option value="Kolkata">Kolkata</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Pune">Pune</option>
                <option value="Ahmedabad">Ahmedabad</option>
                <option value="Other">Other</option>
            </select>
            <select id="service" name="service" variant="standard" className="mt-4 w-full h-10 px-2 rounded-md bg-[#F0F1F3] outline-none text-black" onChange={(e) => setService(e.target.value)} >
                {services.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            <button className='mt-8 w-full h-10 px-2 rounded-md bg-[#007E9E] text-white' onClick={handleSubmit}>Connect With Us</button>
        </div>
    )
}
export default Contact
