import {React,useState } from 'react';   
import '../App.scss';

function Navbar() {

    const [toggle, setToggle] = useState(true)

    const Toggle=()=>{
       setToggle(!toggle)
    }

    const Navlinks = () => {
        return (
            <>
                       <li><a href="#" > Home </a></li>
                    <li><a href="#" >Achivments </a></li>
                    <li><a href="#projects" > Projects </a></li>
                    <li><a href="https://github.com/hanzalak7" > Github </a></li>
                    <li><a href="#about"> About Us </a></li>
                    <li><a href="https://www.instagram.com/hanzala.real" > Insta page </a></li>
            </>
        )
    }


    return (
        <>
            <div id="nav" className="navbar">
                <div className="menu1" onClick={Toggle}><i className="fa fa-bars"></i></div>
                <ul>
                <Navlinks/>
                </ul>
                <a className="mybtn" href="https://wa.me/917709229063" role="button">Contact Us</a>
            </div>

            <br/>

            <div className="main">
                <h1  >Hello,</h1>
                <h2>I'm Hanzala Kathewadi</h2>
                <h1 class="typewrite" data-period="2000" data-type='[ "Web Devloper", "React Developer", "Web Designer"  ]'>
                    <span class="wrap"></span>
                </h1>
               <p>
        With a strong foundation in project management, systems administration, and customer relations gained through both academic and professional experiences, I am well-equipped to excel in high-pressure environments. My goal is to leverage my passion for technology and diverse background to foster company innovation and provide effective engineering solutions to complex technical challenges.
            </p>
                <br />
                <div style={{ display: "flex" }}>
                    <a href="https://wa.me/917709229063" className="mybtn text-center"> Hire Me</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a href="" className="mybtn text-center"> Download CV</a>
                </div>
                <div className="social-icons">
                    <a href="https://github.com/hanzalak7" class="fa fa-github"></a>
                    <a href="tel:7709229063" class="fa fa-phone"></a>
                    <a href="https://wa.me/917709229063" class="fa fa-whatsapp"></a>
                    <a href="mailto:hanzala7000k@gmail.com" class="fa fa-envelope"></a>
                    <a href="https://www.linkedin.com/in/hanzala-kathewadi-810ba9219/" class="fa fa-linkedin"></a>
                </div>

                <br></br>
                <div className="text-center">
                    <a href="#about" class=" fa fa-chevron-circle-down" style={{ fontSsize: "48px", color: "white", fontSize: "60px", textDecoration: "none" }}></a>
                </div>

            </div>
            {toggle? "":
            <div className="drower">
                <div className="menu2" onClick={Toggle}>
                    <i className="fa fa-bars"></i>
                </div>
                <ul>
                <Navlinks/>
                </ul>
            </div>
}
            <div class="icon-bar">
                <a href="https://github.com/hanzalak7" class="google"><i class="fa fa-github"></i></a>
                <a href="tel:7709229063" class="facebook"><i class="fa fa-phone"></i></a>
                <a href="https://wa.me/917709229063" class="twitter"><i class="fa fa-whatsapp"></i></a>
                <a href="https://www.instagram.com/hanzala.real/" class="instagram"><i class="fa fa-instagram"></i></a>
                <a href="https://www.linkedin.com/in/hanzala-kathewadi-810ba9219/" class="linkedin"><i class="fa fa-linkedin"></i></a>
                <a href="mailto:hanzala7000k@gmail.com" class="facebook"><i class="fa fa-envelope"></i></a>
            </div>
        </>
    )
}

export default Navbar;

