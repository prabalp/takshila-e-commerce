import React from 'react'
import './Cnav.css'
import pic from './imgs/img1.svg'

function Cnav() {
   


    return (
        <div className='mid'>
            <div className="mid space card">
                {/* for basic info about the page */}
                <h1>Welcome to Takshila Learning</h1><br/>
            </div>
            <div className="mid space">
                {/* img */}
                <img src={pic} alt='astudyimage' width='500'/>
            </div>
        
        </div>
    )
}

export default Cnav
