import React from "react"
import "./style.css"
import TopCart from "./TopCart"

const TopCate = ({darkMode}) => {
  return (
    <>
      <section className={darkMode? 'deals flash-dark TopCate' :'deals TopCate background'}>
        <div className='container'>
          <div className='heading d_flex'>
            <div className='heading-left row  f_flex'>
              <i className='fa-solid fa-border-all'></i>
              <h2>Top Categories</h2>
            </div>
          </div>
          <TopCart />
        </div>
      </section>
    </>
  )
}

export default TopCate