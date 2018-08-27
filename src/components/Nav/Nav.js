import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

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
                    Home
                </NavItem>
                <NavItem eventkey={2} href='/portfolio'>
                    Portfolio
                </NavItem>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default Header;