import React, { useState } from "react"

// funtion to verify google drive link
function verifyGoogleLink(link) {
    // Regular expression pattern to match Google Drive file or Google Docs links
    var googleLinkPattern = /^(https?:\/\/)?(www\.)?(drive|docs)\.google\.com\/(file\/d\/|document\/d\/)([a-zA-Z0-9_-]+)(\/.*)?$/;
    
    // Test the link against the pattern
    return googleLinkPattern.test(link);
  }

export default function Body() {
  const [fname, setFName] = useState("")
  const [lname, setLName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [pincode, setPinCode] = useState("")
  const [city, setCity] = useState("")
  const [country, setCountry] = useState("")
  const [dob, setDob] = useState("")
  const [jobtitle, setJobTitle] = useState("")
  const [ctc, setCTC] = useState("")
  const [gender, setGender] = useState("male")
  const [resumeLink, setResumeLink] = useState()
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setGender(e.target.value)
  }
  const resetRadioState = () => {
    setGender("")
  }

  const emailnotify = async (e) => {
    e.preventDefault()
    const res = await fetch("/api/jobmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        fname: fname,
        lname: lname,
        email: email,
        phone: phone,
        pincode: pincode,
        city: city,
        country: country,
        dob: dob,
        ctc: ctc,
        jobtitle: jobtitle,
        gender: gender,
        resumeLink: resumeLink,
      }),
    })
      //   res = await res.json();
    .then((res) => res.json())
  }

  const submitForm = async (e) => {

    setLoading(true)
    e.preventDefault()
    if (!verifyGoogleLink(resumeLink)) {
        alert("Please enter a valid Google Drive/Docs link")
        return
    }
    emailnotify(e)

    const data = { fname, lname, email, phone, pincode, city, country, dob, ctc, jobtitle, gender, resumeLink, }

    fetch("/api/applyjob", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        res.text()
        setFName("")
        setLName("")
        setEmail("")
        setPhone("")
        setCity("")
        setDob("")
        setGender("")
        setCountry("")
        setPinCode("")
        setJobTitle("")
        setCTC("")
        setResumeLink("")
        setLoading(false)
      })
      .then(() => {
        alert("Your request has been sent.")
      })
      .catch((error) => {
        console.error("Error:", error)
      })
  }


  return (
    <>
      <div className="">
        
        

          <form
            onSubmit={submitForm}
          >
            <div className="shawdow py-10   rounded-lg  ">
              
              <div className="mx-4 grid w-full grid-cols-2 ">
                <div className="flex w-[50%] flex-col  ">
                  <h2 className="block text-sm ">
                    FIRST NAME
                  </h2>
                  <input
                    type="text"
                    className="px-2 py-2 placeholder-white  text-white  relative bg-transparent rounded border outline-none focus:border-white w-full pr-10"
                    name="fname"
                    id="fname"
                    value={fname}
                    onChange={(e) => setFName(e.target.value)}
                    required
                  />
                  <h2 className="pt-4 text-sm ">
                    EMAIL
                  </h2>
                  <input
                    type="email"
                    className="px-2 py-2 placeholder-white  text-white  relative bg-transparent rounded border outline-none focus:border-white w-full pr-10"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />

                  <h2 className="pt-4 text-[14px]   lg:pt-8 lg:text-[18px]">
                    CITY
                  </h2>
                  <input
                    type="text"
                    className="px-2 py-2 placeholder-white  text-white  relative bg-transparent rounded border outline-none focus:border-white w-full pr-10"
                    name="city"
                    id="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                  />
                </div>

                <div className="flex w-[50%] flex-col ">
                  <h2 className="text-[14px] lg:text-[18px] ">LAST NAME</h2>
                  <input
                    type="text"
                    className="px-2 py-2 placeholder-white  text-white  relative bg-transparent rounded border outline-none focus:border-white w-full pr-10"
                    name="lname"
                    id="lname"
                    value={lname}
                    onChange={(e) => setLName(e.target.value)}
                    required
                  />

                  <h2 className="pt-4 text-[14px]  lg:pt-8 lg:text-[18px] ">
                    PHONE NUMBER
                  </h2>

                  <input
                    type="tel"
                    className="px-2 py-2 placeholder-white  text-white  relative bg-transparent rounded border outline-none focus:border-white w-full pr-10"
                    name="phone"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    pattern="[0-9]{10}"
                  />
                  <h2 className="pt-4 text-[14px]  lg:pt-8 lg:text-[18px] ">
                    PIN CODE
                  </h2>
                  <input
                    type="text"
                    className="h-10 w-28 rounded-md border-[1px] border-gray-300   bg-gray-100 px-4 md:w-full md:border-2 lg:h-14 "
                    name="pincode"
                    id="pincode"
                    value={pincode}
                    onChange={(e) => setPinCode(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block pt-4  text-[14px]  lg:pt-8 lg:text-[18px]">
                    COUNTRY
                  </label>
                  <input
                    type="text"
                    className="h-10 w-full rounded-md border-[1px] border-gray-300  bg-gray-100 px-4 md:w-1/2 md:border-2 lg:h-14 "
                    name="country"
                    id="country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="ml-4 lg:ml-24">
                <label className="block pt-4  text-[14px] lg:pt-8 lg:text-[18px]">
                  GENDER
                </label>
                <div className="flex pt-4 lg:pt-10">
                  <div>
                    <input
                      type="radio"
                      className="mr-2 h-4 w-4 overflow-hidden text-sm md:text-lg md:mr-4 md:h-6 md:w-6 "
                      value="male"
                      checked={gender === "male"}
                      onChange={handleChange}
                    />
                    MALE
                  </div>

                  <div className="ml-4">
                    <input
                      type="radio"
                      className="ml-2 mr-2 h-4 w-4 text-sm md:text-lg  md:mr-4 md:h-6 md:w-6 lg:ml-20  "
                      value="female"
                      checked={gender === "female"}
                      onChange={handleChange}
                    />
                    FEMALE
                  </div>

                  <div className="ml-4">
                    <input
                      type="radio"
                      className="ml-2 mr-2 h-4 w-4 text-sm md:text-lg md:mr-4 md:h-6 md:w-6 lg:ml-20 "
                      value="others"
                      checked={gender === "others"}
                      onChange={handleChange}
                    />
                    OTHERS
                  </div>
                </div>
                <div>
                  <button type="reset" onClick={resetRadioState} />
                </div>
              </div>
              <div className="mx-4 mr-10 inline-flex lg:mx-24">
                <div>
                  <label className="block pt-0  text-[14px] lg:pt-8 lg:text-[18px]">
                    DATE OF BIRTH
                  </label>
                  <input
                    type="date"
                    className=" h-10 w-[8rem] rounded-md border-[1px] border-gray-300 bg-gray-100 px-4 md:border-2   lg:h-14 lg:w-[340px]"
                    name="dob"
                    id="dob"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    required
                  />
                </div>
                <div className="ml-8 lg:ml-24">
                  <label className="block pt-0  text-[14px] lg:pt-8 lg:text-[18px]">
                    JOB TITLE
                  </label>
                  <input
                    type="text"
                    className=" h-10 w-[8rem] rounded-md border-[1px] border-gray-300  bg-gray-100 px-4 md:border-2 lg:h-14 lg:w-[340px]"
                    name="jobtitle"
                    id="jobtitle"
                    value={jobtitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="ml-4 mb-20 md:mb-28 lg:ml-24">
                <div>
                  <label className="block pt-4  text-[14px] lg:pt-8 lg:text-[18px]">
                    EXPECTED CTC
                  </label>
                  <input
                    type="number"
                    className="h-10 w-[14rem] rounded-md border-[1px] border-gray-300  bg-gray-100 px-4 md:border-2 lg:h-14 lg:w-[430px]"
                    name="ctc"
                    id="ctc"
                    value={ctc}
                    onChange={(e) => setCTC(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block pt-4  text-[14px] lg:pt-8 lg:text-[18px]">
                    RESUME LINK (Google Drive)
                  </label>
                  <input
                    type="text"
                    className="h-10 w-[14rem] rounded-md border-[1px] border-gray- bg-gray-100 py-2 px-4 text-sm md:border-2 lg:h-14 lg:w-[430px] lg:text-lg"
                    name="cv"
                    id="cv"
                    onChange={(e) => setResumeLink(e.target.value)}
                    required
                  /> 
                  {/* A note for the user */}
                  <p className="text-[13px] text-gray-500 pt-2">
                    <span className="font-bold text-lg text-blue-500">&#128712;</span> Please upload your resume on Google Drive and share the public link
                  </p>
                </div>
                <button type="submit" 
                      className="w-36 h-10 lg:h-14 mt-6 px-4 py-0 lg:py-2 mr-8 mb-10 float-right overflow-hidden text-lg font-medium text-cyan-600 border-2 border-cyan-600  rounded-full hover:text-white hover:bg-cyan-600" 
                      defaultValue="Submit"
                      disabled={loading ? true : false}>
                  {loading ? "Submitted" : "Submit"}
              </button>
                
              </div>
            </div>
          </form>
        </div>
      
    </>
  )
}