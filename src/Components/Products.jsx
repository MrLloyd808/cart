import React from 'react'
import { useCart } from '../CartContext'

const product = [
    {id: 1, name: 'Product 1', price: 100},
    {id: 2, name: 'Product 2', price: 200},
]

function Products() {
    const { addToCart } = useCart()
  return (
   <section>
     {product.map(item => (
      <div key={item.id} className="product">
          <h3>{item.name}</h3>
          <p>Price: ${item.price}</p>
          <button onClick={() => addToCart(item)}>Add to Cart</button>
      </div>
     ))}
   </section>
  )
}

export default Products
