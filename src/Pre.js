import React from 'react'
import { useState } from 'react';
import './Pre.css';
import Card from './Card';
import Info from './Info/Info.js'
import { useHistory } from 'react-router-dom';

function Pre() {
    const [level, setlevel] = useState('')
    const [st, setst] = useState(0)
    const history = useHistory();

  
  function clk2(){
    var k6=['English','Mathematics','Creative Arts','Personal Development','Health and Physical education','Hindi','Odia']
    var six12 =['English','Physics','Chemistry','Mathematics','Biology','Physical Education','Music','Computer Science','Robotics']
    var post12=['UPSC','GATE','GMAT','CAT','GRE']

    console.log('clk2 started')
    

    if(level === 'k-6'){
      return k6.map((val)=>{
        return <div className="space" onClick={()=>{
          setst(2)
          history.push('/stage')
        }} >
          <Card info = {val}
        />
          </div>
          
      })
    }else if( level === '6-12'){
      return six12.map((val)=>{
        return <div className="space" onClick={()=>{
          setst(2)
          history.push('/stage')
        }} >
          <Card info = {val} 
        />
          </div>
      })
    }else if(level === 'Post 12'){
      return post12.map((val)=>{
        return <div className="space" onClick={()=>{
          setst(2)
          history.push('/stage')
        }} >
          <Card info = {val} 
        />
          </div>
      })
    }
  }

  function clk1(){
    console.log('clk1 started')
    var arr=['k-6','6-12','Post 12']
    return arr.map((val)=>{
      return <div className="space" onClick={()=>{ 
        console.log(val)
        setlevel(val)
        setst(1)


      }} >
              <Card info={val} />
      </div>
                
      
    })

  }
    return (
        <>
        <div className='Pre'>
        { st === 0 ? <>{clk1()}</>:(st === 1?<>{clk2()}</>:<></>) }
        {console.log(st)}
            
        </div>
        </>
    )
}

export default Pre
