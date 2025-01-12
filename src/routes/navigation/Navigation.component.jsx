import React from 'react'
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';
import './navigation.styles.scss'
import {ReactComponent as CrwnLogo}  from './../../assets/crown.svg'
const Navigation = () =>{
  return(
    <Fragment>
        <div className='Navigation' >
            <Link className='logo-container' to='/'>
              <CrwnLogo className='logo'/>
            </Link>
            <div className='links-container'>
                <Link className='nav-link' to='/shop'>
                  Shop
                </Link>
            </div>
        </div>
        <Outlet/>
    </Fragment>
  )
};
export default Navigation;