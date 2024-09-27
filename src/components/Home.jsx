import code from "../Images/code12.png"
function Home(){
     
    return(
        <div className="home" id="home-comp">
            <h1 className="info-head"><span style={{color:"#FECC1B"}}>const </span><span style={{color:"#8ECDFF"}}>Hi</span>
            =<span style={{color:"#A4A4A4"}} >"</span>I&apos;m <span style={{color:"aquamarine"}}>Nischal Satwik</span >.
            <span style={{color:"rgb(107 217 104)"}}>A fullstack developer</span>. I&apos;m learning various 
            technologies and implementing them. I believe
                <span style={{color:"rgb(254 204 27)"}}> Learning is fun</span>.<span style={{color:"#A4A4A4"}} >"</span>
            </h1>
            <div className="home-img">
                <img className="code" src={code}></img>
            </div>
        </div>         
    );
 }
 export default Home