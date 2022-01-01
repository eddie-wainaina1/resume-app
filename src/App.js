import './App.css';
import * as url from './eddie.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faEnvelope,faMobileAlt } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faCodepen, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"

const name="Eddie Wainaina Njoroge"
const email = "njorogeeddie434@gmail.com"
const mobile = "+254740855208"
const codepen = "https://codepen.io/eddie-wainaina1"
const github = "https://github.com/eddie-wainaina1"
const replit = "https://replit.com/@EddieNjoroge"
const colab = "Reach out to view my ML projects"
const linkedin = "https://www.linkedin.com/in/eddie-njoroge-a7346820b/"

const schools = {

};
const certs = {

};
const introduction = ""

function Header(props){
  return(<header className="App-header">
    <div id="heading">
    <img src={url.default} className="App-logo" alt="logo" />
    <h1>Resume</h1>
    </div>
    <p id="info">
    <i>Name: &nbsp;&nbsp;&nbsp;&nbsp;</i>{props.name}<br/>
    <i>Contacts: &nbsp;</i><a href={props.email} className='contacts'><FontAwesomeIcon icon={faEnvelope}/></a>&nbsp;
    <a href={props.mobile} className='contacts'><FontAwesomeIcon icon={faMobileAlt}/></a>&nbsp;
    <a href={props.codepen} className='contacts'><FontAwesomeIcon icon={faCodepen}/></a>&nbsp;
    <a href={props.github} className='contacts'><FontAwesomeIcon icon={faGithub}/></a>&nbsp;
    <a href={props.replit} className='contacts'><FontAwesomeIcon icon={faCode}/></a>&nbsp;
    <a href={props.linkedin} className='contacts'><FontAwesomeIcon icon={faLinkedinIn}/></a><br/>
    <i>Colab: &nbsp;&nbsp;&nbsp;&nbsp;</i> {props.colab}<br/>
    
    </p>
    <h2>Foreword</h2><br/>
    <p id="introduction">{introduction}</p>
  </header>)
}

function Education(props){
  return(<div>

  </div>)
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
      <Education schools={schools} certs={certs}/>
      <br/>
    </div>
  );
}

export default App;
