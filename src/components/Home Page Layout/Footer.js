import React from 'react';
import './Footer.css'
import home from '../../assets/home.svg';
import settings from '../../assets/settings.svg';
import vector from '../../assets/Vector.svg';
import account from '../../assets/account_balance.svg';
import search from '../../assets/search.svg';

const Footer = () => {
  return (
    <footer className='bottomfooter'>
      <a href="#" className="footer-link">
        <img src={home} alt='home'/>
        {/* <span className="footer-text active">Home</span> */}
      </a>
      <a href="#" className="footer-link">
      <img src={search} alt='home'/>
        {/* <span className="footer-text">Search</span> */}
      </a>
      <a href="#" className="footer-link">
      <img src={account} alt='home'/>
        {/* <span className="footer-text">Search</span> */}
      </a>
      <a href="#" className="footer-link">
      <img src={vector} alt='home'/>
        {/* <span className="footer-text">Message</span> */}
      </a>
      <a href="#" className="footer-link">
      <img src={settings} alt='home'/>
        {/* <span className="footer-text">Settings</span> */}
      </a>
    </footer>
  );
};

export default Footer;
