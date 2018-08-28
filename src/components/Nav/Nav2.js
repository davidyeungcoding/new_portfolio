import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import './Nav.css';

const Header = () => (
    <Navbar>
        <Navbar.Header>
            <Navbar.Brand>
                <a href='/'>David Yeung</a>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav pullRight>
                <NavItem eventkey={1} href='/'>
                    About
                </NavItem>
                <NavItem eventkey={2} href='/portfolio'>
                    Previous Works
                </NavItem>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default Header;