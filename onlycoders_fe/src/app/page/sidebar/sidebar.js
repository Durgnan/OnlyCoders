'use client'

import React, { useState } from 'react';
import { 
    Nav,
    Navbar,
    NavItem
 } from 'reactstrap'

 import { 
    NewspaperOutlined, 
    PersonOutlined, 
    RecordVoiceOverOutlined, 
    MilitaryTechOutlined, 
    StarBorderOutlined, 
    LayersOutlined,
    DiamondOutlined,
    Inventory2Outlined,
    SmsOutlined,
    ShoppingBasketOutlined,
    AutoStoriesOutlined
} from '@mui/icons-material'

const Sidebar = (props) => {

    const [selectedIndex, changeSelectedIndex] = useState(0);



    return(
        <div>
            <Nav vertical className='sidebar-container'>
                <NavItem 
                    key={0} 
                    className="sidebar-item"
                    active={selectedIndex==0} 
                    onClick={()=>{changeSelectedIndex(0)}}
                >
                    <NewspaperOutlined></NewspaperOutlined>
                </NavItem>
                <NavItem 
                    key={1} 
                    className="sidebar-item"
                    active={selectedIndex==1} 
                    onClick={()=>{changeSelectedIndex(1)}}
                >
                    <PersonOutlined></PersonOutlined>
                </NavItem>
                <NavItem 
                    key={2} 
                    className="sidebar-item"
                    active={selectedIndex==2} 
                    onClick={()=>{changeSelectedIndex(2)}}
                >
                    <RecordVoiceOverOutlined></RecordVoiceOverOutlined>
                </NavItem>
                <NavItem 
                    key={3} 
                    className="sidebar-item"
                    active={selectedIndex==3} 
                    onClick={()=>{changeSelectedIndex(3)}}
                >
                    <MilitaryTechOutlined></MilitaryTechOutlined>
                </NavItem>
                <NavItem 
                    key={4} 
                    className="sidebar-item"
                    active={selectedIndex==4} 
                    onClick={()=>{changeSelectedIndex(4)}}
                >
                    <StarBorderOutlined></StarBorderOutlined>
                </NavItem>
                <NavItem 
                    key={5} 
                    className="sidebar-item"
                    active={selectedIndex==5} 
                    onClick={()=>{changeSelectedIndex(5)}}
                    >
                        <LayersOutlined></LayersOutlined>
                </NavItem>
                <NavItem 
                    key={6} 
                    className="sidebar-item"
                    active={selectedIndex==6} 
                    onClick={()=>{changeSelectedIndex(6)}}
                >
                    <DiamondOutlined></DiamondOutlined>
                </NavItem>
                <NavItem 
                    key={7} 
                    className="sidebar-item"
                    active={selectedIndex==7} 
                    onClick={()=>{changeSelectedIndex(7)}}
                >
                    <Inventory2Outlined></Inventory2Outlined>
                </NavItem>
                <NavItem 
                    key={8} 
                    className="sidebar-item"
                    active={selectedIndex==8} 
                    onClick={()=>{changeSelectedIndex(8)}}
                >
                    <SmsOutlined></SmsOutlined>
                </NavItem>
                <NavItem 
                    key={9} 
                    className="sidebar-item"
                    active={selectedIndex==9} 
                    onClick={()=>{changeSelectedIndex(9)}}
                >
                    <ShoppingBasketOutlined></ShoppingBasketOutlined>
                </NavItem>
                <NavItem 
                    key={10} 
                    className="sidebar-item"
                    active={selectedIndex==10} 
                    onClick={()=>{changeSelectedIndex(10)}}
                >
                    <AutoStoriesOutlined></AutoStoriesOutlined>
                </NavItem>
            </Nav>
        </div>
    )

}

export default Sidebar;