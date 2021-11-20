import React, {createContext,useState, useEffect} from 'react';

export const CandidateContext = createContext();

function CandidateContextProvider(props){
    const[candidates, setCandidateState] = useState([])
    console.log('Candidates', candidates)

    const setCandidates=(data)=>{
        const candidateArray=[]
        data.forEach(candidate=>{
            let newCandidate= {...candidate, currentStatus:'all'}
            candidateArray.push(newCandidate)
        })
        setCandidateState(candidateArray)
    }
    const getCandidates=(type)=>{

        if (type==='shortlisted'){
            return candidates.filter(candidate=>candidate.currentStatus===type)
        }
        else if(type==='rejected'){
            return candidates.filter(candidate=>candidate.currentStatus===type)

        }else{
            return candidates
        }
    }
    const updateCandidateStatus=(id, status)=>{
        let oldCandidates=[...candidates]
        const  cIndex= oldCandidates.findIndex(candidate=>candidate.id===id)
        if(cIndex>=0){
            oldCandidates[cIndex].currentStatus=status
            console.log(candidates[cIndex], 'index', cIndex)
            setCandidateState(oldCandidates)
        }
        
        
    }
    const getCandidateById= (id)=>{
        return candidates.find(candidate=>candidate.id===id)

    }
    useEffect(() => { 
        console.log('Candidates changed')
        localStorage.setItem("Candidates",JSON.stringify(candidates));
    }, [candidates]);
    return (
        <CandidateContext.Provider value={{candidates,setCandidates, getCandidates,updateCandidateStatus,getCandidateById }}>
            {props.children}
        </CandidateContext.Provider>
        
    );
   
}
export default CandidateContextProvider

