import React from "react"
import FlashCard from "./FlashCard"
import "./flash.css"

const FlashDeals = ({ productItems, addToCart, darkMode }) => {
  
  return (
    <>
      <section className={darkMode ? 'deals flash-dark' : 'deals flash'}>
        <div className='container mob-container'>
          <div className='heading f_flex'>
            <i className='fa fa-bolt'></i>
            <h1>Flash Deals</h1>
          </div>
          <FlashCard productItems={productItems} addToCart={addToCart} />
        </div>
      </section>
    </>
  )
}

export default FlashDeals