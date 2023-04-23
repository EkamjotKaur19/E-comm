import React from "react"
import { Link } from "react-router-dom"

const Search = ({ CartItem, darkMode }) => {
  

  return (
    <>
      <section className='search'>
        <div className='container c_flex'>
          <div className='logo width '>
            <i className="fa-brands fa-shopify icon-shop"></i>
            <h1 className={darkMode?"logo-dark":"logo"}>E-BAZAAR</h1>
            
          </div>

          <div className='search-box f_flex'>
            <i className='searchicon fa fa-search'></i>
            <input type='text' placeholder='Search and hit enter...' />
            <span>All Category</span>
          </div>

          <div className='icon f_flex width'>
            
            <div className='cart'>
              <Link to='/cart'>
                <i className='fa fa-shopping-bag icon-circle'></i>
                {CartItem &&
                <span>{CartItem.length === 0 ? "" : CartItem.length}</span>}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Search
