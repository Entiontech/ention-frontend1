import React from "react"
import moment from "moment"
import Image from "next/image"
import Link from "next/link"
import {BsArrowUpRight} from 'react-icons/bs'
const PopularPostCard = ({ post }) => {
  return(
    <>
    <div className="">
      <Link legacyBehavior href={`/blogs/post/${post.slug}`}>
       
       <Image
         unoptimized
         alt={post?.author?.name}
         width={800}
         height={400}
         className="rounded w-full h-60 md:h-96"
         src={post.featuredImage.url}
       />
   
   </Link>
   <section className='responsive sticky  bg-white p-2 md:p-6 px-4 md:px-6  mx-1 w-[85%] border border-[#007E9E] float-right  ' style={{ zindex: "-1", marginTop: "-80px", textSizeAdjust: "80%" }}>
                <h2 className='text-lg md:text-3xl font-bold '>{post.title}</h2>
                <p className='py-3 text-sm md:text-lg' >{post.excerpt.slice(0,150)}</p>
                <div className='md:flex gap-6'><p className=" text-[#007E9E] font-medium ">{post?.author?.name}</p>
   
   <p className="text-[#007E9E] mb-4 pt-1 font-semibold text-sm ">{moment(post.createdAt).format('MMM DD, YYYY')}</p>

   </div> 
    
   </section>
   </div>
    
    </>
  )
}
export default PopularPostCard;