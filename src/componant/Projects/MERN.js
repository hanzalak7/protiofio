import React from 'react'
function ProjectCom(props) {
    return (
        <>
            <div data-aos="zoom-in" className="project-outer text-center col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12  ">
                <div className="project-inner">
                    <img src={props.img} width="100%" height="60%" />
                    <p>{props.title}</p>
                    <div class="d-flex justify-content-around">
                        <a href={props.priview} style={{ color: "black", border: "1px solid black" }} class="mybtn">Priview</a>
                        <a href={props.github} style={{ color: "black", border: "1px solid black" }} class="mybtn">Code</a>
                    </div>
                </div>
            </div>
        </>
    )
}

function MERN() {
    return (
        <div className="container-fluid">
        <div className="row project-row" >

            <ProjectCom img="../../images/bg.jpg" github="" priview="" title="Fast load times and lag free interaction, my highest priority." />
            <ProjectCom img="../../images/bg.jpg" github="" priview="" title="Fast load times and lag free interaction, my highest priority." />
            <ProjectCom img="../../images/bg.jpg" github="" priview="" title="Fast load times and lag free interaction, my highest priority." />
            <ProjectCom img="../../images/bg.jpg" github="" priview="" title="Fast load times and lag free interaction, my highest priority." />

        </div>

        <div className="row project-row" >

            <ProjectCom img="../../images/bg.jpg" github="" priview="" title="Fast load times and lag free interaction, my highest priority." />
            <ProjectCom img="../../images/bg.jpg" github="" priview="" title="Fast load times and lag free interaction, my highest priority." />
            <ProjectCom img="../../images/bg.jpg" github="" priview="" title="Fast load times and lag free interaction, my highest priority." />
            <ProjectCom img="../../images/bg.jpg" github="" priview="" title="Fast load times and lag free interaction, my highest priority." />

        </div>
    </div>
    )
}

export default MERN
