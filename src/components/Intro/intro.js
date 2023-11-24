import React from 'react';
import'./intro.css';
import bg from '../../assets/image.png'
import btnImg from '../../assets/hireme.png'
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
    <div className="introContact">
    <span className="hello">Hello,</span>
    <span className="introText">I'm <span className="introName">Rajashekhar</span><br/>Software Engineer</span>
    <p className="introPara">I am a skilled Software Engineer with exprience in creating<br/> web application.</p>
    <Link><button className="btn"><img src={btnImg} alt="Hire me" className='btnImg' />Hire me</button></Link>
    </div>
    <img src={bg} alt="" className="bg" />
    </section>
  )
}

export default Intro
