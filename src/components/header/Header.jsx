import React, { useState,useEffect } from "react"
import "./Header.css"
// import logo from "../pic/logo.png"

const Header = () => {

  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header")
    header.classList.toggle("active", window.scrollY > 90)
  })
  const [Mobile, setMobile] = useState(false)
  useEffect(() => {
    if (window.innerWidth > 768) {
      setMobile(false)
      document.body.classList.add('f_flex')
      document.body.classList.add('link')
      document.body.classList.remove('nav-links-mobile')
    }
  }, [])
  
  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
          <div className='logo'>
            <h3>KJSK</h3>
          </div>

          <div className='navlink'>
            <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>
             
              <li><a href='#home'>HOME</a></li>
              <li><a href='#education'>EDUCATION</a></li>
              <li><a href='#skills'>SKILLS</a></li>
              <li><a href='#projects'>PROJECTS</a></li>
              <li><a href='#blog'>BLOGS</a></li>
              <li>
                
              <button ><a href='#contact' className='home-btn'>CONTACT</a></button>
              </li>
            </ul>

            <button className='toggle' onClick={() => setMobile(!Mobile)}>
              {Mobile ? <i className='bx bx-x close home-btn'></i> : <i className='bx bx-menu open'></i>}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header