import React, { useState } from 'react';
import './Navbar.css';

import acorn from '../../assets/acorn.png';
import bell from '../../assets/bell.png';
import lightbulb from '../../assets/lightbulb.png';
import search from '../../assets/search.png';
import user from '../../assets/chandru.svg';

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <div className='menu-sec'>
        <div className='left-menu-sec'>
          <ul>
            <li> <a href="">logo</a> </li>
            <li> <a href="">Home</a> </li>
            <li> <a href="">FindLawyer</a> </li>
            <li> <a href="">Legal Research</a> </li>
            <li> <a href="">Chats</a> </li>
            <li> 
              <a href="" onClick={toggleDropdown}>
                Settings
                {isDropdownOpen ? <span>&#9650;</span> : <span>&#9660;</span>}
              </a> 
              {isDropdownOpen && (
                <ul className="dropdown-menu">
                  <li><a href="">Profile</a></li>
                  <li><a href="">Preferences</a></li>
                  <li><a href="">Security</a></li>
                </ul>
              )}
            </li>
          </ul>
        </div>
        <div className='right-menu-sec'>
          <ul>
            <li> <a href=""><img src={acorn} alt="acorn" /></a> </li>
            <li> <a href=""><img src={bell} alt="bell" /></a> </li>
            <li> <a href=""><img src={lightbulb} alt="lightbulb" /></a> </li>
            <li> <a href=""><img src={search} alt="search" /></a> </li>
            <li> <a href="">EN</a> </li>
            <li> <a href="">Lisa Jackson</a> </li>
            <li> <a href=""><img src={user} alt="user" /></a> </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
