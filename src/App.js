import './App.css';
import * as url from './eddie.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faEnvelope,faMobileAlt } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faCodepen, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import data from './data';
//import React, { useState,useEffect } from 'react'

const skills= ["Responsive web design","Javascript",
            "Machine design","C++","Python","Django",
          "React-Redux", "Java", "Kotlin"]
const currentlyLearning = [
  "Networking and Security", "Machine Learning", "Mobile Development",
  "Game Development"
]
const name="Eddie Wainaina Njoroge"
const email = "njorogeeddie434@gmail.com"
const mobile = "+254740855208"
const codepen = "https://codepen.io/eddie-wainaina1"
const github = "https://github.com/eddie-wainaina1"
const replit = "https://replit.com/@EddieNjoroge"
const colab = "Reach out to view my ML projects"
const linkedin = "https://www.linkedin.com/in/eddie-njoroge-a7346820b/"

//const schools = data.schools;
const introduction = data.foreword;
const finalWord = data.finalWord;

function Header(props){
  return(<header className="App-header">
    <div id="heading">
    <img src={url.default} className="App-logo" alt="logo" />
    <h1>Resume</h1>
    </div>
    <p id="info">
    <i>Name: &nbsp;&nbsp;&nbsp;&nbsp;</i>{props.name}<br/>
    <i>Contacts: &nbsp;</i><a href={props.email} className='contacts'><FontAwesomeIcon icon={faEnvelope}/></a>&nbsp;&nbsp;
    <i value={props.mobile} className='contacts'><FontAwesomeIcon icon={faMobileAlt}/>({props.mobile})</i>&nbsp;&nbsp;
    <a href={props.codepen} className='contacts'><FontAwesomeIcon icon={faCodepen}/></a>&nbsp;&nbsp;
    <a href={props.github} className='contacts'><FontAwesomeIcon icon={faGithub}/></a>&nbsp;&nbsp;
    <a href={props.replit} className='contacts'><FontAwesomeIcon icon={faCode}/></a>&nbsp;&nbsp;
    <a href={props.linkedin} className='contacts'><FontAwesomeIcon icon={faLinkedinIn}/></a><br/>
    <i>Colab: &nbsp;&nbsp;&nbsp;&nbsp;</i> {props.colab}<br/>
    
    </p>
    <h2>Foreword</h2><br/>
    <p id="introduction">{introduction}</p>
  </header>)
}

function Schools(props){
  // const [school,setSchool] = useState("")
  // useEffect(()=>{
  //   let statement = getSchoolsHTML()
  //   setSchool(statement)
  // },[])
  return(
    <div id="schools">
      <b>University</b> : 2018, Bachelor of Science Mechanical Engineering, Kenyatta University, 
      <br/><b>High School</b> : 2014-2017, Maseno School, A- 
      <br/><b>Primary</b> : -2013, Gilgil D.E.B 
    </div>
  )
}
function Certs(props){
  return <div>
    <h2>Certifications</h2>
    <h3>Freecodecamp.org</h3>
    <a href= "https://www.freecodecamp.org/certification/eddie-w-njoroge/responsive-web-design">Responsive Web Design</a>
    <br/><a href =  "https://www.freecodecamp.org/certification/eddie-w-njoroge/javascript-algorithms-and-data-structures">Javascript Algorithms and Data Structures</a>
  </div>
}

function Education(props){
  return(<div>
    <h2>Education</h2>
    <Schools/>
    <Certs/>
    <br/>
    <Skills/>
  </div>)
}
function Skills(props){
  let mySkills = skills.join(' \n')
  let learning = currentlyLearning.join(', ')
  return(
    <div>
      <h2>Skills</h2>
      <block>{mySkills}<br/>
      <b>Currently Learning</b>: {learning}</block>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Header 
      name = {name}
      email = {email}
      mobile={mobile}
      codepen={codepen}
      linkedin={linkedin}
      replit={replit}
      github={github}
      colab={colab}/>
      <br/>
      <Education className="education"/>
      <br/>
      <h2>Final Word </h2>
      <p>{finalWord}</p>
    </div>
  );
}

export default App;
