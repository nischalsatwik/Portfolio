import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Home from "./components/Home";
import Business from "./components/Businesscard";
import Games from "./components/Game";
import Navigation from './components/Navigation';
import Main from './components/Main';
function App() {
  

  return (
    <div>
        <Navigation></Navigation>
        <Home/>l
        <div className='next'>
        <h2>My First Quote</h2>
        <p><span style={{color:"white"}}>&quot; </span>If Determination and 
          Dedication comes together then Justification 
          automatically comes to your life <span style={{color:"white"}}>&quot;</span><br></br><span style={{fontSize:"20px", color:"white"}}>which I said it in my school and started implementing it in my life.</span></p>
        </div>
        <Main></Main>
        <div className='upnext'>
          <h1>The above all mentioned are <span style={{color:"#f44250"}}>Info</span>, <span style={{color:"#f44250"}}> Work-experience</span>,
          <span style={{color:"#f44250"}}> Acheivements</span>.<br></br>I've a work experience of <span style={{color:"#3992ff"}}>2.5 Years</span> and
          haven't acheived alot but for sure <span style={{color:"#d83bd2"}}>I'm going to achieve many things</span>.</h1>
        </div>
        <Business></Business>
        <div className='last'>
          <h1 className="game-head" id="games-comp">Games</h1>
          <h2>The below games taught me how to implement logic. <span style={{color:"#d83bd2"}}>Learning from tutorials is easy but implementing on your
           own will always helps you to learn programming</span>. These games like <span style={{color:"rgb(107 217 104)"}}>Ticatactoe</span>, <span style={{color:"rgb(107 217 104)"}}>guess the color</span> and <span style={{color:"rgb(107 217 104)"}}>guess the number</span> all we used to play
           in childhood made me curious that how they were written. Just tried these. 
           <span style={{color:"#8ECDFF"}}>Hope you play and enjoy these small games</span>. </h2>
        </div>
        <Games></Games>
        <div>
        <h1 style={{marginTop:"250px", color:"white",fontSize:"50px", fontWeight:"bolder"}}>Thank you so much for 
          <span style={{color:"aquamarine"}}> viewing my page</span> and <span style={{color:"aquamarine"}}>playing the above games</span>. For any improvements
          please contact me using my <span style={{color:"gold"}}>Businesscard</span>.
        </h1>
        </div>
      </div>   
  )
}

export default App
