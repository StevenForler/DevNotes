import BellIcon from './icons/bell.svg?react'; // this was successful change the rest of them like this
import MessengerIcon from './icons/messenger.svg?react';
import CaretIcon from './icons/caret.svg?react';
import PlusIcon from './icons/plus.svg?react';
import CogIcon from './icons/cog.svg?react';
import ChevronIcon from './icons/chevron.svg?react';
// import { ReactComponent as ArrowIcon } from './icons/arrow.svg';
// import { ReactComponent as BoltIcon } from './icons/bolt.svg';


import React, { useState, useEffect, useRef } from 'react';
// import { CSSTransition } from 'react-transition-group';

function App() {
        
        return (
                <Navbar>
                        <NavItem icon={<BellIcon/>}/>
                        <NavItem icon={<MessengerIcon/>}/>
                        <NavItem icon={<PlusIcon/>}/>
                        
                        <NavItem icon={<CaretIcon/>}> 
                                <DropdownMenu></DropdownMenu>
                        </NavItem>
                </Navbar>
        )
}

function DropdownMenu(){
        function DropdownItem(){
                <a href="#" className="menu-item">
                        <span className="icon-button">{props.leftIcon}</span>
                        {props.children}
                        <span className="icon-right">{props.rightIcon}</span>
                </a>
        }
        return(
                <div className="dropdown">
                        <DropdownItem>My Profile</DropdownItem>
                        <DropdownItem leftIcon={<CogIcon/>}
                                rightIcon={<ChevronIcon/>}>
                                
                        </DropdownItem>
                </div>
        )
}

function Navbar(props) {
        return(
                <nav className="navbar">
                        <ul className="navbar-nav">{props.children }</ul>
                </nav>
        )
}

function NavItem(props){

        const [open, setOpen] = useState(false);
        return(
                <li className="nav-item">
                        <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
                                {props.icon}
                        </a>
                        {open && props.children}
                </li>
        )
}

export default App