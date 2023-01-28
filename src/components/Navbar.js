import React from 'react'
import apexpoint from '../assets/images/apexpoint.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex justify-between'>
      <div className='relative w-40 h-24'>
      <img src={apexpoint} className='w-40 h-40 absolute -top-5'/>
      </div>
     
        <ul className='flex justify-center items-center gap-3 text-md font-mono text-secondary-500'>
            <li><Link to='/about'>About</Link></li>
            <li>Contact</li>
            <li>Products</li>
            <li className=' rounded-md p-2 bg-primary-500 text-light shadow-md hover:bg-primary-600 hover:text-secondary-400'>Order Now</li>
        </ul>
    </div>
  )
}

export default Navbar