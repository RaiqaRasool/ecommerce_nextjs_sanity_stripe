import React from 'react';
import Link from "next/link";


import { urlFor } from '../lib/client';

const Product = ({product:{image,name,slug,price}}) => {
  return (
    <div>
      {/* It will point slug of current displaying product */}
      <Link href={`/product/${slug.current}`}> 
      <div className='product-card'>
       {/*Here we are targeting image[0] becuase we can have multiple images for each of our product out of which for card first one will appear */}
        <img src={urlFor(image && image[0]).url()} 
        alt={name}
        width={250}
        height={250}
        className="product-image"
         /> 
         <p className="product-name">{name}</p>
         <p className="product-price">${price}</p>
      </div>
      </Link>
    </div>
  )
}

export default Product