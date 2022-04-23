import React, {Component, useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink as NavL
} from "react-router-dom";

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
    // console.log('render header')
  
    return (
      <div >
        <Navbar color="light" light expand="md">
          <div class="container-xxl">
            <NavbarBrand >
            <NavL to="/" className="text-muted text-decoration-none cursor-default">
              YG
            </NavL>
            </NavbarBrand>
            
          </div>
        </Navbar>
      </div>
    );
  }

 export default Header;