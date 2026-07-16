import React, { useState,useEffect } from 'react'
import user from '../images/user.png'
import computer from '../images/computer.png'
import "./play.css"

import { Link } from 'react-router-dom';

export default function PlayGround({toPlay}) {
  const [yourChoice,setYourChoice]=useState('')
  const [compChoice,setCompChoice]=useState('')
  const [player,setPlayer]=useState(toPlay);
  const [yourRun,setYourRun]=useState(0);
 const [compRun,setCompRun]=useState(0);
  const [youOut,setyouOut]=useState(false);
  const [compOut,setcompOut]=useState(false);
  const [Winner,setWinner]=useState('');
 document.title="Virtual Hand Cricket-Play Ground"

  useEffect(() => {
  if (youOut && compOut) {
    if (yourRun > compRun) {
      alert("You are Winner");
      setWinner('You');
    } else if (compRun > yourRun) {
      alert("Comp is Winner");
      setWinner('Comp')
    }
  }
}, [youOut, compOut, yourRun, compRun]);


  const chosed=(e)=>{
    let choice=Number(e.target.innerText);
    setYourChoice(choice);
    let a=Math.floor(Math.random()*6+1);
    setCompChoice(a);
     
    if(player==="You"){
      if(choice===a){
        setPlayer('Comp');
        alert('You are Out');
        setyouOut(true)
       
      }else{
        setYourRun(yourRun+choice);
      }

    }else{
      if(choice===a){
        setPlayer('You');
        alert('Comp are Out');
        setcompOut(true)
   
      }else{
        setCompRun(compRun+a);
      }
    }

  }

  return (
    <div  className='main2'>
        <h2>Play Ground</h2>

        <img id='user' src={user} alt='user'/>
        <div id='user-choice'>
        <p className='c'>Your Choice</p>
          <p className='value'>{yourChoice}</p>
        </div>

        <img id='computer' src={computer} alt='comp'/>
      <div id='computer-choice'>
        <p className='c'>Comp Choice</p>
          <p className='value'>{compChoice}</p>
        </div>

        <div className='runs'>
          <p > Your Runs</p>
          <div>{yourRun}</div>
        </div>

        <div className='com'>
          <p > Comp Runs</p>
          <div>{compRun}</div>
        </div>
      {Winner===''?<div className='bat'>{player} Batting</div>:<><div className='bat'>{Winner} Win </div> <Link className='to' to='/'>Toss Area</Link></>}
        
        <div className='flex'>
          {Winner===""?<button onClick={chosed}  className='but'>1</button>:<button onClick={chosed} disabled className='but'>1</button>}
          {Winner===""?<button onClick={chosed}  className='but'>2</button>:<button onClick={chosed} disabled className='but'>2</button>}
          {Winner===""?<button onClick={chosed}  className='but'>3</button>:<button onClick={chosed} disabled className='but'>3</button>}
          {Winner===""?<button onClick={chosed}  className='but'>4</button>:<button onClick={chosed} disabled className='but'>4</button>}
          {Winner===""?<button onClick={chosed}  className='but'>5</button>:<button onClick={chosed} disabled className='but'>5</button>}
          {Winner===""?<button onClick={chosed}  className='but'>6</button>:<button onClick={chosed} disabled className='but'>6</button>}
        </div>

        </div>
  )
}
