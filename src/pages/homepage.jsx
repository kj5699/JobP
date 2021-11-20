import React, {useState, useEffect, useContext} from 'react';
import { NavLink } from 'react-router-dom';
import Candidates from '../components/candidates';

import './homepage.css';
import {  useLocation} from "react-router-dom";
import {CandidateContext} from '../candiate_context';
const Homepage = props => {
    const [candidates, setCandidates] =useState([])
    const [filterCandidates,setFilterCandidates] = useState([])
    const [searchString,  setSearchString]= useState(null)
    const context= useContext(CandidateContext)
    let location = useLocation();

    useEffect(()=>{
        let filteredCandidates;
        if(location.pathname==='/shortlisted'){
            filteredCandidates=context.getCandidates('shortlisted')
        }else if (location.pathname==='/rejected'){
            filteredCandidates=context.getCandidates('rejected')
        }else{
            filteredCandidates=context.getCandidates('all')
        }
        console.log('filteredCandidates', filteredCandidates)
        setCandidates(filteredCandidates)
        setFilterCandidates(filteredCandidates)
    },[context.candidates , location.pathname])

    useEffect(()=>{
        console.log('calling this')
        if(searchString!==null){
        if(searchString !== '' ){
            let searchedCandidates=candidates.filter(candidate=>candidate.name.toString().toLowerCase().includes(searchString.toLowerCase()))
            console.log('setting this')    
            setFilterCandidates(searchedCandidates)

        }
        else{
            console.log('setting this 2', candidates)
            if(candidates.length>0){
                setFilterCandidates(candidates)
            }
        }
    }

    },[searchString])
    
    const onEditSearchString =(e)=>{
        setSearchString(e.target.value);
        
    }
    console.log('candidates',filterCandidates)
    return (
        
        <div className="introWrapper">
            <div className='homepageHeader'>
                <div className='searchBar'>
                    <input type="text" onChange={onEditSearchString} placeholder ={'Search Candidates'} ></input>
                </div>
                <div className='searchTab'>
                    <NavLink to='/'> All</NavLink>
                    <NavLink to='/shortlisted'>Shortlisted</NavLink>
                    <NavLink to='/rejected'> Rejected</NavLink>
                </div>
                
            </div>
            <Candidates  candidates={filterCandidates}/>
        </div>
    )
}

export default Homepage;
