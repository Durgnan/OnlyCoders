
"use client"

import styles from './main-page.module.css'
import React, { useState } from 'react';
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
    NavbarText,
    Form,
    FormGroup,
    Input,
    Button,
    InputGroup
  } from 'reactstrap';
import SearchIcon from '@mui/icons-material/Search';
import Sidebar from '../sidebar/sidebar';

const MainPage = ()  => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return(
        <div >
            <Navbar className={styles.MainPage} dark  expand="md">
                <NavbarBrand href="/">
                    <div className='d-inline-block align-top'>
                    <img src='/logo192.png' width="30" height="30"  alt="" className='m-r-8'></img>
                    {/* <div> */}
                    SAMPLE PAGE
                    {/* </div> */}

                    </div>
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                    <NavLink href="#">Components</NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        Features
                    </DropdownToggle>
                    <DropdownMenu end>
                        <DropdownItem>
                        Option 1
                        </DropdownItem>
                        <DropdownItem>
                        Option 2
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                        Reset
                        </DropdownItem>
                    </DropdownMenu>
                    </UncontrolledDropdown>
                    <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        More
                    </DropdownToggle>
                    <DropdownMenu end>
                        <DropdownItem>
                        Option 1
                        </DropdownItem>
                        <DropdownItem>
                        Option 2
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                        Reset
                        </DropdownItem>
                    </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
                </Collapse>
                {/* <NavbarText>Simple Text</NavbarText> */}
                <Form role='search'  className='d-flex'>
                    {/* <FormGroup className='d-flex'> */}
                        {/* <FormGroup> */}
                            <InputGroup className='nav-searchbar'>
                                <input className='nav-searchbar-text' placeholder='Enter your search here...' type='search'></input>
                                <span className="input-group-append nav-searchbar-icon">
                                    <SearchIcon ></SearchIcon>
                                </span>

                            </InputGroup>
                        {/* </FormGroup> */}
                    {/* </FormGroup> */}
                     <Button className='m-l-90 login-btn' type='submit'>Login</Button>
                </Form>
            </Navbar>
            <Sidebar></Sidebar>
        </div>
    )
}

export default MainPage;