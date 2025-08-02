import React, { useState, useEffect, useRef } from 'react'
import { Navbar, Footer, hooks } from 'components'
import Link from 'next/link'
import { AiOutlineInfoCircle } from "react-icons/ai";
import Jobform from "../components/Applyform"
import { IoClose } from "react-icons/io5"

const Career = () => {
    const [currTab, setCurrTab] = useState(0)
    const div = useRef()

    // useEffect(() => {
    //   div?.current?.scrollIntoView()
    // }, [currTab])


    const jobs = [
        { title: 'Technical Staff', category: 'Technology', available: 'true' },
        { title: 'Developer', category: 'Technology', available: 'false' },
        { title: 'Sales Staff', category: 'Sales', available: 'false' },
        { title: 'Semi Qualifed CA/CS', category: 'Finance And Accounting', available: 'false' },
        { title: 'Makreting Head', category: 'Marketing', available: 'false' },
        { title: 'Marketing analyst', category: 'Marketing', available: 'false' },
        { title: 'Financial analyst', category: 'Finance And Accounting', available: 'false' },
    ]

    // const news = [
    //     'Sit laborum labore commodo cillum dolore fugiat nulla do fugiat velit exercitation Lorem enim.',
    //     'Occaecat incididunt sunt incididunt ipsum adipisicing sit pariatur eiusmod est officia do ipsum deserunt.',
    //     'Fugiat eiusmod qui laboris tempor dolor cillum sit.',
    //     'Lorem nostrud ea pariatur aliqua aliqua ut eiusmod velit.',
    //     'Magna minim in exercitation nisi labore labore deserunt cillum ullamco ut veniam sit dolore qui.',
    //     'Quis occaecat Lorem excepteur duis ut consequat duis reprehenderit aute consectetur ea.',
    //     'Sit laborum labore commodo cillum dolore fugiat nulla do fugiat velit exercitation Lorem enim.',
    //     'Occaecat incididunt sunt incididunt ipsum adipisicing sit pariatur eiusmod est officia do ipsum deserunt.',
    //     'Fugiat eiusmod qui laboris tempor dolor cillum sit.',
    //     'Lorem nostrud ea pariatur aliqua aliqua ut eiusmod velit.',
    //     'Magna minim in exercitation nisi labore labore deserunt cillum ullamco ut veniam sit dolore qui.',
    //     'Quis occaecat Lorem excepteur duis ut consequat duis reprehenderit aute consectetur ea.,'
    // ]
    const [showModal, setShowModal] = useState(false);
    return (
        <main className={`main `}>
            <Navbar />
            <div className="w-full pt-10 md:pt-28 pb-10 md:pb-14 text-center text-white">
                <h1 className="text-5xl md:text-8xl font-semibold mb-5"> Look For Job </h1>
                <p className="max-w-[60%] md:max-w-[40%] mx-auto text-sm md:text-xl">Looking for a job, a collaborative team, and limitless prospects for advancement? You&#39;ve arrived to the right place.</p>
            </div>

            <div ref={div} className="px-10 lg:px-24 pt-0 md:pt-14 text-white w-full mb-10 lg:mb-20">
                <div className="flex flex-col lg:flex-row w-full">
                    <div className="px-0 md:px-10 w-full lg:w-[70%]">
                        <h2 className="text-4xl font-semibold mb-12">Open Positions</h2>
                        {/* Tabs */}
                        <div className="flex flex-row underline-offset-8" onClick={() => div?.current?.scrollIntoView()}>
                            <h4 onClick={() => setCurrTab(0)} className={`${currTab === 0 && 'underline'} text-lg md:text-xl cursor-pointer mr-4 md:mr-10 lg:mr-14`}> All </h4>
                            <h4 onClick={() => setCurrTab(1)} className={`${currTab === 1 && 'underline'} text-lg md:text-xl cursor-pointer mx-2 md:mr-10 lg:mr-14`}> Finance And Accounting </h4>
                            <h4 onClick={() => setCurrTab(2)} className={`${currTab === 2 && 'underline'} text-lg md:text-xl cursor-pointer mx-4 md:mr-10 lg:mr-14`}> Marketing </h4>
                            <h4 onClick={() => setCurrTab(3)} className={`${currTab === 3 && 'underline'} text-lg md:text-xl cursor-pointer ml-4 md:mr-10 lg:mr-14`}> Sales </h4>
                        </div>

                        <div className="jobs mt-14">
                            {
                                jobs.filter(job => currTab === 1 ? job.category === 'Finance And Accounting' :
                                    currTab === 2 ? job.category === 'Marketing' : currTab === 3 ? job.category === 'Sales' : true)
                                    .map((job, i) => <>
                                        <div className="text-white mt-5" key={'job-' + i}>
                                            <div className='flex flex-row gap-6'><h2 className="text-xl font-semibold"> {job.title}  </h2>
                                                <p className='text-sm text-gray-500'>{job.available == 'true' ? <span className='flex  '><AiOutlineInfoCircle className='mt-1 mr-2' />Available</span>
                                                    : <span className='flex  '><AiOutlineInfoCircle className='mt-1 mr-2' />Not Available</span>
                                                }</p>
                                            </div>
                                            <div className="flex justify-between mt-4 mb-2">
                                                <p className="text-gray-200"> {job.category} </p>
                                                {job.available == 'true' ? <button className='px-5 py-2 rounded bg-[#007E9E] transform hover:bg-primary hover:border-primary hover:scale-105  transition-all duration-300 ease-in-out' > Apply Now </button>
                                                    :
                                                   <button className='px-5 py-2 rounded bg-gray-500 transform hover:bg-primary hover:border-primary hover:scale-105  transition-all duration-300 ease-in-out'> Apply Now </button>

                                                }
                                            </div>
                                            <hr className='' style={{ borderTop: '1px solid gray' }} />
                                        </div>
                                    </>)
                            }
                        </div>
                    </div>
                 


                    {/* <div className="hidden lg:block w-full lg:w-[30%] pt-10 md:pt-20 lg:pt-0 ml-0 lg:ml-6">
                    <div className="py-4 px-4 text-white rounded bg-[#007E9E] min-h-[50vh] max-h-[55vh] w-full md:w-9/12 mx-0 md:mx-auto lg:ml-auto overflow-hidden">
                        <h2 className="text-2xl font-semibold">Open Position News</h2>
                        <h3 className={styles.news + " mt-3"}>
                            Marketing <span className="rounded-[50%] ml-1 mr-2 font-semibold bg-white text-gray-800 px-3 text-sm"> News </span> opening of job |
                            Sales <span className="rounded-[50%] ml-1 mr-2 font-semibold bg-white text-gray-800 px-3 text-sm"> News </span> opening of job |
                            Technical <span className="rounded-[50%] ml-1 mr-2 font-semibold bg-white text-gray-800 px-3 text-sm"> News </span> opening of job 
                        </h3>
                        <div className="my-5 h-[50%] overflow-hidden">
                            <ul className={"  list-none h-[50%] overflow-hidden"}>
                                {
                                    news.map((news, i) => <>
                                        <li className="truncate mb-2" title={news} key={'news-' + (i + 1)}> {i + 1}.  {news} </li>
                                    </>)
                                }
                            </ul>
                        </div>

                    </div>

                </div> */}
                </div>
            </div>
            {/* --------------------------Popup Box Form----------------------------------- */}
            {showModal ? (
                <>
                    <div className="fixed inset-0 top-10 z-[1200] flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
                        <div className="relative my-6 mx-auto w-auto max-w-3xl">
                            <div className="relative flex w-full flex-col rounded-lg border-0 bg-[#007E9E] shadow-lg outline-none focus:outline-none">
                                <div className="relative items-start justify-between rounded px-8 py-4">
                                    <h3 className="text-center text-2xl font-semibold text-white">
                                        CONNECT US
                                    </h3>

                                    <IoClose
                                        className="absolute top-3 right-3 cursor-pointer text-3xl"
                                        onClick={() => setShowModal(false)}
                                    />

                                    <div className="mt-6">
                                        <Jobform />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
            <div className="fixed inset-0 z-20 bg-black opacity-80"></div>
        </>
    ) : null
}
<Footer />
    </main >
  )
}

export default Career
