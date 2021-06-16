import React from 'react'
import './Info.css'
import Box from './Box'
import stdimg from './img/img1.jpg'

function Info() {
    return (
        <div className='InfoParent'>
        <div className='Register mid bod space'>
            <div className = 'info mid bod space'>
                {/* <div>
                Brief intro about the course

                </div>
                <button>
                    Register
                </button>
                <button>
                    More Info
                </button> */}
                <Box/>
            </div>
            <div className="pic mid bod space" >
                <img src={stdimg} width='600px'/>
            </div>
            

        </div>

        <div className='subscription mid bod space'>
            <h3>Take your preperation to next level with Takshila Learning</h3>
            <div className='benefits mid bod'>

                <div className='benif mid bod space1'> <h4>Benefit 1...blas blah bhal bhah blah blah</h4> </div>
                <div className='benif mid bod space1'> <h4>Benefit 2...blas blah bhal bhah blah blah</h4> </div>
                <div className='benif mid bod space1'> <h4>Benefit 3...blas blah bhal bhah blah blah</h4> </div>
                <div className='benif mid bod space1'> <h4>Benefit 4...blas blah bhal bhah blah blah</h4> </div>
            </div>
        </div>

        <div className="courseInfo mid bod space">
            <h2>More info about the course</h2>
           
            
            <h6>
            Mathematics (from Greek: μάθημα, máthēma, 'knowledge, study, learning') includes the study of such topics as quantity (number theory),[1] structure (algebra),[2] space (geometry),[1] and change (analysis).[3][4][5] It has no generally accepted definition.[6][7]

            Mathematicians seek and use patterns[8][9] to formulate new conjectures; they resolve the truth or falsity of such by mathematical proof. When mathematical structures are good models of real phenomena, mathematical reasoning can be used to provide insight or predictions about nature. Through the use of abstraction and logic, mathematics developed from counting, calculation, measurement, and the systematic study of the shapes and motions of physical objects. Practical mathematics has been a human activity from as far back as written records exist. The research required to solve mathematical problems can take years or even centuries of sustained inquiry.
                
            Rigorous arguments first appeared in Greek mathematics, most notably in Euclid's Elements.[10] Since the pioneering work of Giuseppe Peano (1858–1932), David Hilbert (1862–1943), and others on axiomatic systems in the late 19th century, it has become customary to view mathematical research as establishing truth by rigorous deduction from appropriately chosen axioms and definitions. Mathematics developed at a relatively slow pace until the Renaissance, when mathematical innovations interacting with new scientific discoveries led to a rapid increase in the rate of mathematical discovery that has continued to the present day.[11]
                
            Mathematics is essential in many fields, including natural science, engineering, medicine, finance, and the social sciences. Applied mathematics has led to entirely new mathematical disciplines, such as statistics and game theory. Mathematicians engage in pure mathematics (mathematics for its own sake) without having any application in mind, but practical applications for what began as pure mathematics are often discovered later
            </h6>
        </div>


        {/* demo lectures */}
        <div className='subscription mid bod space'>
            <h3>Demo Classes</h3>
            <div className='benefits mid bod'>

                <div className='benif mid bod space1'> <h4>Class 1...blas blah bhal bhah blah blah</h4> </div>
                <div className='benif mid bod space1'> <h4>Class 2...blas blah bhal bhah blah blah</h4> </div>
                <div className='benif mid bod space1'> <h4>Class 3...blas blah bhal bhah blah blah</h4> </div>
                <div className='benif mid bod space1'> <h4>Class 4...blas blah bhal bhah blah blah</h4> </div>
            </div>
        </div>

        
        </div>
       
    )
}

export default Info
