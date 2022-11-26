import React, { useState, useEffect } from "react"
import "./Blog.css"
import Slide from "./Slide"
import BlogData from "./BlogData"

const Blog = () => {
  const [data, setdata] = useState([])
  const [index, setIndex] = useState(0)
  useEffect(() => {
    setdata(BlogData)
    
  }, [])
  
  useEffect(() => {
    const lastIndex = data.length - 1
    if (index < 0) {
      setIndex(lastIndex)
    }
    if (index > lastIndex) {
      setIndex(0)
    }
  }, [index, data])

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1)
    }, 3000)
    return () => clearInterval(slider)
  }, [index])

  return (
    <>
      <section className='Testimonial' id='blog'>
        <div className='container'>
          <div className='heading text-center uppercase'>
            
            <h1>Blogs</h1>
          </div>
          <div className='slide'>
       

            {data.map((value, valueIndex) => {
              return <Slide key={value.id} {...value} valueIndex={valueIndex} index={index} />
            })}

            <div className='slide_button'>
              <button className='btn_shadow prev_btn' onClick={() => setIndex(index - 1)}>
                <i class='bx bx-left-arrow-alt' ></i>
              </button>
              <button className='btn_shadow next_btn' onClick={() => setIndex(index + 1)}>
                <i class='bx bx-right-arrow-alt'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Blog