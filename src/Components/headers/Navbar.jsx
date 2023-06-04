import React from 'react'

const Navbar = () => {
  return (
    <>
     {/* Side-Nav  */}
  <div class="side-navbar bg-light active-nav d-flex justify-content-between flex-wrap flex-column" id="sidebar">
    
    <div class="d-flex flex-column flex-shrink-0 p-3 px-4 bg-light">
      <a href="/">
        <img src="images/logo.png" alt=""/>
      </a>      
      <ul class="nav nav-pills flex-column mb-auto mt-5">
        <li>
          <a href="#" class="nav-link" aria-current="page">            
            <i class="bx bxs-home"></i> Home
          </a>
        </li>
        <li>
          <a href="#" class="nav-link link-dark">            
            <i class="bx bxs-store"></i> App Store
          </a>
        </li>
        <li>
          <a href="#" class="nav-link link-dark">            
            <i class="bx bxs-dashboard"></i> Suits
          </a>
        </li>
        <li>
          <a href="#" class="nav-link active link-dark">            
            <i class='bx bxs-package'></i> Device
          </a>
        </li>        
      </ul>
      <hr class="my-5"/>
      <h6>Settings</h6>
      <ul class="nav nav-pills mt-2 flex-column mb-auto">
        <li class="nav-item">
          <a href="#" class="nav-link" aria-current="page" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="false">            
            <i class='bx bxs-user' ></i> User
          </a>
          <ul class="btn-toggle-nav collapse hide pb-1" id="home-collapse">
            <li><a href="#" class="link-dark rounded">Team</a></li>
            <li><a href="#" class="link-dark rounded">Role</a></li>
            <li><a href="#" class="link-dark rounded">Reports</a></li>
          </ul>
        </li>       
        <li>
          <a href="#" class="nav-link link-dark">            
            <i class='bx bxs-bell' ></i> Notification
          </a>
        </li>
        <li>
          <a href="#" class="nav-link link-dark">            
            <i class='bx bxs-help-circle' ></i> Help
          </a>
        </li>
             
      </ul>
    </div>
    
    {/* Copyright  */}
  <div class="text-center p-3 border-top small copyright">
    © 2023 Copyright: The Open Factory    
  </div>
   {/* Copyright  */}

  </div>

     {/* Top Nav  */}
    <nav className="navbar top-navbar navbar-light bg-light px-5">
      <a className="btn border-0 " id="menu-btn" href="#"><i className="bx bx-menu"></i></a>

      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">      

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#" className="nav-link px-2" ><i className='bx bxs-bell' ></i></a></li>
          <li><a href="#" className="nav-link px-2"/><i className='bx bxs-message'></i></li>          
        </ul>        

        <div className="dropdown text-end">
          <a href="#" className="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle"/>
          </a>
          <ul className="dropdown-menu text-small" aria-labelledby="dropdownUser1" >            
            <li><a className="dropdown-item d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start" href="#"><i className='bx bxs-cog me-2' ></i> Settings</a></li>
            <li><a className="dropdown-item d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start" href="#"><i className='bx bxs-user-circle me-2' ></i> Profile</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start" href="#"><i className='bx bx-log-out me-2' ></i> Sign out</a></li>
          </ul>
        </div>
      </div>      
    </nav>    
    </>
  )
}

export default Navbar