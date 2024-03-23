import React from 'react'

const Nav = () => {
  return (
    <div className='flex flex-row justify-evenly mx-2 my-2 '>
     <ul className='flex flex-row'>
        <li className='mx-2'>AboutUs</li>
        <li className='mx-2'>MyAccount</li>
        <li  className='mx-2'>Wishlist</li>
        <li className='mx-2'>My Location</li>
     </ul>

     <h3>Free Standard Delihivery On order above ₹500</h3>

     <ul className='flex flex-row'>
        <li className='mx-2'>English</li>
        <li className='mx-2'>Help?</li>
     </ul>
    
    

    </div>
  )
}

export default Nav