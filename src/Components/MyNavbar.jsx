import React from 'react'

const MyNavbar = () => {
  return <>
     <nav className="navbar navbar-expand-lg bg-light">
      <div className="container d-flex justify-content-between align-items-baseline">
        <a className="navbar-brand" href="#">
          <img src="/img/icon.png" width={170} alt="" />
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
          <a className="nav-link" href="#">Create a Account. Its, Free</a>
        </div>
      </div>
    </nav> 
  </>
}

export default MyNavbar