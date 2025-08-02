import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // The original code had getCategories() here, but getCategories was removed from imports.
    // Assuming the intent was to remove this line or that getCategories is no longer needed.
    // For now, removing the line as per the edit hint.
    // getCategories().then((newCategories) => {
    //   setCategories(newCategories);
    // });
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">Categories</h3>
      {categories.map((category, index) => (
        <Link legacyBehavior key={index} href={`/blogs/category/${category.slug}`}>
          <span className={`cursor-pointer block ${(index === categories.length - 1) ? 'border-b-0' : 'border-b'} pb-3 mb-3`}>{category.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;