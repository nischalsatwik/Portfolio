import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {useState,useEffect} from 'react'
export default function NumberGame(){
    const p1=["Your guess is right.","Your Chances are over. ","Your guess is high.","Your guess is low."];
    const [p2,setP2]=useState(0);
    const [p3,setP3]=useState([]);
    const [Count,setCount]=useState(0);
    const [randomNumber, setRandomNumber] = useState(null);
    const [p5,setp5]=useState("");
    const [disable,setDisable]=useState(false);
  useEffect(() => {
    setRandomNumber(Math.floor(Math.random() * 100) + 1);
  }, []);
    function calculate()
    {
        setCount(prev=>prev+1)
       
         if(Count===6)
        {
            if(p2==randomNumber)
                {
                    setP3([...p3,p2]);
                    setp5(p1[0]+" "+randomNumber);
                    setDisable(true);
                }
            else{
             setp5(p1[1]);
             setP3([...p3,p2]);
            setP2(prev=>prev);
            setDisable(true);
        }}
        else if(p2==randomNumber)
            {
                setP3([...p3,p2]);
                setp5(p1[0]+" "+randomNumber);
                setDisable(true);
            }
        else if(p2>randomNumber)
        {
            setp5(p1[2]);
            setP3([...p3,p2]);
            setP2(prev=>prev);
        }
        else{
            setp5(p1[3]);
            setP3([...p3,p2]);
            setP2(prev=>prev);
        }
    }
    
    return(
            <div className='guess-game' id="guess-comp">
                <h1 style={{fontSize:"50px",color:"yellowgreen",fontWeight:"bolder"}}>Guess the number</h1>
                <p style={{fontSize:"20px",marginTop:"40px"}}>Find the number between 1 to 100 and click on guess. Below your guesses will <br></br>be listed and your guess will be told that it's high or low and you will be given 7 chances.<br></br> Try your best</p>
                <InputGroup className="mb-3 guess-input" style={{width:"540px"}}>
                    <Form.Control 
                        placeholder="Enter the number"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        onChange={e=>setP2(e.target.value)}
                    />
                    <Button variant="outline-secondary" id="button-addon2" onClick={calculate} disabled={disable? true : false} >
                    Click here
                    </Button>
                </InputGroup>
                <p>{p5}</p>
                <h1>Your guesses: {p3.join(",")}</h1>
                {disable && <p style={{marginTop:"20px"}}>The magic number chosen is : {randomNumber}</p>}
                <Button style={{marginTop:"20px"}} onClick={()=>window.location.reload()}  variant="secondary">Restart</Button>
            </div>
        );      
}