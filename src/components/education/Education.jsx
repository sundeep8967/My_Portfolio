import React from "react"
import "./Education.css"
import EducationData from "./EducationData"
import EducationCard from "./EducationCard"
import ExperienceData from "./ExperienceData"
import ExperienceCard from "./ExperienceCard"

const Education = () => {
  return (
    <>
      <section className='Resume' id='education'>
        <div className='container top'>
          <div className='heading text-center uppercase'>
            <h1>My Resume</h1>
          </div>

          <div className='content-section mtop d_flex'>
            <div className='left'>
                <div className='heading'>
                    <h4>2007-Present</h4>
                    <h2>Education</h2>
                </div>

                <div className='content'>
                    {EducationData.map((val, id) => {
                         return  <EducationCard key={id} title={val.title} year={val.year} rate={val.rate} desc={val.desc} />
                      
                   
                    })}

                </div>
            </div>
            <div className='left'>
              <div className='heading'>
                <h4>2022-present</h4>
                <h2>Experience</h2>
              </div>

              <div className='content'>
                {ExperienceData.map((val, index) => {
                  return <ExperienceCard key={index} title={val.title} year={val.year}  desc={val.desc} />
                  
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Education