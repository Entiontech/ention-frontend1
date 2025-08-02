import React from "react"
import moment from "moment"
import Image from "next/image"
import Link from "next/link"
import {BsArrowUpRight} from 'react-icons/bs'
const FeaturedPostCard = ({ post }) => {
  return(
  <div className=" mt-4 mx-2 lg:mt-12 ">

    <div className="my-4 w-full py-2 text-white md:my-2  ">
   
      <Link legacyBehavior href={`/blogs/post/${post.slug}`}>
       
       <Image
         unoptimized
        //  alt={post.author.name}
         width={500}
         height={400}
         className="rounded h-60"
         src={post.featuredImage.url}
       />
   
   </Link>
   
   <div className="w-full flex pt-4">
   <h3 className="w-[90%] mb-4 text-lg md:text-2xl  md:text-4xl line-clamp-2 md:line-clamp-none">{post.title}</h3>
   <Link legacyBehavior href={`/blogs/post/${post.slug}`}>
    
    <p className='w-[5%] right text-xl  text-white'><BsArrowUpRight /></p>
</Link>
</div>
   <p className="mb-4 text-sm md:text-lg line-clamp-2 md:line-clamp-none">{post.excerpt.slice(0, 150)}</p> 
    

     {/*} <div className="mt-4 flex items-center">
        <Image
          unoptimized
          alt={post.author.name}
          width={45}
          height={45}
          className="rounded-full align-middle drop-shadow-lg"
          src={post.author.photo.url}
        />
        <div>*/}
           <div className='flex gap-6'><p className=" text-[#007E9E] font-medium ">{post?.author?.name}</p>
   
   <p className="text-[#007E9E] mb-0 md:mb-4 pt-1 font-semibold text-xs">{moment(post.createdAt).format('MMM DD, YYYY')}</p>
   </div> 
          
        </div>
      </div>


)
  }
export default FeaturedPostCard
