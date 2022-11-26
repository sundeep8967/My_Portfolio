import React from "react"
import "./Projects.css"
import Card from "./Card"
import Projects_Data from "./ProjectsData"

const Projects = () => {
  return (
      <>
          
      <section className='Portfolio top' id='projects'>
        <div className='container'>
            <div className='heading text-center uppercase'>
                <h1>Projects</h1>
            </div>

            <div className='content grid'>
                {
                    Projects_Data.map((value, index) => {
                      return (
                        <Card
                            key={index}
                            image={value.image}
                            category={value.category}
                            totalLike={value.totalLike}
                            title={value.title}
                            language={value.languages}
                            content={value.content}
                            gitlink={value.gitlink}
                        />)
                })}

            
            </div>
        </div>
      </section>
    </>
  )
}

export default Projects