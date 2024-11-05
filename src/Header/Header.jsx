import React from 'react'
import "./header.css"
import { IoMenu } from "react-icons/io5";
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Header = () => {
  const {userId}=useParams()
  const getData=()=>{
    const url = ``
  }
  return (
    <div className="headerContainer">
      <div className="headerInner">
        <nav className="navbar">
          <div className="Logo">
            <h2>Behance</h2>
            <IoMenu size={25} />
          </div>
          <nav className='navTwo'>
            <ul className="ulContainer">
              <li>Explore</li>
              <li>Assets</li>
              <li>Jobs</li>
              <li>
                Behance<span className='span'>pro</span>
              </li>
              <label>HHHH</label>
              <p>|</p>
              <p>HireFranlencer</p>
              <input placeholder='search' className='input'/>
           
            </ul>
          </nav>
         
        </nav>
      </div>
    </div>
  );
}

export default Header