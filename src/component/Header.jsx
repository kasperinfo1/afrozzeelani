// import React, { useState } from 'react';
// import "./header.css";
// import logo from "../images/logo.png";
// import profile from "../images/employee.jpg";
// import Profile from './Profile';

// const Header = () => {
//   const [profileToggle, setProfileToggle] = useState(false);
  

//   return (
//     <>
//       <Profile profileToggle={profileToggle} />
  
//       <div className="navbar-container">
//     <div className='navbar'>
//      <div className='logo'>
//        <h1>Ambey Fashion</h1>
//      </div>
//      <div className="profile-icon" onClick={()=>setProfileToggle(!profileToggle)}>
//        <img src={profile} alt="profile"/>
//      </div>
//     </div>
//     </div>
//     </>
//   )
// }

// export default Header


import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBell, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import "./header.css"; // Custom styling for header
import logo from "../images/logo.png"


const Header = ({ toggleSidebar }) => {
  const [profileToggle, setProfileToggle] = useState(false);
  return (
    <header className="main-header" style={{
      backgroundColor:"var(--primaryHead)"
    }}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      {/* <h1 className="header-title">KK Gas Agency</h1> */}
      <img src={logo} alt="" className="header-title" style={{height:"50px"}} />

      {/* <div className="header-actions">
        <FontAwesomeIcon icon={faBell} className="header-icon" onClick={()=>setProfileToggle(!profileToggle)}/>
        <FontAwesomeIcon icon={faUserCircle} className="header-icon" />
      </div> */}
   
    </header>
  );
};

export default Header;
