import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import { BrowserRouter as Router, Link } from 'react-router-dom';

class NavBar extends React.Component {
    render() {
        return (
            <div>
              <Navbar className="navbar" color="dark" dark expand="md" fixed-top="true">
                  <NavbarNav right>
                    <NavItem className="nav-item">
                        <a>Tv Shows</a>
                    </NavItem>
                  </NavbarNav>
             </Navbar>
           </div>
    		)
    }
}

export default NavBar