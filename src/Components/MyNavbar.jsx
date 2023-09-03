import React from 'react'
import icon from "./../img/icon.png";
import SignUp from './SignUp';

const MyNavbar = () => {
  return <>
     <nav className="navbar navbar-expand-lg bg-light">
      <div className="container d-flex justify-content-between align-items-baseline">
        <a className="navbar-brand" href="#">
          <img src={icon} width={170} alt="" />
        </a>
        <div className="d-flex justify-content-center align-items-baseline m-0"> 

            <div className="input-group">
      <span className="input-group-text" id="searchIcon">
        <i className="bi bi-search"></i>
      </span>
      <input type="text" style={{width:"320px"}}  className="form-control rounded" placeholder="Search for your favorite groups in ATG" aria-label="Search" aria-describedby="searchIcon" />
    </div>
        </div>
        <div>
          <a className="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">Create a Account. Its, Free</a>
        </div>
      </div>
    </nav> 



    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <p class="modal-title" id="exampleModalLabel">Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <SignUp/>
        </div>
      </div>
    </div>
  </div>
  </>
}

export default MyNavbar