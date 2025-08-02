import React, { useState, useEffect } from 'react'
import {Navbar, Footer} from '../index'
import styles from 'styles/Products.module.css'
import Image from 'next/image'
import Link from 'next/link'
import accessories from 'assets/accessories.png'
import { useSearchParams } from 'next/navigation'
import { useLocalStorage } from 'react-use';
import { toast } from 'react-toastify'
import { useRouter } from "next/navigation";
import { FaCartArrowDown, FaCircle } from 'react-icons/fa'

const ProductCard = ({product, key}) => {
    product.rating = 3.4
    
    const [cart, setCart] = useLocalStorage('cart', []);
    const router = useRouter()
  
    const addToCart = (e, product) => {
        e.preventDefault()
        toast.dismiss()
        toast.loading('Adding to cart...', { type: 'info', theme: 'colored' })
        
        console.log(cart)
        console.log('product', product)
        
        const exist = cart.find((x) => x.slug === product.slug)
        if (!exist) {
            setCart([...cart, { slug: product.slug, quantity: 1 }])
            router.push('/cart')
        } else {
            router.push('/cart')
            toast.dismiss()
            // toast.error('Product already in cart', { theme: 'colored' })
        }
    }
   
    const handleCheckout = (e) => {
      e.preventDefault()
      setCart([...cart, {slug: product.slug, quantity: 1}])
      router.push('/checkout')
    }
    return <div className='w-full md:w-[40%] lg:w-1/3 py-5 lg:px-2 center mx-10 md:mx-4 lg:mx-0' key={key}>
        <div className="px-5 py-4 border border-[#007E9E] hover:bg-teal-600/10 cursor-pointer">
            
        <button onClick={(e) => addToCart(e, { 'slug': product.slug })} className="p-3 rounded-full bg-slate-600 ">
                        <FaCartArrowDown size={20} />
                    </button>
            <div className="w-[70%] mx-auto center mb-8">
                <Image src={product?.cover_image } width={300} height={300} alt="Product" />
            </div>
           
            <div className="">
                <h2 className="text-lg font-semibold mb-2"> {product?.title || 'DELL G6J41, 0G6J41, MGJN9, 43NY4, RWHHR, 450-AECO 65 W Adapter'} </h2>
            <div className="w-full flex justify-between">
                    <div>
                        <h2 className="text-lg font-semibold mb-2"> ₹{product?.pricing?.sellingPrice || 999} </h2>
                        
                        <h2 className="text-lg font-semibold mb-2">
                            {Array(Math.round(5)).fill(0).map((x, i) => <span key={`rating-${i}`} className={styles.star + ` bg-[${ i < product?.rating ? '#FBB040' : 'gray'}]`}></span> )}
                            <br/>{/*<p className='-mt-1'>4.0</p>*/}
                        </h2>
                    </div>
                    <Link href={product?.link || '/checkout'} className='mt-10'><button className='px-7 py-[6px] rounded bg-[#007E9E] hover:bg-[#007E9E]/50 font-semibold transform hover:bg-primary hover:border-primary hover:scale-105  transition-all duration-300 ease-in-out' onClick={e => handleCheckout(e)}>Buy Now</button></Link>
                </div>
               
            </div>
        </div>
    </div>
}

const Products = ({categories}) => {
    const params = useSearchParams();
    const [selected, setSelected] = useState(categories[0])
    //const [selected, setSelected] = useState(() => categories.find(c => c.title?.toLowerCase() == params.get('category')?.replace(/-/, ' ')) || categories[0])
    
  
      useEffect(()=>{
        setSelected(()=>
          categories.find(c => c.id?.toLowerCase() == params.get('category')?.replace(/-/, ' ')) || categories[0]
        )
        },[params]);
   
    return <main>
    <Navbar />
    
    <div className="header mb-8 lg:mb-14 relative w-full min-h-[25vh] md:min-h-[35vh] lg:min-h-[45vh]">
        <Image src={accessories} fill  alt="Header" />
    </div>

    <div className="mt-8 md:mt-12 mb-8 text-center text-white">
        <h2 className="text-3xl mb-4 md:mb-8 font-semibold text-center">{selected.title}</h2>
        <p className="max-w-[80%] lg:max-w-[60%] mx-auto text-[12px] md:text-lg">
      {selected.description}       </p>
    </div>

   <div className="mt-4 md:mt-12 mb-10 md:mb-20 text-white center flex-wrap px-2 md:px-0 lg:px-48">
        {selected.products.map((items,i) => <>
          {/* <Link href={items.slug}> */}
            <ProductCard product={items} item={items.slug} key={`product-${i}`} />
            {/* </Link>   */}
        </>)}
    </div>
        
    <Footer />
    </main>
}

export default Products