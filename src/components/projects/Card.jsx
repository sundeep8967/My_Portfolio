import React, { useState } from "react"

const Card = (props) => {
  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
  }

  
  if (modal) {
    document.body.classList.add("active-modal")
  } else {
    document.body.classList.remove("active-modal")
  }
  return (
    <>
      <div className='box btn_shadow port'>
        <div className='img'>
          <img src={props.image} alt='' onClick={toggleModal} />
        </div>
        <div className='category d_flex'>
          <span onClick={toggleModal}>{props.category}</span>
          <label>
            <i class='bx bx-heart' ></i> {props.totalLike}
          </label>
        </div>
        <div className='title'>
          <h2 onClick={toggleModal}>{props.title}</h2>
          <a href='#popup' className='arrow' onClick={toggleModal}>
            <i class='bx bx-arrow-back bx-fade-right' ></i>
          </a>
        </div>
      </div>

      {/* Popup box */}
      {modal && (
        <div className='modal'>
          <div onClick={toggleModal} className='overlay'>
          <div className='modal-content d_flex '>
            <div className='modal-img left'>
              <img src={props.image} alt='' />
            </div>
            <div className='modal-text right'>
              
                <h1>{props.title}</h1>
                <p>{props.content}</p>
                <h3>Langauges</h3>
                {props.language.map((val,i) => {
                  return <button className="btn" key={i} disabled>{val}</button>
                })}
                
                  
              <div className='button f_flex mtop'>
                <button className='btn_shadow'>
                  LIKE THIS <i class='bx bxs-like'></i>
                </button>
                <a href={props.gitlink} target="blank">
                  <button className='btn_shadow'>
                    VIEW PROJECT<i class='bx bx-link-external'></i>
                  </button>
                </a>
              </div>
              <button className='close-modal btn_shadow' onClick={toggleModal}>
                    <i class='bx bx-x'></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      )}
    </>
  )
}

export default Card