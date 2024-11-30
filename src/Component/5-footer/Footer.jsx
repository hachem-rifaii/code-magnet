import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='last-section '>
     <div className='links '> 
      <ul className='flex'>
        <li><a href="">About</a></li>
        <li><a href="">Project</a></li>
        <li><a href="">Speaking</a></li>
        <li><a href="">Uses</a></li>
      </ul>
      </div>
      <div className='text'>
        <p>
        &copy;2023 spenser sharp all right reserved </p>
        </div>
    </footer>
  )
}

export default Footer