import React from 'react'
import { NavLink } from 'react-router-dom'
import './card.css'

export const Card = ({candidate}) => {
    return (
        <div className="card">
            <div className="card-image">
                <img src= {candidate?.Image} alt=''></img>
            </div>
            <div className='card-body'>
                <h3>{candidate?.name}</h3>
            </div>
            <NavLink to={'/'+ candidate.id}> View More</NavLink>

        </div>
    )
}
