import React from 'react'
import c3 from '../components/img/c3.jpg'
const Home = () => {
  return (
    <>
        <section classNameName="container welcome">
      <h1 style={{color:'red'}}>WELCOME TO</h1>
      <h1 classNameName='contentvazir'>VAZIR SHIKSHAN SANSTHAN</h1>
      <p>
        Established in year 2002, VAZEER SS FETHAPUR is located in Urban area of
        Rajasthan state/ut of India. In Np Fatehpur_Ward No 21 area of Fatehpur
        block of Sikar district. Area pincode is 332301. School is providing
        Upper Primary level education and is being managed by Private
        Organisation. Medium of instruction is Hindi language and school is
        Co-educational. Currently schools is being guided by principal/head
        teacher Mr./Ms. MAMTA JOSHI.
      </p>
    </section>

    {/* ABOUT SECTION */}
    <div id="about" className="about">
      <div className="container">
        <div className="section-title">
          <h1 data-aos="zoom-in" className="aos-init aos-animate">ABOUT US</h1>
          <p className="aboutcontent1">
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-6 order-1 order-lg-2">
          
            <img data-aos="fade-right" src={c3} className="img-fluid aos-init aos-animate" alt=""/>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
            <h3 data-aos="zoom-in" className="aos-init aos-animate">
              Voluptatem dignissimos provident quasi corporis voluptates sit
              assumenda.
            </h3>
            <p className="fst-italic aos-init aos-animate" data-aos="zoom-out">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
    
            <p data-aos="zoom-out" className="aos-init aos-animate">
              Established in year 2002, VAZEER SS FETHAPUR is located in Urban
              area of Rajasthan state/ut of India. In Np Fatehpur_Ward No 21
              area of Fatehpur block of Sikar district. Area pincode is 332301.
              School is providing Upper Primary level education and is being
              managed by Private Organisation.
            </p>
            <p data-aos="zoom-in" className="aos-init aos-animate">
              Medium of instruction is Hindi language and school is
              Co-educational. Currently schools is being guided by
              principal/head teacher Mr./Ms. MAMTA JOSHI.
            </p>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default Home