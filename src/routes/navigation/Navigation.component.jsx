import React from 'react'
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';
import './navigation.component.scss'
const Navigation = () =>{
  return(
    <Fragment>
        <div className='Navigation' >
            <Link className='logo-container' to='/'>
               <img src="https://i.ibb.co/YtG7L0W/logo.png" alt="logo" border="0"></img>
            </Link>
            <div className='links-conatiner'>
                <Link className='nav-link' to='/shop'>
                </Link>
            </div>
        </div>
        <Outlet/>
    </Fragment>
  )
};
export default Navigation;