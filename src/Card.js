import React from 'react'
import './Card.css'

function Card(props) {
    return (
        <div className='Card'>
            <h1>{props.info}</h1>
        </div>
    )
}

export default Card
