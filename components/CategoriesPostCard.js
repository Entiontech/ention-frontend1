import React from 'react';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';
import {BsArrowUpRight} from 'react-icons/bs'

const CategoriesPostCard = ({ post }) => (
  <div className="relative h-max mt-8 mx-2">
   
   
    <Link legacyBehavior href={`/blogs/post/${post.slug}`}>
       
       <Image
         unoptimized
      
         width={500}
         height={500}
         className="rounded h-80"
         src={post.featuredImage.url}
       />
   
   </Link>
     
      <div className="w-full flex pt-4">
   <h3 className="w-[90%] mb-4 text-lg md:text-2xl md:mr-4 md:text-4xl line-clamp-2 md:line-clamp-none text-white">{post.title}</h3>
   <Link legacyBehavior href={`/blogs/post/${post.slug}`}>
    
    <p className='w-[5%] right text-xl  text-white'><BsArrowUpRight /></p>
</Link>
</div>
      <p className="text-white mb-4 text-shadow font-semibold text-md text-left">{post.excerpt.slice(0, 150)}</p>
      <div className='flex gap-6'><p className=" text-[#007E9E] font-medium ">{post?.author?.name}</p>
   
   <p className="text-[#007E9E] mb-4 pt-1 font-semibold text-sm ">{moment(post.createdAt).format('MMM DD, YYYY')}</p>
   
      </div> 
    </div>


);

export default CategoriesPostCard;
