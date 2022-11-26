import React, { useState } from "react"
import contact1 from "./contact1.png"
import "./Contact.css"
import emailjs from 'emailjs-com'
const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    subject: "",
    message: "",})

  const InputEvent = (event) => {
    const { name, value } = event.target

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      }
    })
  }

  const formSubmit = (event) => {
    event.preventDefault()

    emailjs.sendForm('service_r9lusad', 'template_brnmbzf', event.target, 'kdK_Dr-BYw9yITW7T')
      .then(res => alert("Message Sent Successfully"))
      .catch(err => alert("Message Not Sent"))
    
    setData({
      fullname: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    })
  }
  return (
    <>
      <section className='Contact' id='contact'>
        <div className='container top'>
          <div className='heading text-center uppercase'>
            
            <h1>Contact </h1>
          </div>

          <div className='content d_flex'>
            <div className='left'>
              <div className='box box_shodow'>
                <div className='img'>
                  <img src={contact1} alt='' />
                </div>
                <div className='details'>
                  
                  
                  <h1>K J Sundeep Kumar</h1>
                  
                  <p>I am available for freelance work. Connect with me </p> <br />
                  <p><b>Phone</b> : +91 8088691117</p>
                  <p><b>Email </b> :  sundeep8967@gmail.com</p> 
                  <p><b>Location</b> : Bengaluru, India</p><br /><br />
                  <span>FIND WITH ME</span>
                  <div className='button f_flex'>
                    <a href="https://github.com/sundeep8967"  target='blank'>
                        <button className='btn_shadow'>
                            <i class='bx bxl-github'></i>
                        </button>
                      </a>
                    <a href="https://www.linkedin.com/in/sundeep8967/" target='blank'> 
                      <button className='btn_shadow'>
                        <i class='bx bxl-linkedin'></i>
                        </button>
                    </a>
                    <a href="https://instagram.com/sundeep__viper"  target='blank'>
                        <button className='btn_shadow'>
                          <i class='bx bxl-instagram'></i>
                        </button>
                    </a>
                    {/* <a href="https://twitter.com/MeManoj_Kumar" target="blank">
                      <button className='btn_shadow'>
                        <i className='bx bxl-twitter'></i>
                      </button>
                    </a> */}
                  </div>
                </div>
              </div>
            </div>

            <div className='right box_shodow'>
              <form onSubmit={formSubmit}>
                <div className='f_flex'>
                  <div className='input row'>
                    <span>YOUR NAME</span>
                    <input type='text' name='fullname' value={data.fullname} onChange={InputEvent} required/>
                  </div>
                  <div className='input row'>
                    <span>PHONE NUMBER </span>
                    <input type='number' name='phone' value={data.phone} onChange={InputEvent} required/>
                  </div>
                </div>
                <div className='input'>
                  <span>EMAIL </span>
                  <input type='email' name='email' value={data.email} onChange={InputEvent} required/>
                </div>
                <div className='input'>
                  <span>SUBJECT </span>
                  <input type='text' name='subject' value={data.subject} onChange={InputEvent} required/>
                </div>
                <div className='input'>
                  <span>YOUR MESSAGE </span>
                  <textarea cols='30' rows='10' name='message' value={data.message} onChange={InputEvent} required></textarea>
                </div>
                <button className='btn_shadow'>
                  SEND MESSAGE <i class='bx bx-arrow-back bx-rotate-180' ></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact