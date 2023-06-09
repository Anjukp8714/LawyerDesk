import React from 'react'
import news from '../../assets/news.svg';
import './settings.css'

function Settings() {
    const settings1 = [
        {
            id:1,
            icons:'Dark Mode',
            text:'Dark Mode',
        },
        {
            id:2,
            icons:'Dark Mode',
            text:'Language',
        },
        {
            id:3,
            icons:'Dark Mode',
            text:'Change Password',
        },
        {
            id:4,
            icons:'Dark Mode',
            text:'Legal Preferences',
        },
        {
            id:5,
            icons:'Dark Mode',
            text:'Privacy & Security',
        },
        {
            id:6,
            icons:'Dark Mode',
            text:'History',
        },
        {
            id:7,
            icons:'Dark Mode',
            text:'Delete account',
        },
        {
            id:8,
            icons:'Dark Mode',
            text:'Log out',
        },

    ]
  return (
 
    <div className='search w-[90%] md:w-[80%] mx-auto my-0'>
    <div className="news-feed-header">
      <div className='left-sec'>
        <img src={news} alt="News Icon" className="icon" />
        <span className="news-text">News</span>
      </div>
    </div>
    <div className='settings-sec'>
        <div className='user-sec'>
            <div className='userimage'>
                <img src=''/>
            </div>
            <div className='detail-sec'>
                <div className='username'><p>JOSEPH COTCHETT</p></div>
                <div className='username'><p>joseph@lawyerdesk.in</p></div>
                <div className='username'><p>Convert t public user</p></div>
            </div>
        </div>
        <div className='notification'>
            <div className='icons-sec'></div>
            <div className='text-sec'>Notifications</div>
            <div className='last-sec'></div>
        </div>
       {settings1.map(items => (
            <div key={items.id} className="settings-item">
            <div className="settings-icon">{items.icons}</div>
            <div className="settings-text">{items.text}</div>
          </div>
       )
    )}

    </div>
    </div>
  )
}

export default Settings