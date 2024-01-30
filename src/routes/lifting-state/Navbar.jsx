import React from "react";

const NavBar = (props) => {
  return (
    <nav style={{minHeight:"15vh", width:"1000px", backgroundColor:"black"}}>
      <a href="/">Home</a>
      <h1>{props.user.userName}</h1>
    </nav>
  );
};

export default NavBar;
