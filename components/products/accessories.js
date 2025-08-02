import React, { useRef } from 'react'
import {Navbar, Footer} from '../index'
import styles from 'styles/Products.module.css'
import Image from 'next/image'
import Link from 'next/link'
import accessories from 'assets/accessories.png'
import productImg from 'assets/accessory.png'

const ProductCard = ({product, key}) => {
    product.rating = 3.4
   
    const [cart, setCart] = useLocalStorage('cart', []);
    const router = useRouter()
   console.log(product.slug)
  
   
    const handleCheckout = (e) => {
      e.preventDefault()
      setCart([...cart, {slug: product.slug, quantity: 1}])
      router.push('/checkout')
    }
    return <div className='w-full md:w-1/2 lg:w-1/3 py-5 lg:px-2 center mx-10 md:mx-0' key={key}>
        <div className="px-5 py-4 border border-teal-600 hover:bg-teal-600/10 cursor-pointer">
            <div className="w-[70%] mx-auto center mb-8">
                <Image src={product?.image || productImg} width={300} height={300} alt="Product" />
            </div>
            <div className="">
                <h2 className="text-lg font-semibold mb-2"> {product?.name || 'DELL G6J41, 0G6J41, MGJN9, 43NY4, RWHHR, 450-AECO 65 W Adapter'} </h2>
                <div className="w-full flex justify-between">
                    <div>
                        <h2 className="text-lg font-semibold mb-2"> ₹{product?.price || 999} </h2>
                        <h2 className="text-lg font-semibold mb-2"> ₹{product?.slug} </h2>
                        <h2 className="text-lg font-semibold mb-2">
                            {Array(Math.round(5)).fill(0).map((x, i) => <span key={`rating-${i}`} className={styles.star + ` bg-[${ i < product?.rating ? '#FBB040' : 'gray'}]`}></span> )}
                            <br/>{/*<p className='-mt-1'>4.0</p>*/}
                        </h2>
                    </div>
         <button className='px-7 py-[6px] rounded bg-[#007E9E] hover:bg-[#007E9E]/50 font-semibold transform hover:bg-primary hover:border-primary hover:scale-105  transition-all duration-300 ease-in-out'onClick={e => handleCheckout(e)}>Buy Now</button>
                </div>
                
            </div>
        </div>
    </div>
}

const Products = () => {

    return <main>
    <Navbar />
    
    <div className="header mb-8 lg:mb-14 relative w-full min-h-[35vh] md:min-h-[45vh]">
        <Image src={accessories} fill  alt="Header" />
    </div>

    <div className="mt-8 md:mt-12 mb-8 text-center text-white">
        <h2 className="text-3xl mb-4 md:mb-8 font-semibold text-center">CHARGER</h2>
        <p className="max-w-[80%] lg:max-w-[60%] mx-auto text-[12px] md:text-lg">
        With performance that rivals superchargers of gaming laptops, this blazing-fast charger is even faster with modern compatibilities. Our portable laptop battery chargers are the ultimate travel partner when working anywhere appropriately.

        </p>
    </div>

    <div className="mt-4 md:mt-12 mb-10 md:mb-20 text-white center flex-wrap px-2 md:px-8 lg:px-48">
        {[1,2,3,4,5,6,7,8,9,10,11,12].map((x,i) => <>
            <ProductCard product={{}} key={`product-${i}`} />
        </>)}
    </div>

    <Footer />
    </main>
}

export default Products
