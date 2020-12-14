import { FaBars } from 'react-icons/fa'
import { NavLink as Link } from 'react-router-dom'
import styled from 'styled-components'

export const Nav = styled.nav`
    height: 64px;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    position: fixed;
    z-index: 9999;
    background-color: whitesmoke;
    color: black;
    box-shadow: 0px -22px 50px #000000;
`

export const NavLogo = styled(Link)`
    img{
      width: 3.5rem;
      padding-left: 0.5rem;
    }
`

export const NavLink = styled(Link)`
    display: flex;
    align-items: center;
    padding-right: 4rem;
    height: 100%;
    cursor: pointer;
    &.active {
      border-bottom: 5px solid #CFE7F7;
    }
    a{
      text-transform: uppercase;
      text-decoration: none;
      letter-spacing: 0.15em;
      padding: 0.5rem 0;

      position: relative;
      &::after{
        background: none repeat scroll 0 0 transparent;
        bottom: 0;
        content: "";
        display: block;
        height: 2px;
        left: 50%;
        position: absolute;
        background: black;
        transition: width 0.3s ease 0s, left 0.3s ease 0s;
        width: 0;
        height: 0.3rem;
        background-color: #CFE7F7;
      }
      &:hover::after {
        width: 100%;
        background-color: #CFE7F7;
        height: 0.3rem;
        left: 0;
      }
    }
`
export const Bars = styled(FaBars)`
  display: none;
  color: black;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    cursor: pointer;
  }
`

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #256ce1;
  padding: 10px 22px;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`
