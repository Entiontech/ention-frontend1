import React, { useState, useEffect } from 'react'
import { Navbar, Footer, Contact } from 'components'
import Link from 'next/link'
import Image from 'next/image'

import { RiWhatsappFill } from 'react-icons/ri'
import { FaLinkedinIn } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'
import { IoClose } from "react-icons/io5";
import { AiOutlineSearch } from "react-icons/ai";
import { useSearchParams } from 'next/navigation'


const ServiceTemplate = ({ categories, title, info }) => {

  const [questions, setQuestions] = useState([])

  const params = useSearchParams();
  const [expanded, setExpanded] = useState(false)
  const [selected, setSelected] = useState(categories[0])
  //const [selected, setSelected] = useState(() => categories.find(c => c.title?.toLowerCase() == params.get('category')?.replace(/-/, ' ')) || categories[0])
  const [showModal, setShowModal] = useState(false);
  const [showModal1, setShowModal1] = useState(false);

  const selectcategory = (category) => {
    return setSelected(() => category)

  }


  const [filterValue, setFilterValue] = useState([]);
  // console.log(filterValue)
  const handleClick1 = () => {
    setShowModal1(true)
  }

  useEffect(() => {
    setSelected(() =>
      categories.find(c => c.id?.toLowerCase() == params.get('category')?.replace(/-/, ' ')) || categories[0]
    )
  }, [params]);



  const handleSearch = (e) => {
    const searchValue = e.target.value;
    console.log(services)
    const filterArray = services.filter((selected) => {
      return selected.title
        .toLowerCase()
        .includes(searchValue.toLowerCase())
      // .includes(searchValue.toLowerCase());
    });
    if (searchValue === "") {
      setFilterValue([]);
    } else {
      setFilterValue(filterArray);
    }
  };

  return (<main className='text-white overflow-x-hidden'>
    <Navbar />

    {/* ====================== Header ======================  */}
    <div className='w-full lg:w-[90%] md:flex  mx-10 md:mx-auto text-white pt-0 md:pt-0 overflow-x-hidden'>
      <div className="w-[80%] md:w-[55%] lg:w-[60%]  flex items-center justify-center pt-0 md:pt-10 ml-0 md:ml-8 lg:ml-14">
        <div>
          {/* ====================== Search Bar ======================  */}

          <div className="flex  mt-0 md:mt-4 md:mr-4 inline-flex">
            <div className=" ">
              <button
                className="float-left w-20 h-20 focus:outline-none"
                onClick={() => setShowModal(true)}
              >
                <AiOutlineSearch className="focus:outline-none rounded-full w-12 h-12 p-2 bg-[#007E9E] text-white" />
              </button>
              {showModal ? (
                <>
                  <div className=" bg-white rounded-lg ml-0 mt-0 float-left ">
                    <div className="rounded-lg w-full flex flex-inline  pl-1">
                      <input
                        type="text"
                        placeholder="Search ...."
                        onChange={handleSearch}
                        className=" w-full lg:w-80 h-8 pl-4 mt-2 text-black focus:outline-none"
                      />

                      <IoClose
                        className="text-gray-600 text-4xl text-right cursor-pointer pt-1"
                        onClick={() => { setShowModal(false); setFilterValue([]) }}
                      />
                    </div>
                    {filterValue.length !== 0 ? null : ""}
                    <div className="absolute bg-white rounded-lg border-2">
                      {filterValue.length !== 0 &&
                        filterValue.map((e, i) => {
                          return (
                            <div key={`searchResult${i}`} className="w-full p-2 hover:bg-primary text-black">
                              <button className="w-full px-4" onClick={() => { selectcategory(e); setShowModal(false) }}>{e.title}</button>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                </>
              ) : null}
            </div>
          </div>



          <h1 className="text-2xl lg:text-5xl font-bold text-left pb-2 md:pb-6 pt-2">{selected.title}</h1>
          <p className='w-[80%] text-sm lg:text-lg py-2'>{selected.description}</p>
         {(selected.id == 'eveIT services') ? '' :   <p className="text-lg lg:text-4xl font-semibold pt-2 md:pt-6">Starting from : {selected.startingPrice}</p>}
          <p className="text-sm lg:text-lg font-semibold pt-2 md:pt-4">{selected?.price1}</p>
          <p className="text-sm lg:text-lg font-semibold pt-2 md:pt-2"> {selected?.price2}</p>
          <p className="text-sm lg:text-lg font-semibold pt-2 md:pt-2"> {selected?.note}</p>
        </div>
      </div>
      <div className='w-[80%] md:w-[30%] lg:w-[40%]  ml-0 md:ml-10 lg:ml-28 mt-10 md:mt-10'>
        <Contact />

      </div>

    </div>


    {/*-------------------------------Here’s How IT Works---------------------------------------------*/}

    <div className='w-full max-h-fit bg-[#007E9E] px-6 lg:px-28 py-6 mt-6'>
      <h3 className='text-2xl lg:text-4xl text-center'>Here’s How IT Works</h3>
      <div className='w-full lg:flex items-center justify-center gap-4 pt-6  '>
        <p className='w-full lg:w-1/5 px-0 lg:px-10 text-sm lg:text-lg text-center pt-0 md:pt-4'>1. Fill Form
          Simply fill the above form
          to get started.
        </p>
        <div className='hidden lg:block w-1/5 flex items-center justify-center border-t-2 border-dashed border-white'></div>

        <p className='w-full lg:w-1/5 text-sm lg:text-lg text-center pt-4'>2. Call to discuss
          Our startup expert will connect with you & prepare documents.</p>
        <div className='hidden lg:block w-1/5 flex items-center justify-center border-t-2 border-dashed border-white'></div>
        <p className='w-full lg:w-1/5 text-sm lg:text-lg text-center pt-4'>3. We draft and file the documents required for your company registration</p>
      </div>
    </div>

    {/*-------------------------------side blocks---------------------------------------------*/}

    <div className="relative flex  gap-4 w-screen lg:w-full h-full overflow-x-scroll overflow-y-hidden  lg:overflow-x-auto items-center justify-center  pt-14 px-32 md:px-0 mx-auto pr-10 md:pr-0 text-[10px] md:text-[14px] lg:text-[16px] pb-4 font-semibold">



      {categories.map((category, i) => <button key={"category" + i} className={"  pb-2 focus:outline-none " + (selected.title === category.title ? "text-sm lg:text-2xl text-[#007E9E] border-b-8 border-[#007E9E]  border-r-2 border-r-white pr-3" : "text-white border-r-2 border-white pr-2")} onClick={() => selectcategory(category)}>{category.title}</button>)}


    </div>

    {/*-------------------------------side blocks---------------------------------------------*/}

    <div className='w-full flex flex-row pt-10 px-4 md:px-10 lg:px-20'>
      <div className='hidden md:block w-[30%] lg:w-[20%] h-full text-white   text-sm lg:text-lg '>
        <Link href="#overview" ><button className='w-full h-14 text-center bg-[#001B35] mt-2' >Overview</button></Link>
        <Link href="#benefits" ><button className='w-full h-14 text-center bg-[#002541] mt-2'>Benefits</button></Link>
        {(selected.id == 'eveIT services') ? '' :  <Link href="#requirements" ><button className='w-full h-14 text-center bg-[#00314C]  mt-2'>Documents</button></Link>}
        <Link href="#why_ention" ><button className='w-full h-14 text-center bg-[#003B58] mt-2'>{(selected.id == 'eveIT services') ? 'Why eveIT' : 'Why Ention'}</button></Link>
        {(selected.id == 'eveIT services') ? '' : <Link href="#Deliverable" ><button className='w-full h-14 text-center bg-[#003B58] mt-2'>Deliverable</button></Link>}
        {/* <Link href="#faq" ><button className='w-full h-14 text-center bg-[#00526F] mt-2'>FAQ</button></Link> */}

      </div>

      <div className='w-[90%] mx-auto md:mx-0 lg:w-[80%] border-l-2 border-[#007E9E] mt-2' >

        {/*-------------------------------OVERVIEW ---------------------------------------------*/}
        <div id="overview" className='w-full  text-left text-white bg-[#001B35]  p-6 px-6 lg:px-10 '>
          <h2 className='text-xl md:text-4xl font-semibold md:flex gap-2'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" id="IconChangeColor" height="44" width="44" transform="rotate(45)"><path d="M488 191.1h-152l.0001 51.86c.0001 37.66-27.08 72-64.55 75.77c-43.09 4.333-79.45-29.42-79.45-71.63V126.4l-24.51 14.73C123.2 167.8 96.04 215.7 96.04 267.5L16.04 313.8c-15.25 8.751-20.63 28.38-11.75 43.63l80 138.6c8.875 15.25 28.5 20.5 43.75 11.75l103.4-59.75h136.6c35.25 0 64-28.75 64-64c26.51 0 48-21.49 48-48V288h8c13.25 0 24-10.75 24-24l.0001-48C512 202.7 501.3 191.1 488 191.1zM635.7 154.5l-79.95-138.6c-8.875-15.25-28.5-20.5-43.75-11.75l-103.4 59.75h-62.57c-37.85 0-74.93 10.61-107.1 30.63C229.7 100.4 224 110.6 224 121.6l-.0004 126.4c0 22.13 17.88 40 40 40c22.13 0 40-17.88 40-40V159.1h184c30.93 0 56 25.07 56 56v28.5l80-46.25C639.3 189.4 644.5 169.8 635.7 154.5z" id="mainIconPathAttribute" fill="#ffffff"></path></svg>
            {selected.overview.title}</h2>
          <p className=' text-sm lg:text-lg pt-4'>{selected.overview.description} </p>
          <p className=' text-sm lg:text-lg pt-4'> <ul className=' pl-6'>
            {
              selected.overview?.point?.map((benefit, i) => <li key={"benefit" + i} className='text-white'>{benefit}</li>)
            }
          </ul>

          </p>
        </div>

        {/*-------------------------------Benefits---------------------------------------------*/}

        <div id="benefits" className='w-full flex flex-col md:flex-row  gap-6 text-left text-white bg-[#002541]  mt-6  p-6 lg:px-10'>
        {(selected.id == 'eveIT services') ? <div className='w-full '>
        <h2 className='text-xl md:text-4xl font-semibold md:flex gap-2'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" id="IconChangeColor" height="44" width="44"> <path d="M568.2 336.3c-13.12-17.81-38.14-21.66-55.93-8.469l-119.7 88.17h-120.6c-8.748 0-15.1-7.25-15.1-15.99c0-8.75 7.25-16 15.1-16h78.25c15.1 0 30.75-10.88 33.37-26.62c3.25-20-12.12-37.38-31.62-37.38H191.1c-26.1 0-53.12 9.25-74.12 26.25l-46.5 37.74L15.1 383.1C7.251 383.1 0 391.3 0 400v95.98C0 504.8 7.251 512 15.1 512h346.1c22.03 0 43.92-7.188 61.7-20.27l135.1-99.52C577.5 379.1 581.3 354.1 568.2 336.3zM279.3 175C271.7 173.9 261.7 170.3 252.9 167.1L248 165.4C235.5 160.1 221.8 167.5 217.4 179.1s2.121 26.2 14.59 30.64l4.655 1.656c8.486 3.061 17.88 6.095 27.39 8.312V232c0 13.25 10.73 24 23.98 24s24-10.75 24-24V221.6c25.27-5.723 42.88-21.85 46.1-45.72c8.688-50.05-38.89-63.66-64.42-70.95L288.4 103.1C262.1 95.64 263.6 92.42 264.3 88.31c1.156-6.766 15.3-10.06 32.21-7.391c4.938 .7813 11.37 2.547 19.65 5.422c12.53 4.281 26.21-2.312 30.52-14.84s-2.309-26.19-14.84-30.53c-7.602-2.627-13.92-4.358-19.82-5.721V24c0-13.25-10.75-24-24-24s-23.98 10.75-23.98 24v10.52C238.8 40.23 221.1 56.25 216.1 80.13C208.4 129.6 256.7 143.8 274.9 149.2l6.498 1.875c31.66 9.062 31.15 11.89 30.34 16.64C310.6 174.5 296.5 177.8 279.3 175z" id="mainIconPathAttribute" fill="#ffffff"></path></svg>
            {selected.benefits.title}</h2>
          <p className=' text-sm lg:text-lg pt-4'> {selected.benefits?.desc}</p>
          <p className=' text-sm lg:text-lg pt-4'> <ul className='list-disc pl-6'>
            {
              selected.benefits.benefits.map((benefit, i) => <li key={"benefit" + i} className='text-white'>{benefit}</li>)
            }
          </ul>

          </p>
          </div> 
        :  <div className='w-full md:w-[70%] '>
          <h2 className='text-xl md:text-4xl font-semibold md:flex gap-2'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" id="IconChangeColor" height="44" width="44"> <path d="M568.2 336.3c-13.12-17.81-38.14-21.66-55.93-8.469l-119.7 88.17h-120.6c-8.748 0-15.1-7.25-15.1-15.99c0-8.75 7.25-16 15.1-16h78.25c15.1 0 30.75-10.88 33.37-26.62c3.25-20-12.12-37.38-31.62-37.38H191.1c-26.1 0-53.12 9.25-74.12 26.25l-46.5 37.74L15.1 383.1C7.251 383.1 0 391.3 0 400v95.98C0 504.8 7.251 512 15.1 512h346.1c22.03 0 43.92-7.188 61.7-20.27l135.1-99.52C577.5 379.1 581.3 354.1 568.2 336.3zM279.3 175C271.7 173.9 261.7 170.3 252.9 167.1L248 165.4C235.5 160.1 221.8 167.5 217.4 179.1s2.121 26.2 14.59 30.64l4.655 1.656c8.486 3.061 17.88 6.095 27.39 8.312V232c0 13.25 10.73 24 23.98 24s24-10.75 24-24V221.6c25.27-5.723 42.88-21.85 46.1-45.72c8.688-50.05-38.89-63.66-64.42-70.95L288.4 103.1C262.1 95.64 263.6 92.42 264.3 88.31c1.156-6.766 15.3-10.06 32.21-7.391c4.938 .7813 11.37 2.547 19.65 5.422c12.53 4.281 26.21-2.312 30.52-14.84s-2.309-26.19-14.84-30.53c-7.602-2.627-13.92-4.358-19.82-5.721V24c0-13.25-10.75-24-24-24s-23.98 10.75-23.98 24v10.52C238.8 40.23 221.1 56.25 216.1 80.13C208.4 129.6 256.7 143.8 274.9 149.2l6.498 1.875c31.66 9.062 31.15 11.89 30.34 16.64C310.6 174.5 296.5 177.8 279.3 175z" id="mainIconPathAttribute" fill="#ffffff"></path></svg>
            {selected.benefits.title}</h2>
          <p className=' text-sm lg:text-lg pt-4'> {selected.benefits?.desc}</p>
          <p className=' text-sm lg:text-lg pt-4'> <ul className='list-disc pl-6'>
            {
              selected.benefits.benefits.map((benefit, i) => <li key={"benefit" + i} className='text-white'>{benefit}</li>)
            }
          </ul>

          </p>
          </div>
}
          
          {(selected.id == 'eveIT services') ? '' : 
          <div className='w-full lg:w-[30%] '>
        <div className='w-full flex items-right justify-end my-2'>
          <Image src={selected?.benefits?.image} alt="" width="300" height="300" />
</div>
        </div>
}
        
        </div>

        {/*------------------------------- benfits image---------------------------------------------*/}
        {/* {(selected.id == 'eveIT services') ? '' : 
        <div className='w-full lg:w-full  my-6'>
          <Image src={selected?.benefits?.image} alt="" width="400" height="400" />

        </div> 
}*/}
        {/*-------------------------------Requirements ---------------------------------------------*/}
        {(selected.id == 'eveIT services') ? '' :
          <div id="requirements" className='w-full   text-left text-white  bg-[#00314C] mt-6  p-6 lg:px-10'>
            <h2 className='text-xl md:text-4xl font-semibold md:flex gap-2'><svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" fill="currentColor" className="bi bi-file-earmark-text-fill" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM4.5 9a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1h-4z" id="mainIconPathAttribute" fill="#ffffff"></path> </svg>
              {selected.requirements.title}</h2>
            <p className=' text-sm lg:text-lg pt-4'>{selected.requirements.description} </p>

            <p className=' text-sm lg:text-lg pt-4'> <ul className='list-disc pl-6'>
              {
                selected.requirements.documents.map((documents, i) => <li key={"documents" + i} className='text-white'>{documents}</li>)
              }


            </ul> </p>
            <p className=' text-sm lg:text-lg pt-4'>{selected.requirements?.desc2} </p>

            <p className=' text-sm lg:text-lg pt-4'> <ul className='list-disc pl-6'>
              {
                selected?.requirements?.docu2?.map((documents, i) => <li key={"documents" + i} className='text-white'>{documents}</li>)
              }


            </ul> </p>
            <p className=' text-sm lg:text-lg pt-4'>{selected.requirements?.desc3} </p>

            <p className=' text-sm lg:text-lg pt-4'> <ul className='list-disc pl-6'>
              {
                selected?.requirements?.docu3?.map((documents, i) => <li key={"documents" + i} className='text-white'>{documents}</li>)
              }


            </ul> </p>
            <p className=' text-sm lg:text-lg pt-4 font-semibold underline'>{selected.requirements?.desc4} </p>

            <p className=' text-sm lg:text-lg pt-4'> <ul className='list-disc pl-6'>
              {
                selected?.requirements?.docu4?.map((documents, i) => <li key={"documents" + i} className='text-white'>{documents}</li>)
              }


            </ul> </p>
          </div>
        }

        {/*-------------------------------Why ention ---------------------------------------------*/}

        <div id="why_ention" className='w-full  text-left text-white bg-[#003B58]  p-6 lg:px-10 mt-6'>
          <h2 className='flex text-xl md:text-4xl gap-2'><svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" fill="currentColor" className="bi bi-patch-question-fill" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M5.933.87a2.89 2.89 0 0 1 4.134 0l.622.638.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636zM7.002 11a1 1 0 1 0 2 0 1 1 0 0 0-2 0zm1.602-2.027c.04-.534.198-.815.846-1.26.674-.475 1.05-1.09 1.05-1.986 0-1.325-.92-2.227-2.262-2.227-1.02 0-1.792.492-2.1 1.29A1.71 1.71 0 0 0 6 5.48c0 .393.203.64.545.64.272 0 .455-.147.564-.51.158-.592.525-.915 1.074-.915.61 0 1.03.446 1.03 1.084 0 .563-.208.885-.822 1.325-.619.433-.926.914-.926 1.64v.111c0 .428.208.745.585.745.336 0 .504-.24.554-.627z" id="mainIconPathAttribute" fill="#ffffff"></path> </svg>
            {(selected.id == 'eveIT services') ? 'Why eveIT' : 'Why Ention'}</h2>
          <p className=' text-sm lg:text-lg pt-4'>  {selected.whyention?.description}
          </p>
          <p className=' text-sm lg:text-lg pt-4'> <ul className='list-disc pl-6'>
            {
              selected.whyention?.point?.map((benefit, i) => <li key={"benefit" + i} className='text-white'>{benefit}</li>)
            }
          </ul>

          </p>
        </div>

        {/*-------------------------------Deliverable ---------------------------------------------*/}
        {(selected.id == 'eveIT services') ? '' :
          <div id="Deliverable" className='w-full  text-left text-white bg-[#003B58]  p-6 lg:px-10 mt-4'>
            <h2 className='text-xl md:text-4xl font-semibold flex gap-2 '><svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" fill="currentColor" className="bi bi-box" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5 8.186 1.113zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z" id="mainIconPathAttribute" stroke="#ffffff" fill="#ffffff" /> </svg>

              Our Deliverable </h2>
            <p className=' text-sm lg:text-lg pt-4'>{selected?.deliverable?.description}
            </p>
            <p className=' text-sm lg:text-lg pt-4'> <ul className='list-disc pl-6'>
              {
                selected?.deliverable?.documents?.map((documents, i) => <li key={"documents" + i} className='text-white'>{documents}</li>)
              }


            </ul> </p>
          </div>
        }
        {/*-------------------------------Faq ---------------------------------------------*/}

        {/* <div id="faq" className='w-full text-left text-white bg-[#00526F] mt-4  p-6 lg:px-10'>
          <h2 className='text-xl md:text-4xl font-semibold'>FAQs</h2>
          <div className='flex items-left justify-start'>
            <section className='info pt-6 text-sm lg:text-lg '>
              {questions.map((question) => (
                <SingleQuestion key={question.id} {...question} />
              ))}
            </section>
          </div>
        </div>
              */}
      </div>


    </div>

    {/*-------------------------------social media icon ---------------------------------------------*/}

    <div className='w-[70%] mx-auto  mt-10 '>
      <div className='ml-14 md:ml-44 lg:ml-32 '>
        <Link href={selected.faq.pdf} target="_blank" download> <button className=' text-center bg-[#007E9E] text-white  px-4  text-sm md:text-lg py-2 rounded-md flex gap-2 transform hover:bg-primary hover:border-primary hover:scale-105  transition-all duration-300 ease-in-out'>Pdf To Download <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="IconChangeColor" height="20" width="20"> <g> <path fill="none" d="M0 0h24v24H0z" id="mainIconPathAttribute" stroke="#ffffff" filter="url(#shadow)" stroke-width="0"></path> <path d="M4 19h16v-7h2v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-8h2v7zM14 9h5l-7 7-7-7h5V3h4v6z" id="mainIconPathAttribute" stroke="#ffffff" fill="#ffffff"></path> </g> </svg>

        </button></Link>

        <div className="flex pt-2 pl-4" >
          <Link href="https://web.whatsapp.com/send?text= Please Visit  "
            rel="nofollow noopener" target="_blank"
            className="share-icon">    <RiWhatsappFill className="text-white mr-4 " size={30} /> </Link>



          <Link href="https://www.linkedin.com/sharing/share-offsite/?url=${url}" target="_blank" rel="noopener noreferrer"><FaLinkedinIn className='text-white mr-4 ' size={30} /></Link>
          <Link href="mailto:manshi.eveit@gmail.com?body=pdflink&subject=PDF" target="_blank" rel="noopener noreferrer"><HiMail className='text-white mt-1' size={30} /></Link>
        </div>
      </div>

    </div>

    {/*-------------------------------Service list ---------------------------------------------*/}
    <div className='bg-[#002541] w-full max-h-fit px-4 md:px-10  lg:px-24 mt-10 py-10 mb-20 '>
      <div className=' lg:flex w-full'>
        <div className='w-full lg:w-[80%] flex flex-wrap '>
          <div className='w-full flex flex-wrap  gap-4 lg:gap-8  px-0 '>
            <div className='w-[45%] md:w-[30%]'>
              <h5 className='text-md lg:text-xl underline underline-offset-8 decoration-4 decoration-[#007E9E] uppercase'><Link href="/service/start-a-business" >Start a business</Link></h5>

              <ul className='pt-2 text-sm lg:text-lg'>
                <li><Link href="/service/start-a-business/?category=sole-proprietorship" >Sole proprietorship</Link></li>
                <li><Link href="/service/start-a-business/?category=partnership-firm" >Partnership firm</Link></li>
                <li><Link href="/service/start-a-business/?category=opc" >OPC</Link></li>
                <li><Link href="/service/start-a-business/?category=llp" >LLP</Link></li>
                <li><Link href="/service/start-a-business/?category=private-limited" >Private limited company</Link></li>
                <li><Link href="/service/start-a-business/?category=public-limited" >Public limited company</Link></li>
                <li><Link href="/service/start-a-business/?category=producer-company" >producer company</Link></li>
                <li><Link href="/service/start-a-business/?category=nidhi-company" >Nidhi company</Link></li>
              </ul>

            </div>
            <div className='w-[50%] md:w-[25%] lg:w-[25%]'>
              <h5 className='text-md lg:text-xl underline underline-offset-8 decoration-4 decoration-[#007E9E]'><Link href="/service/tax-complain" >TAX  & COMPLAINCES </Link></h5>
              <ul className='pt-2 text-sm lg:text-lg'>
                <li><Link href="/service/tax-complain/?category=pan-tan" >PAN and TAN</Link></li>
                <li><Link href="/service/tax-complain/?category=gst-registration" >GST registration</Link></li>
                <li><Link href="/service/tax-complain/?category=gst-return" >GST return</Link></li>
                <li><Link href="/service/tax-complain/?category=itr" >ITR</Link></li>
                <li><Link href="/service/tax-complain/?category=tds-return" >TDS return</Link></li>

              </ul>
            </div>
            <div className='w-[70%] md:w-[40%] lg:w-[35%]'>
              <h5 className='text-md lg:text-xl underline underline-offset-8 decoration-4 decoration-[#007E9E]'><Link href="/service/certification-registration" >CERTIFICATION & REGISTRATION</Link></h5>
              <ul className='pt-2 text-sm lg:text-lg'>
                <li><Link href="/service/certification-registration/?category=startup-registration" >Startup registration</Link></li>
                <li><Link href="/service/certification-registration/?category=msme" >MSME registration</Link></li>
                <li><Link href="/service/certification-registration/?category=fssai" >FSSAI registration</Link></li>
                <li><Link href="/service/certification-registration/?category=bis" >BIS registration</Link></li>
                <li><Link href="/service/certification-registration/?category=iso-certification" >ISO certification</Link></li>

              </ul>
            </div>


          </div>
          <div className='w-full flex flex-wrap lg:flex-inline gap-4 lg:gap-8  pt-6 lg:pt-20 px-0'>
            <div className='w-[50%] md:w-[30%]'>
              <h5 className='text-md lg:text-xl underline underline-offset-8 decoration-4 decoration-[#007E9E] uppercase'> <Link href="/service/conversion" > Conversion </Link></h5>
              <ul className='pt-2 text-sm lg:text-lg'>
                <li><Link href="/service/conversion/?category=conversion-proprietorship" > Conversion of proprietorship into company</Link></li>
                <li><Link href="/service/conversion/?category=conversion-partnership" > Conversion of partnership firm into company</Link></li>
                <li><Link href="/service/conversion/?category=conversion-opc" > Conversion of OPC into company</Link></li>
                <li><Link href="/service/conversion/?category=conversion-llp" > Conversion of LLP into company</Link></li>


              </ul>
            </div>
            <div className='w-[40%] md:w-[25%] lg:w-[25%]'>
              <h5 className='text-md lg:text-xl underline underline-offset-8 decoration-4 decoration-[#007E9E]'><Link href="/service/ngo-service" >NGO SERVICES </Link></h5>
              <ul className='pt-2 text-sm lg:text-lg'>
                <li><Link href="/service/ngo-service/?category=society-registration" >Society registration</Link></li>
                <li><Link href="/service/ngo-service/?category=trust-registration" >Trust registration</Link></li>
                <li><Link href="/service/ngo-service/?category=sec-company" >Sec 8 company registration</Link></li>
                <li><Link href="/service/ngo-service/?category=darpan-registration" >Darpan registration</Link></li>
                <li><Link href="/service/ngo-service/?category=sec-12a" >Sec 12A and Sec80G registration</Link></li>

              </ul>
            </div>
            <div className='w-[70%] md:w-[40%] lg:w-[35%]'>
              <h5 className='text-md lg:text-xl underline underline-offset-8 decoration-4 decoration-[#007E9E]'><Link href="/service/cert-register" > CERTIFICATION & REGISTRATION </Link></h5>
              <ul className='pt-2 text-sm lg:text-lg'>
                <li><Link href="/service/cert-register/?category=shop-establishment" >Shop and establishment registration</Link></li>
                <li><Link href="/service/cert-register/?category=pf-registration" >PF registration</Link></li>
                <li><Link href="/service/cert-register/?category=esi-registration" >ESI registration</Link></li>
                <li><Link href="/service/cert-register/?category=iec" >IEC(import export code)</Link></li>


              </ul>
            </div>


          </div>
        </div>
        <div className='w-full lg:w-[20%]'>

          {showModal1 ?
            <>
              <div className='w-full  flex  flex-row lg:flex-col  items-left justify-start pt-10 lg:pt-0'>
                <div className='w-[70%] md:w-[33%]  lg:w-full'>
                  <h5 className='text-md lg:text-xl underline underline-offset-8 decoration-4 decoration-[#007E9E] uppercase'><Link href="/service/trademark" >Trademark </Link></h5>
                  <ul className='pt-2 text-sm lg:text-lg'>
                    <li><Link href='/service/trademark/?category=trademark-registration'>Trademark Registration</Link></li>
                    <li><Link href='/service/trademark/?category=reply-objection'>Reply to Objection</Link></li>
                    <li><Link href='/service/trademark/?category=trademark-renewal'>Trademark Renewal</Link></li>
                    <li><Link href='/service/trademark/?category=assignment-trademark'> Assignment of Trademark </Link></li>
                    <li><Link href='/service/trademark/?category=trademark-watch'> Trademark Watch </Link></li>

                  </ul>
                </div>
                <div className='w-[70%] md:w-[40%] lg:w-full pt-0 lg:pt-40 pl-4 lg:pl-0'>
                  <h5 className='text-md lg:text-xl underline underline-offset-8 decoration-4 decoration-[#007E9E] uppercase'><Link href="/service/patent-copyright" >Patent & Copy Right </Link></h5>
                  <ul className='pt-2 text-sm lg:text-lg'>

                    <li> <Link href='/service/patent-copyright/?category=patent-search'>Patent Search </Link> </li>
                    <li> <Link href='/service/patent-copyright/?category=patent-provisional'>Patent Provisional Application </Link> </li>
                    <li> <Link href='/service/patent-copyright/?category=patent-permanent'>Patent Permanent Application</Link> </li>
                    <li> <Link href='/service/patent-copyright/?category=copy-right'>Copy Right Registration</Link> </li>


                  </ul>
                </div>

              </div>
            </> : (
              <>
                <div className='w-full flex items-center justify-center pl-0 lg:pl-0 py-10 lg:py-60'>
                  <button className='text-md lg:text-xl underline underline-offset-8 decoration-4 decoration-[#007E9E]' onClick={handleClick1}>See all the service</button>

                </div>
              </>
            )
          }

          {/*} <div className='w-full  flex  flex-col items-left justify-start pt-10 lg:pt-0'>
       <div className='w-[70%] md:w-[40%] lg:w-full'>
     <h5 className='text-md lg:text-xl underline underline-offset-8 decoration-4 decoration-[#007E9E] uppercase'><Link href="/service/trademark" >Trademark </Link></h5>
     <ul className='pt-2 text-sm lg:text-lg'>
       <li><Link href='/service/trademark/?category=trademark-registration'>Trademark Registration</Link></li>
       <li><Link href='/service/trademark/?category=reply-objection'>Reply to Objection</Link></li>
       <li><Link href='/service/trademark/?category=trademark-renewal'>Trademark Renewal</Link></li>
       <li><Link href='/service/trademark/?category=assignment-trademark'> Assignment of Trademark </Link></li>
       <li><Link href='/service/trademark/?category=trademark-watch'> Trademark Watch </Link></li>

     </ul>
   </div>
   <div className='w-[70%] md:w-[40%] lg:w-full pt-10 lg:pt-40'>
     <h5 className='text-md lg:text-xl underline underline-offset-8 decoration-4 decoration-[#007E9E] uppercase'><Link href="/service/patent-copyright" >Patent & Copy Right </Link></h5>
     <ul className='pt-2 text-sm lg:text-lg'>
      
     <li> <Link href='/service/patent-copyright/?category=patent-search'>Patent Search </Link> </li>
     <li> <Link href='/service/patent-copyright/?category=patent-provisional'>Patent Provisional Application </Link> </li>
     <li> <Link href='/service/patent-copyright/?category=patent-permanent'>Patent Permanent Application</Link> </li>
     <li> <Link href='/service/patent-copyright/?category=copy-right'>Copy Right Registration</Link> </li>


     </ul>
   </div>

      </div>*/}

        </div>
      </div>
    </div>
    <Footer />
  </main>)
}

export default ServiceTemplate
