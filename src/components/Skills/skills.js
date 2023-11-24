import React from 'react'
import './skills.css';
import JavaProgran from'../../assets/ui-design.png'
import WebDesign from'../../assets/website-design.png'
import AppDesign from'../../assets/app-design.png'
const Skills = () => {
  return (
    <section id='skills'>
    <span className="skillTitle">Skills</span>
    <span className="skillDesc">As a Software Engineer with a passion for technology and innovation, 
    I bring a strong foundation in computer science and a proven ability to learn new technologies quickly.
     I am a graduate of the CDAC Course from Acts Chennai, where I honed my skills in software development. 
    Now, as I actively seek new opportunities to launch my career, 
    I am excited about the prospect of joining a dynamic team where I can apply my passion,
     expertise, and commitment to innovation. </span>
       <div className="skillBars">
       <div className="skillBar">
            <img src={JavaProgran} alt="UIDesign" className="skillBarImg" />
            <div className="skillBarText">
            <h2>Java Programming</h2>
            <p>This includes a strong understanding of core concepts such as object-oriented programming, data structures, and algorithms.</p>
            </div>
       </div>
       <div className="skillBar">
            <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
            <div className="skillBarText">
            <h2>Web Design</h2>
            <p>I have Knowledge in web development using core technologies such as HTML, CSS, and JavaScript. Additionally, I have knowledge of the React framework, allowing me to build modern and efficient user interfaces.
             My skills extend to creating dynamic and responsive web applications.</p>
            </div>
       </div>
       <div className="skillBar">
            <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
            <div className="skillBarText">
            <h2>Database Management</h2>
            <p> I have knowledge designing and managing relational databases. My expertise includes writing complex queries, optimizing database performance, and ensuring data integrity.<br></br>Skilled in NoSQL database management using MongoDB.</p>
            </div>
       </div>
       <div className="skillBar">
            <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
            <div className="skillBarText">
            <h2>Computer Programming/Framework</h2>
            <ul>
            <li>Java</li>
            <li>React</li>
            <li>JavaScript</li>
            <li>HTML/CSS</li>
            <li>C#/.Net</li>
            </ul>
            <ul>
            <li>Spring</li>
            <li>Asp.Net</li>
            <li>React Js</li>
            </ul>
            </div>
       </div>
       </div>
    </section>
  )
}

export default Skills
