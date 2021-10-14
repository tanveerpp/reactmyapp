import React from 'react';
import {NavLink,useHistory } from 'react-router-dom';
const Navbar=()=>{
 let history = useHistory();
  function handleClick() {
    //history.goBack();
    history.push("/");
  }
    return(
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
  <NavLink exact to="/" className="navbar-brand" activeClassName="active">Home</NavLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
      <NavLink exact to="/" activeClassName="active" className="nav-link active">Home</NavLink>
      <NavLink exact to="/about" activeClassName="active" className="nav-link active">About</NavLink>
        <NavLink exact to="/contact" activeClassName="active" className="nav-link active">Contact</NavLink>
        <NavLink exact to="/images/programmers/point" activeClassName="active" className="nav-link active">Images</NavLink>
        <button className="nav-link active" onClick={handleClick}>Back</button>
      </div>
    </div>
  </div>
</nav>
        </>
    )
}
export default Navbar;