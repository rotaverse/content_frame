// import logo from './logo.svg';
import user from '../img/user.png';
import edit from '../img/edit.png';
import inbox from '../img/envelope.png';
import settings from '../img/settings.png';
import help from '../img/question.png';
import logout from '../img/log-out.png';
import './MenuApp.css';

import React, {useState, useEffect, useRef} from 'react';

function MenuApp() {

  const [open, setOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e)=>{
      if(!menuRef.current.contains(e.target)){
        setOpen(false);
        console.log(menuRef.current);
      }      
    };

    document.addEventListener("mousedown", handler);
    

    return() =>{
      document.removeEventListener("mousedown", handler);
    }

  });

  return (
    <div>
      <div className='menu-container' ref={menuRef}>
        <div className='menu-trigger' onClick={()=>{setOpen(!open)}}>
          Login
        </div>

        <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
          <ul>
            <DropdownItem img = {user} text = {"Dev Account"}/>
            <DropdownItem img = {edit} text = {"Dfinity"}/>
            <DropdownItem img = {settings} text = {"Settings"}/>
            <DropdownItem img = {help} text = {"Informations"}/>
            <DropdownItem img = {logout} text = {"Logout"}/>
          </ul>
        </div>
      </div>
    </div>
  );
}

function DropdownItem(props){
  return(
    <li className = 'dropdownItem'>
      <img src={props.img}></img>
      <a> {props.text} </a>
    </li>
  );
}

export default MenuApp;