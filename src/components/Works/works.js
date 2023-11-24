import React from 'react'
import './works.css'
import Homematecleaning from "../../assets/Homematelogo.png"
// import portfolio2 from "../../assets/portfolio-2.png"
// import portfolio3 from "../../assets/portfolio-3.png"
// import portfolio4 from "../../assets/portfolio-4.png"
// import portfolio5 from "../../assets/portfolio-5.png"
// import portfolio6 from "../../assets/portfolio-6.png"

const Works = () => {
  return (
    <section id='works'>
    <h2 className="workstitle">Look at My Projects</h2>
    <span className='worksDesc'>If you are a Java developer who is up-to-date with the current system, you can build mobile applications and work with big data. WIth good Java skills, 
    you can explore opportunities to work on cloud-based applications.</span>
<div className="projects">
<div className="project">
<img src={Homematecleaning} alt="" className="projectImg" />
<div className="projecttText">
<h2>Hommate Cleaning Service</h2>
<p>HomeMate is a web application . 
The main objective of this project is to provide various cleaning services under one platform.
Our project contains basic and essential modules like authentication of the customer and vendor to
avoid unwanted traffic.Other modules include the daily database backup to avoid uncertain loss of data. We also have the provision of order ID for each order to keep track of all the order metadata. The user can also use our feedback portal to share their reviews.</p>
</div>
</div>
<div className="project">
<img src={Homematecleaning} alt="" className="projectImg" />
<div className="projecttText">
<h2>Personal Portfolio Website</h2>
<p>Designed and developed a dynamic personal portfolio website to showcase my skills, projects, 
and professional journey. The website serves as a central hub for potential employers and collaborators to explore my work and capabilities.
<br></br>Responsive layout to ensure accessibility across various devices.</p>
<h4>Technologies Used</h4>
<p>Built using HTML, CSS, and JavaScript for the frontend, with React.js for dynamic components. 
Leveraged Bootstrap for responsive design and utilized Git for version control.</p>
</div>
</div>
</div>
   {/*} <div className="worksImgs">
    <img src={portfolio1} alt="portfolio-1" className="worksImg" />
    <img src={portfolio2} alt="portfolio-2"  className="worksImg" />
    <img src={portfolio3} alt="portfolio-3"  className="worksImg" />
    <img src={portfolio4} alt="portfolio-4"  className="worksImg" />
    <img src={portfolio5} alt="portfolio-5"  className="worksImg" />
    <img src={portfolio6} alt="portfolio-6"  className="worksImg" />
  </div>*/}

    <button className="workBtn">See More</button>
    </section>
  )
}

export default Works
