import React from 'react'
import './Work.css'

const Work = () => {
  return (
    <div className='works' id='works'>
      <div className="myProject">
      <div className="project-title"><i className="fa-solid fa-briefcase"></i><h1>MY PROJECTS</h1></div>
      <div className="projects">
        <a target ="blank" href="https://studyabroadventure.vercel.app/">
            <div className="project">
            <div className="duration">MARCH'24</div>
            <div className="projectName">STUDY ABROAD VENTURE</div>
            <div className="technology">HTML5, CSS3, JAVASCRIPT, BOOTSTRAP</div>
            </div></a>
        
        <a href="https://getweatherdetails.vercel.app/" target ="blank">
            <div className="project">
            <div className="duration">MAY'24</div>
            <div className="projectName">WEATHER FORECAST WEBSITE</div>
            <div className="technology">REACT, CSS3, JAVASCRIPT, REACT HOOKS, POSTMAN</div>
            </div></a>

            <a href="https://movieswizzz.vercel.app/" target ="blank">
            <div className="project">
            <div className="duration">JULY'24</div>
            <div className="projectName">MOVIE WEBSITE</div>
            <div className="technology">REACT, TAILWIND, JAVASCRIPT, POSTMAN, OMDB API</div>
            </div></a>
            <a href="https://searchrecipee.vercel.app/" target ="blank">
            <div className="project">
            <div className="duration">APRIL'24</div>
            <div className="projectName">RECIPE SEARCH</div>
            <div className="technology">JAVASCRIPT, NEXTJS, CSS3</div>
            </div></a>
                
      </div>
      </div>
    
      <div className="myEducation" id='education'>
      <div className="education-title"><i className="fa-solid fa-graduation-cap"></i><h1>MY EDUCATION</h1></div>
      <div className="educations">
        <div className="education">
            <div className="duration">2015-2019</div>
            <div className="projectName">JAWAHAR NAVODAYA VIDYALAYA</div>
            <div className="degree">10th , 96.2%</div>
        </div>
        <div className="education">
            <div className="duration">2019-2021</div>
            <div className="projectName">JAWAHAR NAVODAYA VIDYALAYA</div>
            <div className="degree">12th, 93.8%</div>
        </div>
        <div className="education">
            <div className="duration">2021-NOW</div>
            <div className="projectName">IIT KHARAGPUR</div>
            <div className="degree">B.tech, 6.58/10</div>
        </div>      
       
      </div>
      </div>
    </div>
  )
}

export default Work
