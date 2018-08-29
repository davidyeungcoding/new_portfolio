import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import './Nav.css';

const HeadNav = () => (
    <Navbar>
        <Navbar.Header>
            <Navbar.Brand>
                <a className='globalHeader' href='#landingTop'>David Yeung</a>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav pullRight>
                <NavItem className='globalHeader' eventkey={1} href='#about'>
                    About
                </NavItem>
                <NavItem className='globalHeader' eventkey={2} href='#previousWorks'>
                    Previous Works
                </NavItem>
                <NavItem className='globalHeader' eventKey={3} href='#social'>
                    Contact
                </NavItem>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default HeadNav;