
import { useState } from 'react';
import './App.css';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';
import PlayGround from './components/PlayGround';
import {
  BrowserRouter as Router,
  
  Route,
  // Link,
  Routes,
  BrowserRouter
} from "react-router-dom";
import Starter from './components/Starter';

document.title="Virtual Hand Cricket-Toss Area"

function App() {
const [winner,setWinner]=useState('');
const [show,setShow]=useState(false);
setTimeout(()=>{
setShow(true);
},4000)
  return (
    <div className="body">
      <BrowserRouter>
      {!show?<Starter/>:
            
            (
              <>
    <Header/>
    <Routes>
      <Route path='/' element={<Body winner={winner} setWinner={setWinner}/>}/>
    <Route path='/play' element={<PlayGround toPlay={winner}/>}/>
    
    </Routes>
    <Footer/>
    </>)}
    </BrowserRouter>
            
    </div>
  );
}

export default App;
