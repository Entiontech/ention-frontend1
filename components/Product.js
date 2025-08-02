import React from 'react'
import {Navbar, Footer} from './index'
import styles from 'styles/Product.module.css'

const Product = ({product}) => {
    console.log(product)
  return (
    <main className={``}>
    {/* <Navbar /> */}
        <div className="py-14 px-28 text-white">
            <h1 className="">{product.title}</h1>
        </div>
    {/* <Footer /> */}
    </main>
  )
}

export default Product