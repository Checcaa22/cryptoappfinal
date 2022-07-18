import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #2c0658;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
  
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-size: 1 rem;
  
  &.active {
    aling-items: center;
    border-radius: 7px;
    background: #3e0a79;
    color: white;
    transition: all 0.3s ease-in-out;

  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: rgba(53,240,208,2);
  padding: 10px 22px;
  color: #3e0a79;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  shadow: 0px 0px 10px rgba(0,0,0,0.5);
  box-shadow: 0px 0px 10px rgba(0,0,0,0.5);
  border: none;


  &:hover {
    transition: all 0.2s ease-in-out;
    background: rgba(53,240,208,0.8);
  }
`;

export const Menu = styled.div`
  display: flex;
  width: 300px;
  height: 40px;
  justify-content: space-between;
  background: #491d7b;
  border-radius: 10px;
  padding: 0.5rem;
  margin:
`
export const Span = styled.span`
  color: yellow;
  font-weight: bold;

`;