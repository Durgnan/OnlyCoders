
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
    InputGroup,
    FormFeedback
  } from 'reactstrap';
import SearchIcon from '@mui/icons-material/Search';
import Sidebar from '../sidebar/sidebar';
import MainFeedContainer from '../main-feed-container/main-feed-container';
import { Label, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import axios from 'axios';
import { baseUrl } from '@/app/utils/network';
import { Snackbar } from '@mui/material';

const MainPage = ()  => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const [isSnackbarOpen, setSnackbarOpen] = React.useState(false);
    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
      };




    const [FormData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const [nameValidator, setNameValidator] = useState(false);
    const [emailValidator, setEmailValidator] = useState(false);
    const [passwordValidator, setPasswordValidator] = useState(false);
    const [confirmPasswordValidator, setConfirmPasswordValidator] = useState(false);

    const createAccount = () => {
        const { fullName, email, password, confirmPassword } = FormData
        let isFormValid = true;
        if(fullName.length == 0)
        {
            isFormValid = false
            setNameValidator(true)
        }
        else
        {
            setNameValidator(false)
        }
        
        if(email.length == 0)
        {
            isFormValid = false
            setEmailValidator(true)
        }
        else
        {
            setEmailValidator(false)
        }

        if(password.length == 0)
        {
            isFormValid = false
            setPasswordValidator(true)
        }
        else
        {
            setPasswordValidator(false)
        }

        if(confirmPassword.length == 0 || confirmPassword != password)
        { 
            isFormValid = false
            setConfirmPasswordValidator(true)
        }
        else
        {
            setConfirmPasswordValidator(false)
        }


        if(isFormValid)
        {
            console.log("Form Submitted!");
            console.log(FormData);
            axios.post(baseUrl+"/users/create-user",{fullName, email, password}).then((res) => {
                console.log(res);
                if(res.status = 200)
                {
                    setSnackbarOpen(true)
                    toggle();
                }
                else{
                    console.log("Failed :", res.status, res.data, res.message);
                }
            })
        }

        
    }

    const reset = () => {
        setFormData({
            fullName:"",
            email: "",
            password: "",
            confirmPassword: ""
        })
        setNameValidator(false);
        setEmailValidator(false);
        setPasswordValidator(false);
        setConfirmPasswordValidator(false);
    }


    return(
        <div>
            <Snackbar
                open={isSnackbarOpen}
                autoHideDuration={4000}
                onClose={handleSnackbarClose}
                message="User Creation Success"
            />
            <Modal isOpen={isOpen} toggle={toggle} onClosed={reset}>
                <ModalHeader toggle={toggle} className='bg-pill color-plain-white' >
                        Login/Signup
                </ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="fullname">
                                Full Name
                            </Label>
                            <Input type='text' name='fullname' id='fullname' placeholder='Please enter your full name' value={FormData.fullName} invalid={nameValidator} onChange={(e)=>{setFormData({...FormData, fullName: e.target.value})}}></Input>
                            <FormFeedback invalid >Please Enter a valid Full Name</FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">
                                Email
                            </Label>
                            <Input type='email' name='email' id='email' placeholder='Please enter your Email' value={FormData.email} invalid={emailValidator} onChange={(e)=>{setFormData({...FormData, email: e.target.value})}}></Input>
                            <FormFeedback invalid >Please Enter a valid Email</FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">
                                Password
                            </Label>
                            <Input type='password' name='password' id='password' placeholder='Please enter your Password' value={FormData.password} invalid={passwordValidator} onChange={(e)=>{setFormData({...FormData, password: e.target.value})}}></Input>
                            <FormFeedback invalid >Please Enter a valid password</FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">
                                Confirm Password
                            </Label>
                            <Input type='password' name='confirm-password' id='confirm-password' placeholder='Please confirm your Password' value={FormData.confirmPassword} invalid={confirmPasswordValidator} onChange={(e)=>{setFormData({...FormData, confirmPassword: e.target.value})}}></Input>
                            <FormFeedback invalid >Passwords dont match</FormFeedback>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button className='btn-primary' onClick={createAccount}>Sign Up</Button>{' '}
                    <Button color="secondary" onClick={reset}>Reset</Button>
                </ModalFooter>
            </Modal>
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
                     <Button className='m-l-90 login-btn' onClick={toggle}>Login</Button>
                </Form>
            </Navbar>
            <Sidebar></Sidebar>
            <MainFeedContainer></MainFeedContainer>
        </div>
    )
}

export default MainPage;