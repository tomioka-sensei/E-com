import React from 'react'
import { VscAccount } from "react-icons/vsc";
import { CiHeart } from "react-icons/ci";
import { TiShoppingCart } from "react-icons/ti";
import { GiBurningRoundShot } from "react-icons/gi";
import { FaBars } from "react-icons/fa6";




const Seachbar = () => {
  return (
    <>
    <div className='flex flex-row justify-around my-9'>
        <h1 className='font-bold text-blue-800 text-3xl'>GadaElectronics</h1>
        <input className='h-10 border rounded-md border-blue-800 w-80 text-center'
        type='text'
        name="search-form"
        placeholder="Search your item"
      
       />
       <div className='flex flex-row align-middle '>
        <div className='flex flex-row px-3 gap-2  '>
        <span><VscAccount  className='text-2xl'/></span>
        <button>SignIn<span><h3>Account</h3></span></button>
        </div>
        
        <button className='flex flex-row px-3 '><CiHeart className='text-3xl'/></button>

        <button className='flex flex-row px-3 gap-1'>Cart<span className='mx-1'><TiShoppingCart className='text-3xl' /></span></button>
       </div>

    </div>

    <div className='flex flex-row justify-between mx-7 align-middle'>

      <button className='font-normal text-lg flex flex-row gap-2 text-center bg-gray-200 px-14 py-6 rounded-sm'>EXploreAll <span><FaBars className='text-xl font-normal text-black ' /></span></button>

      <ul className='flex flex-row gap-9'>
        <li>Home</li>
        <li>Shop</li>
        <li>Element</li>
        <li>Pages</li>
        <li>Blogs</li>
        <li>Contact</li>
      </ul>

      <div className='flex flex-row gap-2'>
      <GiBurningRoundShot className='text-3xl'/>
        <div className='flex flex-col '>
        <h1>HotDeals</h1>
        <h1>SuperDiscount</h1>
        </div>
        

      </div>

    </div>
    </>
  )
}

export default Seachbar