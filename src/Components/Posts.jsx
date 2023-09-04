import React from 'react'
import article from "./../img/article.png";
import PostNavbar from './PostNavbar';
import Ieisure from "./../img/Ieisure.png";

const Posts = () => {
  return <>
  <div className="container mt-4">
    <PostNavbar/>
    <div className="row mt-4 mb-4">
        <div className="col-md-8">
            <div class="card mb-4">
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
            <div class="card mb-4">
<img src={article} width={20} alt="" />
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


            <div class="card mb-4">
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
        <div className="col-md-4 center">
            <div className="">

                <div>
                <div></div>
<input type="search" placeholder='|Enter your location' className='mt-4 mb-4' name="" id="" />
                <div></div>
                </div>
<p className='mt-2 mb-2'>Your location will help us serve better and extend a personalised experience.</p>

<h6>REcommended Groups</h6>

<div className='main-inline'>
<div className='spaces'>
  <img src={Ieisure} alt="" />
  <h6>sakshi</h6>
</div>
  <div className='batch'>follow</div>
</div>
<div className='main-inline'>
<div className='spaces'>
  <img src={Ieisure} alt="" />
  <h6>sakshi</h6>
</div>
  <div className='batch'>follow</div>
</div>
<div className='main-inline'>
<div className='spaces'>
  <img src={Ieisure} alt="" />
  <h6>sakshi</h6>
</div>
  <div className='batch'>follow</div>
</div>
<div className='main-inline'>
<div className='spaces'>
  <img src={Ieisure} alt="" />
  <h6>sakshi</h6>
</div>
  <div className='batch'>follow</div>
</div>
            </div>
        </div>
    </div>
  </div>






 
  </>
}

export default Posts