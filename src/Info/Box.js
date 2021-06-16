import React from 'react'
import './Box.css'

function Box() {
    return (
        <div className='Box'>
            <div className='boxInfo' >
                <h1 className='txtStyl0'>Course name</h1>
                <h4>Some info about the course blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah</h4>
            </div>
            <div className='btns'>
                <div className='btn'> Register</div>
                <div className='btn'> More Info</div>
            </div>
        </div>
    )
}

export default Box
