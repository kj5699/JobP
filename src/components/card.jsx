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
            <div className='card-footer'>
                <NavLink to={'/'+ candidate.id}> Show Details</NavLink>
                <h6>
                    {candidate.currentStatus!=='all'&&candidate.currentStatus!==null?candidate.currentStatus:null}
                </h6>
            </div>
        </div>
    )
}
