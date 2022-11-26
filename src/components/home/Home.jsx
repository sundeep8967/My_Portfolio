import React,{useEffect} from "react"
import "./Home.css"
// import Typewriter from 'typewriter-effect';

const Home = () => {

  
  useEffect(() => {
    const deg = 6;
    const hr = document.querySelector('#hr')
    const mn = document.querySelector('#mn')
    const sc = document.querySelector('#sc')
    setInterval(() => {

      let day = new Date();
      let hh = day.getHours() * 30;
      let ss = day.getSeconds() * deg;
      let mm = day.getMinutes() * deg;

      hr.style.transform = `rotateZ(${hh + (mm / 12)}deg)`;
      mn.style.transform = `rotateZ(${(mm)}deg)`;
      sc.style.transform = `rotateZ(${(ss)}deg)`;

    })
  
   
  }, []) 
  

  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            <h3>WELCOME TO MY TECH WORLD</h3>
            <h1>
              Hi, I’m <span>K J SUNDEEP KUMAR</span>
            </h1>
            <h2 className="typo">
              
              <span>
                {/* <Typewriter
                  options={{
                    strings: ['Full Stack Developer'],
                      // , 'Frontend Developer', 'Full Stack Developer'],
                    autoStart: true,
                    loop: true,
                  }}
                  
                /> */}
                Full Stack Developer
              </span>
            </h2>

            <p>I love to build web applications for productive uses and am a passionate learner and coder. I am also a competitive coding enthusiast and am working on excelling at these skills.</p>

            <div className='hero_btn'>
              <div className='col_1'>
                <h4>FIND WITH ME</h4>
                <div className='button '>
                    <a href="https://github.com/sundeep8967"  target='blank'>
                      <button className='btn_shadow'>
                          <i class='bx bxl-github'></i>
                      </button>
                    </a>
                  <a href="https://www.linkedin.com/in/sundeep8967" target='blank'> 
                    <button className='btn_shadow'>
                      <i class='bx bxl-linkedin'></i>
                      </button>
                  </a>
                  <a href="https://www.instagram.com/sundeep__viper/"  target='blank'>
                      <button className='btn_shadow'>
                        <i class='bx bxl-instagram'></i>
                      </button>
                  </a>

                </div>
              </div>
              <div className='col_1'>
                <h4>My Resume</h4>
                
                <a  href="./assets/pdf/Sundeep_Resume.pdf" target='blank'>
                  <button className='btn_shadow'>Download CV</button>
                </a>
                
               
              </div>
            </div>
          </div>
          {/* <div className='right'>
            <div className='right_img'>
              <h1>MKM</h1>
            </div>
          </div> */}
          <div className="right righthome">
            <div className="clock-container">
              <div className="clock">

                <div className="hour">
                  <div className="hr" id="hr"></div>
                </div>

                <div className="min">
                  <div className="mn" id="mn"></div>
                </div>

                <div className="sec">
                  <div className="sc" id="sc"></div>
                </div>
            </div>
          </div>


          </div>
        </div>
      </section>
    </>
  )
}

export default Home