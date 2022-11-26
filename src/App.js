import React, {useEffect, useState} from 'react'
import Header from './components/header/Header'
import './App.css'
import Home from './components/home/Home'
import Projects from './components/projects/Projects'
import Education from './components/education/Education'
// import Blog from './components/blog/Blog'
import Contact from './components/contact/Contact'
import Skills from './components/skills/Skills'
import Preloader from './components/preloader/Preloader'
const App = () => {

  const [load, setload] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setload(false)
    },4000)
  })
  useEffect(() => {
    
    let progress = document.getElementById('progressbar')
    let totalHeight = document.body.scrollHeight - window.innerHeight
    window.onscroll = () => {
      let progHeight = (window.pageYOffset / totalHeight) * 100;
      progress.style.height = progHeight + "%";
    }
  
  }, [])
  

  return (
    <>
      {
        load ? <Preloader/> :
          <>
            
              <div id="progressbar"></div>
              <div id="scrollbar"></div>
              <Header />
              <Home />
              <Education />
              <Skills/>
              <Projects />
              {/* <Blog /> */}
              <Contact />
        </> 
  }
     
      </>
  )
}

export default App
