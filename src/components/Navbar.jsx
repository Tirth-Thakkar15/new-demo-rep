import React from 'react'
import {Link } from "react-router-dom"

function Navbar() {
  return (
    <Link to='/'>
        <div className="w-full justify-center flex items-center">
          <h1 className='w-[300px]'>Crypto News </h1>
        </div>
    </Link>
  );
};

export default Navbar