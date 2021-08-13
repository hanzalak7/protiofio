import React from 'react'
import './Projects.scss'
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     NavLink
// } from "react-router-dom";

// import Top from './Top'
// import Reactjs from './React'
// import MERN from './MERN'
// import CSS from './CSS'



function ProjectCom(props) {
    return (
        <>
            <div data-aos="zoom-in" className="project-outer text-center col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12  ">
                <div className="project-inner">
                    <img src={props.img} width="100%" height="50%" />
                    <h5>{props.title}</h5>
                    <p>{props.details}</p>
                    <div class="d-flex justify-content-around">
                        <a href={props.priview} style={{ color: "black", border: "1px solid blue" }} class="mybtn">Visit Website</a>
                        <a href={props.github} style={{ color: "black", border: "1px solid blue" }} class="mybtn">GitHub</a>
                    </div>
                </div>
            </div>
        </>
    )
}

function Projects() {
    return (
        <>

            {/* ////////// */}
            {/* <Router>
                <h1 data-aos="zoom-in" id="about" className="text-center p-1 pb-0"> Projects </h1>
                <Switch>
                    <div data-aos="zoom-in" className="container">
                        
                        <div class="row" data-aos="zoom-in">
                            <div className=" project-nav text-center col-xl-3">
                                <a><NavLink class="" to="/">Top Projects</NavLink> </a>
                            </div>

                            <div className="project-nav text-center col-xl-3">
                                <a><NavLink class="" to="/react">React Js</NavLink> </a>
                            </div>

                            <div className="project-nav text-center col-xl-3">
                                <a><NavLink class="" to="/MERN">MERN Stack </NavLink> </a>
                            </div>

                            <div className="project-nav text-center col-xl-3">
                                <a><NavLink class="" to="/CSS">CSS Design</NavLink>  </a>
                            </div> 
                        </div>

                    </div>
                   
                </Switch>
                <br/> <br/>  
                <Switch>
                    <Route exact path='/' component={Top} />
                    <Route path='/React' component={Reactjs} />
                    <Route path='/MERN' component={MERN} />
                    <Route path='/CSS' component={CSS} />
                </Switch>
            </Router> */}


            {/* ////////// */}

            <hr />

            <h1 data-aos="zoom-in" id="about" className="text-center p-1 pb-0"> Projects </h1>

            <br />

            <div className="container-fluid">
                <div className="row project-row" >

                    <ProjectCom img="../../images/portfolio.jpg" github="https://github.com/omkar-shinde-96k" priview="" title=" Instagram Clone " details="HTML , SCSS , Javascript , React Js , NodeJS , ExpressJS , MongoDB" />

                    <ProjectCom img="../../images/dgtc.jpg" github="https://github.com/omkar-shinde-96k" priview="https://mangaonseniorcollege.com/" title="DGTC College Website " details="HTML , CSS , Javascript , Bootstrap , Jquery , React Js " />

                    <ProjectCom img="../../images/amazon.jpg" github="https://github.com/omkar-shinde-96k" priview="" title=" Amazon Clone " details="HTML , SCSS , Javascript , React Js , NodeJS , ExpressJS , MongoDB" />

                    <ProjectCom img="../../images/mvflex.jpg" github="https://github.com/omkar-shinde-96k" priview="http://downloadmovies.unaux.com/" title="Movie Downloading Site" details="HTML 5, CSS 3, Javascript , Bootstrap , Jquery" />

                    <ProjectCom img="../../images/weather.jpg" github="https://github.com/omkar-shinde-96k" priview="https://live-weather-today.herokuapp.com/" title="Live Weather App" details="HTML , SCSS , Javascript , Bootstrap , React Js" />

                    <ProjectCom img="../../images/webwhatsapp.jpg" github="https://github.com/omkar-shinde-96k" priview="http://whatsappweb.unaux.com" title="Web Whatsapp UI" details="HTML 5 , SCSS 3 , Javascript , Bootstrap &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; " />

                    <ProjectCom img="../../images/portfolio.jpg" github="https://github.com/omkar-shinde-96k" priview="" title="Portfolio Website" details="HTML5 , CSS3 , Javascript , Bootstrap , React Js" />

                    <ProjectCom img="../../images/calc.jpg" github="https://github.com/omkar-shinde-96k" priview="http://onlinecalculator.unaux.com/" title="Online Calculator" details=" &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; HTML 5, CSS 3, Javascript  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; " />


                    {/*  
                </div>

                <div className="row project-row" > */}


                </div>
            </div>
            <div id="project"></div>

        </>
    )
}

export default Projects
