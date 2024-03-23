import React from 'react'
import { VscAccount } from "react-icons/vsc";
import { CiHeart } from "react-icons/ci";
import { TiShoppingCart } from "react-icons/ti";



const Seachbar = () => {
  return (
    <div>
        <h1>GadaElectronics</h1>
        <input 
        type='search'
        name="search-form"
        placeholder="Search your item"
       />
       <div>
        <div>
        <span><VscAccount /></span>
        <button>SignIn<span><h3>Account</h3></span></button>
        </div>
        
        <button><CiHeart /></button>

        <button>Cart<span></span></button>
       </div>


    </div>
  )
}

export default Seachbar