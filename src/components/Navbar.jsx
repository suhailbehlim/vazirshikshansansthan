import React from 'react'
import logo from './img/logo.png'
const Navbar = () => {
  return (
    <>
    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light ">
  <a className="navbar-brand" href="/"><img src={logo} className="headlogo" /></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#home">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="#about">About <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="/">Classes <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="/">Gallery <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="/">Admission <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="/">Academics <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="/">Contact <span className="sr-only">(current)</span></a>
      </li>
   
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
<section className='section'><div className="text-center" id='home'>
          <h4 className="text-white">Quality Education School</h4>
          <h1 className="font-weight-bold text-white">VAZIR SHIKSHAN SANSTHAN</h1>
        
          <a data-aos="zoom-in" href="/" className="btn btn-secondary">Learn More</a>
        </div>
          
          </section>
</>
  )
}

export default Navbar