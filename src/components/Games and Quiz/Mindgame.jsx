import {  useRef } from "react";
import Button from 'react-bootstrap/Button';
function Mindgame()
{
    let vis=false;

    let count=1;
    let c=0;
    const blue = useRef(null);
    const red = useRef(null);
    const green = useRef(null);
    const yellow = useRef(null);  
    let arr3=[];
    let arr2=[];
    function game() 
    {
        arr3=[];
        arr2=[];
        glowColors(count, 0);
    }

    function glowColors(totalCount, currentIndex) 
    {
        if (currentIndex < totalCount)
        {
            const randomIndex = Math.floor(Math.random() * 4);
            if (randomIndex === 0) 
            {
                glowAndReset(red, "red");
                arr2.push("red");
            } 
            else if (randomIndex === 1) 
            {
                glowAndReset(blue, "blue");
                arr2.push("blue");
            } 
            else if (randomIndex === 2)
            {
                glowAndReset(green, "green");
                arr2.push("green");
            } 
            else 
            {
                glowAndReset(yellow, "yellow");
                arr2.push("yellow");
            }
            setTimeout(
                () => 
                {
                    glowColors(totalCount, currentIndex + 1);
                }, 1500);
        }    
        else 
        {
            vis=true;
        }
    }

    function glowAndReset(element, color)
    {
        element.current.style.backgroundColor = "white";
        setTimeout(() => 
        {
            element.current.style.backgroundColor = color;
        }, 1000);
    }

    function coloor(element,color)
    {   
        if(vis)
        {
           ()=> element.current.style.backgroundColor = "white";
        setTimeout(() => {
            element.current.style.backgroundColor = color;
        }, 200);
            arr3.push(color);
            if(arr2[c]!==arr3[c])
            {
                alert("game over you lost it")
                window.location.reload();
                return
            }
            else{
            c=c+1;
            if(c===count)
                {
                    count=count+1;
                    vis=false;
                    alert(`level ${count}`)
                    c=0;
                    setTimeout(()=>game(),2000);
                }
            }
        }
    }
return(
    <div className="main-doc" id="mind-comp">
        <h1 style={{fontSize:"50px",color:"yellowgreen",fontWeight:"bolder"}}>Guess the color</h1>
    <div className="main-body">
        <div className="red" ref={red} onClick={()=>coloor(red,"red")}></div>
        <div className="blue" ref={blue} onClick={()=>coloor(blue,"blue")}></div>
    </div>
    <div className="main-body">
        <div className="green" ref={green} onClick={()=>coloor(green,"green")}></div>
        <div className="yellow" ref={yellow} onClick={()=>coloor(yellow,"yellow")}></div>
    </div>
    <div className="main-body-buttons">
    <Button style={{marginTop:"10px"}} onClick={()=>game()}  variant="primary">start</Button>
      <Button style={{marginTop:"10px",marginLeft:"20px"}} onClick={()=>window.location.reload()}  variant="secondary">Restart</Button>
    </div>
</div>
)
}
export default Mindgame;
