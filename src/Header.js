import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import SearchIcon from '@mui/icons-material/Search';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import './header.css';
import Logo from './logo.png';



function Header() { 

  
  return (
    <div className='header'>
      <div className='header_left'>
        <MenuIcon className='menuIcon'/>
        
          <img src={Logo} alt="Logo" className="header_logo" width="120px" />
        
      </div>
      <div className='header_input'>
        <input  type="text" name="" id="" className='search'  />
       
          <div className='searchButton'><SearchIcon className='searchIcon'/></div>
    
        
      </div>
      <div className='header_right'>
        <VideoCallIcon className='header_icon' />
        <AppsIcon className='header_icon'/>
        <NotificationsNoneOutlinedIcon className='header_icon'/>
      </div>
        
        
        

    </div>
  )
}

export default Header