import React from 'react'
import '../Projects/Projects.scss'
 



function ProjectCom(props) {
    return (
        <>
            <div data-aos="zoom-in"  style={{height:"310px"}} className="project-outer text-center col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12  ">
                <div className="project-inner">
                    <img src={props.img} width="100%" height="80%" />
                    <h5>{props.title}</h5>
                    <p>{props.details}</p>
               
                </div>
            </div>
        </>
    )
}

function Achivments() {
    return (    
        <>
 
<div ></div>

 <hr/>
<h1 data-aos="zoom-in" id="about" className="text-center p-1 pb-0"> Achivment </h1>

<br/>
 
            <div className="container-fluid">
                <div className="row project-row" >

                    <ProjectCom img="../../certificates/eduonix-js-jquery.jpg" title="Frontend Developer" details="Niche website project" />

                    <ProjectCom img="../../certificates/full-stack-web.jpg" title="React Js Certificate" details="React-js Web Developer" />

                    <ProjectCom img="../../certificates/3" title="Responsive  Certificate" details="Complete Responsive Web Development" />
                    

                    <ProjectCom img="../../certificates/full-stack-web.jpg" title="Backend Developer" details="" />
 
 
                </div>
            </div>
            <div id="project"></div>

        </>
    )
}

export default Achivments
