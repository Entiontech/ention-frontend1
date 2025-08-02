import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const allProducts = [];

const categories = ["All", "Laptops", "Accessories", "Desktops", "Monitors"];
const brands = ["All", "Ention"];
const sortOptions = [
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Newest", value: "newest" },
];

export default function ProductListPage() {
  const [category, setCategory] = useState("All");
  const [brand, setBrand] = useState("All");
  const [sort, setSort] = useState("price-asc");
  const [page, setPage] = useState(1);
  const perPage = 6;

  let filtered = allProducts.filter(p => (category === "All" || p.category === category) && (brand === "All" || p.brand === brand));
  if (sort === "price-asc") filtered = filtered.sort((a, b) => a.price - b.price);
  if (sort === "price-desc") filtered = filtered.sort((a, b) => b.price - a.price);
  if (sort === "newest") filtered = filtered.sort((a, b) => b.id - a.id);

  const paginated = filtered.slice((page - 1) * perPage, page * perPage);
  const totalPages = Math.ceil(filtered.length / perPage);

  return (
    <div className="min-h-screen bg-[#f7fafc] py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-[#000f29] mb-8 text-center">All Products</h1>
        <div className="flex flex-col md:flex-row gap-6 mb-8 items-center justify-between">
          <div className="flex gap-4 flex-wrap">
            <select value={category} onChange={e => setCategory(e.target.value)} className="rounded px-4 py-2 border border-gray-300">
              {categories.map(c => <option key={c}>{c}</option>)}
            </select>
            <select value={brand} onChange={e => setBrand(e.target.value)} className="rounded px-4 py-2 border border-gray-300">
              {brands.map(b => <option key={b}>{b}</option>)}
            </select>
            <select value={sort} onChange={e => setSort(e.target.value)} className="rounded px-4 py-2 border border-gray-300">
              {sortOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {paginated.map(product => (
            <Link key={product.id} href={`/ecommerce/product/e${product.id}`} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col hover:scale-105 transition-transform duration-200 border border-[#e5e7eb] cursor-pointer">
              <Image src={product.image} alt={product.name} width={400} height={192} className="w-full h-48 object-cover" />
              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-lg font-semibold mb-2 text-[#000f29]">{product.name}</h3>
                <p className="text-[#007e9e] text-xl font-bold mb-4">₹{product.price.toLocaleString()}</p>
                <Link href={`/ecommerce/product/e${product.id}`} legacyBehavior>
                  <a className="mt-auto bg-[#007e9e] text-white rounded-3xl py-2 px-6 hover:bg-[#01E9FE] hover:text-[#000f29] transition-all text-center">Buy Now</a>
                </Link>
              </div>
            </Link>
          ))}
        </div>
        {/* Pagination */}
        <div className="flex justify-center mt-10 gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              className={`w-8 h-8 rounded-full border-2 ${page === i + 1 ? 'bg-[#007e9e] border-[#007e9e] text-white' : 'bg-white border-gray-300 text-[#007e9e]'} font-bold transition`}
              onClick={() => setPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
} 