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

                    <ProjectCom img="../../certificates/eduonix-js-jquery.jpg" title="Frontend Developer" details="Hamdan Classes (Offline)" />

                    <ProjectCom img="../../certificates/full-stack-web.jpg" title="Udemy Certificate" details="Full Stavck Web Developer" />

                    <ProjectCom img="../../certificates/eduonix-js-jquery.jpg" title="Eduonix Certificate" details="Javascript and Jquery Course" />
                    

                    <ProjectCom img="../../certificates/full-stack-web.jpg" title="Backend Developer" details="Hamdan Classes (Offline)" />
 
 
                </div>
            </div>
            <div id="project"></div>

        </>
    )
}

export default Achivments
