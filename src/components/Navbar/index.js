import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  Menu,
  Span
} from './NavbarElements';

import { BsTrophyFill } from 'react-icons/bs';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <h2><BsTrophyFill/> <Span>B.Name</Span></h2>
        </NavLink>
        <Bars />
        <NavMenu>
          <Menu>
          <NavLink to='/home' activeStyle>
            Home
          </NavLink>
          <NavLink to='/favourite' activeStyle>
            Favourite
          </NavLink>
          <NavLink to='/contact' activeStyle>
            Contact
          </NavLink>
          </Menu>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/'>Connect Wallet</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;

