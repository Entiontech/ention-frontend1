import React from 'react';
import Image from 'next/image';

import { grpahCMSImageLoader } from '../util';

const Author = ({ author }) => (
  <div className="text-center mt-20 mb-8 p-10 relative rounded-lg bg-gray-600 bg-opacity-50">
    <div className="flex items-center justify-center">
      {/* <Image
        unoptimized
        loader={grpahCMSImageLoader}
        alt={author?.name}
        height={45}
        width={45}
        className="align-middle rounded-full"
        src={author.photo.url}
      /> */}
    </div>
    <h3 className="text-white mt-4 mb-4 text-xl font-bold">{author?.name}</h3>
    <p className="text-white mb-2 text-ls">{author?.degree}</p>
    <p className="text-white text-ls text-left">{author?.bio}</p>
  </div>
);

export default Author;
