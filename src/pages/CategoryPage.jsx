import React from 'react'
import products from '../components/products'

function CategoryPage() {
  return (
    <div>
        <h1> Snacks </h1>
        <div>
            <p>Filter by</p>
            <select>
                <option selected disabled>Price</option>
                <option>Low to High</option>
                <option>High ti Low</option>
            </select>
        </div>

        <products/>

    </div>
  )
}

export default CategoryPage