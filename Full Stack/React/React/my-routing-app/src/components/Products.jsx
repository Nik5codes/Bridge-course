import React from 'react'
import { useParams } from 'react-router-dom'

const Products = () => {
    const {prodId} = useParams();
  return (
    <div>
      productId: {prodId}
      product name: <p>Chocolates</p>
      
    </div>
  )
}

export default Products
