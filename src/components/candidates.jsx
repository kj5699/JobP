import React from 'react'
import { Card } from './card'

const Candidates = ({candidates}) => {
    return (
        <div className ='container'>
                {candidates.map((c,index)=>(
                    <Card key={index} candidate={c} />
                ))}
            </div>
    )
}

export default Candidates
