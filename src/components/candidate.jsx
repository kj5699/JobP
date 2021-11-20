import React, { useEffect,useState,useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router';
import './candidate.css';
import {CandidateContext} from '../candiate_context';


const Candidate = () => {
    const [candidate, setCandidate]=useState(null)
    const context= useContext(CandidateContext)
    
    const params=useParams();
    const navigate=useNavigate()
    useEffect(()=>{
        console.log(params)
        setCandidate(prev=>context.getCandidateById(params.id))
    },[context.candidates])
    const selectHander =(e,type)=>{
        e.preventDefault()
        context.updateCandidateStatus(candidate.id,type)
        navigate(-1)
    }
    console.log(candidate)
    return (
        <div className='candidateWrapper'>
            <div className='canditateHeader'>
                <h3>Candidate Details</h3>
                <button onClick={() => navigate(-1)}>Go back</button>
            </div>
            <div className='container'>
            
            
                <div className="candidate-image">
                    <img src= {candidate?.Image} alt=''></img>
                </div>
                <div>
                    <div className='candiate-body'>
                        <h3>{candidate?.name}</h3>
                    </div>
                    <div>
                        <button onClick={(e)=>selectHander(e,'shortlisted')}> Shortlist</button>
                        <button onClick={(e)=>selectHander(e,'rejected')}> Reject</button>
                    </div>
                    {candidate?.currentStatus==='shotlisted' && 
                        <p>The candidate is selected</p>
                    }
                    {candidate?.currentStatus==='rejected' && 
                        <p>The candidate is selected</p>
                    }

                
                </div>
            </div>
            
        </div>
    )
}

export default Candidate
