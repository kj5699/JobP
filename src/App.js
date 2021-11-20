
import './App.css';
import React ,{ useEffect, useContext} from 'react';

import Homepage from './pages/homepage';
import {CandidateContext} from './candiate_context';
import { Routes, Route, useLocation} from "react-router-dom";
import Candidate from './components/candidate';


const  App=()=> {
    const context = useContext(CandidateContext)
    useEffect(()=>{
      getCandidates()
  },[])
    const getCandidates =async()=>{
      try{
          const data= await fetch('https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json')
          const candidates_ =await data.json()
          console.log(candidates_)
          context.setCandidates(candidates_)
      }catch(e){
          console.log('Error', e.message)
      }
  } 
  
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Homepage />}></Route>
        <Route exact path='/shortlisted' element={<Homepage />}></Route>
        <Route exact path='/rejected' element={<Homepage />}></Route>
        <Route path='/:id' element={<Candidate />}></Route>
      </Routes>
    </div>
  );
}

export default App;
