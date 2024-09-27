import insta from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";
import email from "../assets/reshot-icon-email-9E7C2RF3VS.svg";
import git from "../assets/github.svg";
import link from "../assets/linkedin.svg";
import Button from 'react-bootstrap/Button';
import my from "../Images/nischal.jpeg";

function Businesscard(){
    return(
        <div className="busy" id="business-comp">
            <h1>This is my <span style={{color:"gold"}}>Businesscard</span></h1>
            <div className="busy-busy">
                <img className="busy-img" src={my}></img>
                <h1>Jhadtheela Sai Nischal Satwik</h1>
                <h3>Software engineer</h3>
                <div className="busy-body-div">
                    <Button variant="light" className="busy-body-div-email"><a href="mailto:nischalsatwik31@gmail.com"><img className="busy-email-img"src={email}></img>Email</a></Button>
                    <Button variant='primary' className="busy-body-div-link"><a className='busy-body-div-link' href="https://in.linkedin.com/in/sai-nischal-satwik-jhadtheela-912375196"><img className="busy-link-img"src={link}></img>Linkedin</a></Button>
                </div>
                <h2 className='busy-about'>About</h2>
                <p>Results-oriented software engineer with an experience of 2.5 years<br></br> designing and developing innovative solutions.Proficient in programming<br></br> languages Java, Python, Javscript and frameworks React and Springboot. <br></br>Passionate about crafting scalable and efficient software that exceeds user<br></br> expectations. I assure you that I will always be an asset but not a liability. </p>
                <h2 className='busy-skill'>Skills</h2>
                <ul>
                    <li>Python,Java,Javascript, Agile,MS Excel</li>
                    <li>Spring boot,React,MYSQL,GIT</li>
                    <li>Teamwork</li>
                    <li>Time Management</li>
                    <li>Leadership</li>
                    <li>Effective Communication</li>
                </ul>
                <div className="busy-icons">
                    <a href="https://www.instagram.com/nischalsatwik/">
                    <img src={insta} className="busy-insta-img" alt="insta"></img></a>
                    <a href="https://www.facebook.com/profile.php?id=100009892122234">
                    <img src={facebook} alt="fb" className="busy-facebook-img"></img></a>
                    <a href="https://github.com/nischalsatwik">
                    <img src={git} alt="github" className="busy-git-img"></img></a>
                </div>
            </div>  
        </div>
    )
 }
 export default Businesscard