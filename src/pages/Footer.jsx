import React from 'react'

const Footer = () => {
  return (
  <>

<footer id="footer" style={{background:'#1f7232'}}>
      <div className="container">
        <h3 style={{color:'black'}}>VAZIR SHIKSHAN SANSTHAN</h3>
        <p style={{color:'white'}}>
          Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni
          eligendi fuga maxime saepe commodi placeat.
        </p>
        {/* <div className="social-links">
          <a className="btn m-2 text-center mr-2 px-0"  href="/"><i className="fab fa-twitter"></i></a>
          <a className="btn m-2 text-center mr-2 px-0" href="/"><i className="fab fa-facebook-f"></i></a>
          <a className="btn m-2 text-center mr-2 px-0"  href="/"><i className="fab fa-linkedin-in"></i></a>
          <a className="btn m-2 text-center mr-2 px-0"  href="/"><i className="fab fa-instagram"></i></a>
        </div> */}
        <div className="copyright" style={{color:'white'}}>
          © Copyright <strong><span>VSS</span></strong>. All Rights Reserved
        </div>
        <div className="credits" style={{color:'white'}}>
          Designed by
          <a href="https://suhailbehlim.netlify.app/" style={{color:'black'}}> SUHAIL BEHLIM</a>
        </div>
      </div>
    </footer>
    {/* style="width: 38px; height: 38px" */}
  </>
  )
}

export default Footer