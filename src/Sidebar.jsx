import React from 'react'
import {BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsListCheck, BsMenuButtonWideFill, BsFillGearFill}from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';

function Sidebar({openSidebarToggle, OpenSidebar}) {
    const navigate = useNavigate();
    const handleClick=(route)=>{
      navigate(route);
    }
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand' onClick={()=>{handleClick("/")}}>
                <h1>AidRentals</h1> 
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item' onClick={()=>{handleClick("/")}}>
                <a href="">
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </a>
            </li>
            <li className='sidebar-list-item' onClick={()=>{handleClick("/items")}}>
                <a href="">
                    <BsFillArchiveFill className='icon'/> Items
                </a>
            </li>
            
            <li className='sidebar-list-item' onClick={()=>{handleClick("/users")}}>
                <a href="">
                    <BsPeopleFill className='icon'/> Users
                </a>
            </li>
            <li className='sidebar-list-item' onClick={()=>{handleClick("/services")}}>
                <a href="">
                    <BsListCheck className='icon'/> Services
                </a>
            </li>
            {/* <li className='sidebar-list-item' onClick={()=>{handleClick("/reports")}}>
                <a href="">
                    <BsMenuButtonWideFill className='icon'/> Reports
                </a>
            </li> */}
        </ul>
    </aside>
  )
}

export default Sidebar