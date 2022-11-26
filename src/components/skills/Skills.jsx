import React from "react"
import "./Skills.css"
// import { useState, useEffect } from 'react';
import SkillsData from "./SkillsData"
const Skills = () => {
  

  return (
    <>
      <section className='Skills' id='skills'>
        <div className='container'>
          <div className='heading text-center uppercase'>
            <h1>Skills</h1>
          </div>
          <div className='skills-row'>
                <div className="skills-col">
                    <div className="slider-content">
                        <h3>Languages</h3>
                        <div className="slider">
                            <div className="slide-map"> 
                                { SkillsData.map((val,i)=> {
                                    return ( val.head === 'Languages' &&
                                        <div className="image">
                                            <img src={val.img} alt="blank" key={i} className="img_shadow"/>
                                            <h4 key={val.id}>{val.title}</h4>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="skills-col">
                    <div className="slider-content">
                        <h3>Frameworks</h3>
                        <div className="slider">
                            <div className="slide-map1"> 
                                { SkillsData.map((val,i)=> {
                                    return ( val.head === 'Frameworks' &&
                                        <div className="image1">
                                            <img src={val.img} alt="blank" key={i} className="img_shadow"/>
                                            <h4 key={val.id}>{val.title}</h4>
                                        </div>
                                    )
                                })}
                            </div>  
                        </div>
                    </div>
                </div>
                <div className="skills-col">
                    <div className="slider-content">
                        <h3>Database</h3>
                        <div className="slider">
                            <div className="slide-map1"> 
                                { SkillsData.map((val,i)=> {
                                    return ( val.head === 'Database' &&
                                        <div className="image1">
                                            <img src={val.img} alt="blank" key={i} className="img_shadow"/>
                                            <h4 key={val.id}>{val.title}</h4>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Skills