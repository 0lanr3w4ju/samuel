// core imports
// import React, { useState } from 'react';

// styling imports
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { TaglineStyle, NavLinkStyle } from '../reusables-css/Navbar';
import '../reusables-css/Navbar.css'

const Navigationbar = () => {

    // const [collapsed, setCollapsed] = useState(true);

    // const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <div>
            <Navbar
                fixed="top"
                className="navbarStyle"
            >
                <NavbarBrand href="https://0lanr3w4ju.github.io/samuel/" className="mr-auto">
                    <TaglineStyle>
                        [0lanr3w4ju]: Lag05 based Fullstack Developer<span> = Ethical Hacker</span>
                    </TaglineStyle>
                </NavbarBrand>

                {/* <NavbarToggler onClick={toggleNavbar} className="mr-2 navbarTogglerStyle" /> */}

                {/* <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href="http://localhost:3000">
                                <NavLinkStyle>
                                    Github
                                </NavLinkStyle>
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink href="http://localhost:3000">
                                <NavLinkStyle>
                                    Dribble
                                </NavLinkStyle>
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse> */}
            </Navbar>
        </div>
    )
}

export default Navigationbar

