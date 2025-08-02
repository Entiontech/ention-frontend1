import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';

import { grpahCMSImageLoader } from '../util';

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      // The original code had getSimilarPosts(categories, slug).then((result) => { ... });
      // This function is no longer imported, so this block will cause an error.
      // Assuming the intent was to remove the service calls entirely or replace them.
      // For now, I'm removing the call to getSimilarPosts as it's no longer available.
      // If the user wants to re-add it, they need to re-import it or provide a new service.
      // setRelatedPosts([]); // Placeholder for now
    } else {
      // The original code had getRecentPosts().then((result) => { ... });
      // This function is no longer imported, so this block will cause an error.
      // Assuming the intent was to remove the service calls entirely or replace them.
      // For now, I'm removing the call to getRecentPosts as it's no longer available.
      // If the user wants to re-add it, they need to re-import it or provide a new service.
      // setRelatedPosts([]); // Placeholder for now
    }
  }, [slug]);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">{slug ? 'Related Posts' : 'Recent Posts'}</h3>
      {relatedPosts.map((post, index) => (
        <div key={index} className="flex items-center w-full mb-4">
          <div className="w-16 flex-none">
            <Image
              loader={grpahCMSImageLoader}
              alt={post.title}
             width={60}
             height={60}
              unoptimized
              className="align-middle rounded-full"
              src={post.featuredImage.url}
            />
          </div>
          <div className="flex-grow ml-4">
            <p className="text-gray-500 font-xs">{moment(post.createdAt).format('MMM DD, YYYY')}</p>
            <Link legacyBehavior href={`/blogs/post/${post.slug}`} className="text-md" key={index}>{post.title}</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
