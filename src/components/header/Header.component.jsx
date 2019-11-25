import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/shopping.svg';

import './header.styles.scss'

const Header = (props) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
        </div>
    </div>
);

export default Header;