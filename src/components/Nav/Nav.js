import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import './Nav.css';

const HeadNav = () => (
    <Navbar>
        <Navbar.Header>
            <Navbar.Brand>
                <a href='/'>David Yeung</a>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav pullRight>
                <NavItem eventkey={1} href='#about'>
                    About
                </NavItem>
                <NavItem eventkey={2} href='#previousWorks'>
                    Previous Works
                </NavItem>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default HeadNav;