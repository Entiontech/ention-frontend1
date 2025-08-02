import React from 'react';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';
import { grpahCMSImageLoader } from '../util';

const PostCard = ({ post }) => (
  <div className="text-gray-200 border border-teal-600 bg-teal-600/10 shadow-lg shadow-gray-700  rounded-lg p-0 lg:p-8 pb-12 mb-8">
    <div className="relative shadow-md flex justify-center mx-auto w-full md:w-5/6 h-60 md:h-96 mb-6">
      <Image
        unoptimized
        loader={grpahCMSImageLoader}
        alt={post.title}
        width={800}
        height={500}
        className="shadow-lg rounded-t-lg lg:rounded-lg"
        
        src={post.featuredImage.url}
      />
    </div>
    {/* <div className="relative overflow-hidden shadow-md pb-80 mb-6">
      <img src={post.featuredImage.url} alt="" className="object-top absolute h-80 w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg" />
    </div> */}

    <h1 className="transition duration-700 md:w-5/6 text-center mx-auto mb-8 cursor-pointer hover:text-[#007E9E] text-3xl font-semibold">
      <Link legacyBehavior href={`/blogs/post/${post.slug}`}>{post.title}</Link>
    </h1>
    <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
      <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
        {/* <Image
          unoptimized
          loader={grpahCMSImageLoader}
          alt={post.author.name}
          width={45}
        height={45}
          className="align-middle rounded-full"
          src={post.author.photo.url}
        /> */}
        <p className="inline align-middle text-white ml-2 font-medium text-lg">{post?.author?.name}</p>
      </div>
      <div className="font-medium text-white">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span className="align-middle text-white">{moment(post.createdAt).format('MMM DD, YYYY')}</span>
      </div>
    </div>
    <p className="text-justify text-lg  font-normal px-4 lg:px-20 mb-8">
      {post.excerpt}
    </p>
    <div className="text-center">
      <Link legacyBehavior href={`/blogs/post/${post.slug}`}>
        <p className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-[#007E9E] text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">Continue Reading</p>
      </Link>
    </div>
  </div>
);

export default PostCard;
