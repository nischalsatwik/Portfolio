import { useState } from "react";
import Button from 'react-bootstrap/Button';
export default function Tictactoe(){
    const [vis,setVis]=useState(false);
    const [vis1,setVis1]=useState(false);
    const [winner,setWinner]=useState("")
    const [inputval,setInputval]=useState("X");
    const [count,setCount]=useState(0);
    const [board,setboard]=useState(Array(9).fill(""));
    const[multi,setMulti]=useState(false);
    const[single,setSingle]=useState(true);
    async function solo(index)
    {
        if (vis1 === true)
        {
            return;
        }
        if (board[index] === "")
        {
            board[index] = "X";
            const newBoard = [...board];
            setboard(newBoard);
            const newwinner = checkwinner(newBoard);
            if (newwinner)
            {
                setWinner(newwinner);
                setVis1(true);
                return;
            }
        }
        setCount(prev => prev + 1);
        await computer();
    }
    
    async function computer()
    {
        if (vis1 === true)
        {
            return;
        }
        let arr = [];
        for (let i = 0; i < board.length; i++)
        {
            if (board[i] === "")
            {
                arr.push(i);
            }
        }
        let randomIndex = Math.floor(Math.random() * arr.length);
        await new Promise((resolve,reject)=>{
            setTimeout(()=>{resolve()},1000);
            board[arr[randomIndex]]="O";
        })
        board[arr[randomIndex]] = "O";
        const newBoard = [...board];
        setboard(newBoard);
        const newwinner = checkwinner(newBoard);
        if (newwinner)
        {
            setWinner(newwinner);
            setVis1(true);
            return;
        }
        setCount(prev => prev + 1);
    }
    function handle(index){
        if(vis===true)
        {
            return;
        }
        if(board[index] ===""){
        if(count%2==0)
        {
            setInputval("O");  
        }
        else{
            setInputval("X");
        }
        const newBoard = [...board];
      newBoard[index] = inputval;
      setboard(newBoard);
       const newwinner=checkwinner(newBoard);
       if(newwinner)
       {
        setWinner(newwinner);
        setVis(true);
            return 
       }
       
        setCount(prev=>prev+1);
    }
    }
    function checkwinner(board){
        const winningcombinations=[
            [0,1,2],[3,4,5],[6,7,8],
            [0,3,6],[1,4,7],[2,5,8],
            [0,4,8],[2,4,6]
        ];
        for(let comb=0;comb<winningcombinations.length;comb++)
        {
            const [a,b,c]=winningcombinations[comb];
            if(board[a]===board[b]&&board[a]===board[c]&&board[b]===board[c])
            {
                return board[a];
            }
        }
        return null;
    }
    return(
    <div className="tic" id="tic-comp">
        <h1  style={{fontSize:"50px",color:"yellowgreen",fontWeight:"bolder"}}>Tic-Tac-Toe</h1>
        <p style={{color:"white"}}>Please click on the Vs comp to play with computer or multiplayer to play with your friend
            and start by clicking on the boxes. All the best
        </p>
        <div style={{marginTop:"30px"}}>
        <div className="tic-1">
                <div onClick={()=>{(!single&&solo(0))||(multi&&handle(0))}} className="div11">{board[0]}</div>
                <div onClick={()=>{(!single&&solo(1))||(multi&&handle(1))}} className="div11">{board[1]}</div>
                <div onClick={()=>{(!single&&solo(2))||(multi&&handle(2))}} className="div11">{board[2]}</div>
            </div>
            <div className="tic-1"> 
                <div onClick={()=>{(!single&&solo(3))||(multi&&handle(3))}} className="div11">{board[3]}</div>
                <div onClick={()=>{(!single&&solo(4))||(multi&&handle(4))}} className="div11">{board[4]}</div>
                <div onClick={()=>{(!single&&solo(5))||(multi&&handle(5))}} className="div11">{board[5]}</div>
            </div>
            <div className="tic-1">
                <div onClick={()=>{(!single&&solo(6))||(multi&&handle(6))}} className="div11">{board[6]}</div>
                <div onClick={()=>{(!single&&solo(7))||(multi&&handle(7))}} className="div11">{board[7]}</div>
                <div onClick={()=>{(!single&&solo(8))||(multi&&handle(8))}} className="div11">{board[8]}</div>
            </div>
        </div>
        {(count===9||vis) && <p style={{color:"white"}}  className="tick-win">{winner==="X"||winner==="O"?`${winner} won the game`:"Draw game"}</p>}
        {(count===9||vis1) ? (winner==="X" ? <p style={{color:"white"}}>You are the winner</p> : winner==="O" ? <p style={{color:"white"}}>Computer is the winner</p> : <p style={{color:"white"}}>Draw</p>) : null}
        <div className="tic-back">
        <Button variant="primary" style={{marginTop:"10px",padding:"2px 5px",marginRight:"5px"}} onClick={()=>{!multi&&setSingle(false)}}>Vs Comp</Button>
        <Button variant="primary" style={{marginTop:"10px",padding:"2px 5px",marginRight:"5px"}} onClick={()=>{single&&setMulti(true)}}>Multi Player</Button>
        <Button variant="secondary" style={{marginTop:"10px",padding:"2px 5px"}} onClick={()=>window.location.reload()}>Restart</Button>
        </div>
    </div>
    )
} 