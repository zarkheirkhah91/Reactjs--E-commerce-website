import React from 'react'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs'
import ProductDisplay from '../components/ProductDisplay/ProductDisplay'


const Product = () => {
  const {all_product} = useContext(ShopContext)
  const {productId} = useParams();
  const product = all_product.find((e)=>e.id === productId)
  return (
    <div>
      <Breadcrumbs product={product}/>
      <ProductDisplay product={product}/>
    </div>
  )
}

export default Product