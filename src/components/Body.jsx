import {React,useEffect,useState} from 'react'
import "../components/body.css"
import { Link } from 'react-router-dom';
export default function Body({winner,setWinner}) {
    const [choice,setChoice]=useState('');
    // const [winner,setWinner]=useState('');
    const [number,setNumber]=useState('');

    useEffect(()=>{
        setWinner('');
    },[])
    const chooseE=()=>{
        setChoice('even');
    }
    const chooseO=()=>{
        setChoice('odd');
    }
    const update=(e)=>{
        setNumber(e.target.value);
    }

    const toss=()=>{
        let comp=Math.floor(Math.random()*9);
        let a=parseInt(number)+parseInt(comp);
        if(choice==="even"){
            if(a%2===0){
                setWinner('You')
            }else{
                setWinner('Computer')
            }
        }else{
            if(a%2!==0){
                setWinner('You')
            }else{
                setWinner('Computer')
            }
        }
    }
  return (
    <div className='main'>
        <h2 id='heading'>Toss Area</h2>
        <h3 id="heading2">Choose Even or Odd</h3>
        <pre>
                <button className='button even' onClick={chooseE}>Even</button>      <button onClick={chooseO} className='button odd' >Odd</button>


        
        </pre>

        <p id='p'>Enter a Number :   {choice===""?<input disabled type='number' placeholder='Enter a Number'/> :<input value={number} onChange={update}  type='number' placeholder='Enter a Number'/>} {number===""||winner!==""?<button disabled className='t'  >Toss</button>:<button className='t' onClick={toss} >Toss</button>}</p>
            
        <div id='winner'>{winner===""?"Toss to be done":`${winner} Wins The Toss`}</div>

       {winner===""?<p id='ao'>Do The Toss</p>: <Link id='ro' to='/play'>  Play Ground</Link>}
    </div>

  )
}
