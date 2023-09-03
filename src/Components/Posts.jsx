import React from 'react'
import article from "./../img/article.png";
import PostNavbar from './PostNavbar';

const Posts = () => {
  return <>
  <div className="container mt-4">
    <PostNavbar/>
    <div className="row">
        <div className="col-md-8">
            <div class="card">
<img src={article} alt="" />
<div className='main-card'>
    <div className='spaces'>
<div><i class="bi bi-pencil-square"></i></div>
    <h6>Artical</h6>
    </div>

    <div className='main-inline'>
    <h2>What if famous brands had regular fonts? Meet RegulaBrands!</h2>
    <div class="dropdown">
      <div class="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" >
      <i class="bi bi-three-dots-vertical"></i>
      </div>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Edit</a></li>
        <li><a class="dropdown-item" href="#">Report</a></li>
        <li><a class="dropdown-item" href="#">Opations 3</a></li>
      </ul>
    </div>
    </div>

    <p>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>

<div className='main-inline'>
<div className='spaces'>
    <img src="" alt="" />
    <h6>Sarthak Kamra</h6>
</div>
<div className='spaces'>
    <p><i class="bi bi-eye-fill"></i></p>
    <p> 1.4k views</p>
</div>
<i class="bi bi-share"></i>
</div>
</div>
            </div>
        </div>
    </div>
  </div>
  </>
}

export default Posts