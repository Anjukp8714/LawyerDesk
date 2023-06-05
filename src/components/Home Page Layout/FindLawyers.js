import React, { useState } from 'react';
import news from '../../assets/news.svg';
import bell from '../../assets/bell.svg';
import lawyer from '../../assets/lawyer.svg';
import './NewsFeedHeader.css';
import LawyerDetail from '../LawyerDetail';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import SearchLawyer from './SearchLawyer';
function FindLawyers(props) {


  return (
    <div className='search w-[90%] md:w-[80%] mx-auto my-0'>
    <div className="news-feed-header">
      <div className='left-sec'>
        <img src={news} alt="News Icon" className="icon" />
        <span className="news-text">News</span>
      </div>
      <div className='right-sec'>
        <div>
          <img src={bell} alt="Bell Icon" className="icon" />
        </div>
        <div className='lawyer'>
          <Link to="/lawyer-detail">
            <img
              src={lawyer}
              alt="End User Icon"
              className="icon"
              
            />
          </Link>
        </div>
      </div>
    </div>
    <div className='search'>
      <SearchLawyer/>
    </div>
    </div>
  );
}

export default FindLawyers;
