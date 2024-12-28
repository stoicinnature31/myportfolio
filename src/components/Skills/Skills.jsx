import React  from 'react'
import './Skills.css'
import { SiPostman } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";

const Skills = () => {




  return (
    <div>
      <div className="skills" id='skills'><h1>MY SKILLS</h1></div>
      
      <div className="mySkills">
        <div className="skill">
        <i className='bx bxl-c-plus-plus'></i>
        <div className="percentage">90%</div>
        <div className="skillName">C++</div>
        </div>
        <div className="skill">
        <i class='bx bxl-html5' ></i>
        <div className="percentage">90%</div>
        <div className="skillName">HTML5</div>
        </div>
        <div className="skill">
        <i className='bx bxl-css3' ></i>
        <div className="percentage">90%</div>
        <div className="skillName">CSS3</div>
        </div>
        <div className="skill">
        <i className='bx bxl-javascript' ></i>
        <div className="percentage">65%</div>
        <div className="skillName">JAVASCRIPT</div>
        </div>
        <div className="skill">
        <i class='bx bxl-typescript'></i>
        <div className="percentage">65%</div>
        <div className="skillName">TYPESCRIPT</div>
        </div>
        <div className="skill">
        <i className='bx bxl-react' ></i>
        <div className="percentage">85%</div>
        <div className="skillName">REACT</div>
        </div>
        <div className="skill">
        <RiNextjsFill />
        <div className="percentage">80%</div>
        <div className="skillName">NEXT</div>
        </div>
        <div className="skill">
        <i className='bx bxl-bootstrap' ></i>
        <div className="percentage">80%</div>
        <div className="skillName">BOOTSTRAP</div>
        </div>
        <div className="skill">
        <i className='bx bxl-mongodb' ></i>
        <div className="percentage">50%</div>
        <div className="skillName">MONGODB</div>
        </div>
        <div className="skill">
        <SiPostman />
        <div className="percentage">80%</div>
        <div className="skillName">POSTMAN</div>
        </div>
        <div className="skill">
        <i className='bx bxl-nodejs' ></i>
        <div className="percentage">50%</div>
        <div className="skillName">NODEJS</div>
        </div>
        <div className="skill">
        <i className='bx bxl-tailwind-css' ></i>
        <div className="percentage">70%</div>
        <div className="skillName">TAILWIND-CSS</div>
        </div>
        <div className="skill">
        <i className='bx bxl-visual-studio' ></i>
        <div className="percentage">50%</div>
        <div className="skillName">VS CODE</div>
        </div>
        <div className="skill">
        <i className='bx bxl-redux' ></i>
        <div className="percentage">50%</div>
        <div className="skillName">REDUX</div>
        </div>
        <div className="skill">
        <FaGithub />
        <div className="percentage">70%</div>
        <div className="skillName">GIT/GITHUB</div>
        </div>
      </div>
    </div>
  )
}

export default Skills
