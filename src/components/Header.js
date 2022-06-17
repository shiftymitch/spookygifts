import React from "react";
// import { Link } from "react-router-dom";
import ReactGA from "react-ga";

function Header() {
    
    ReactGA.initialize('UA-174302758-1');

    // function sendHit(event) {
    //     ReactGA.ga('send', 'event', 'Link Click', 'click', event.target.id)
    // }

    return (   
        <nav className="navbar position-sticky">
            <img src="img/SpookyGiftsTempLogo.png" width="300px" className="d-inline-block align-top m-4" alt=""></img>
            {/* <div className="collapse navbar-collapse" id="navbarNav">
                <div className="navbar-nav">
                    <Link className="nav-item nav-link" to={"./"}>for her</Link>
                    <Link className="nav-item nav-link" to={"./about"}>for him</Link>
                    <Link className="nav-item nav-link" to={"./contact"}>for them</Link>
                </div>
                <div className="ref-links ml-auto">
                    <div className="row">
                        <a className="nav-item nav-link" href="https://github.com/shiftymitch" target="_blank" rel="noopener noreferrer" onClick={sendHit}>
                            <i className="fa fa-github" id="github" ></i>
                        </a>
                        <a className="nav-item nav-link" href="https://www.linkedin.com/in/mitch-henderson-a277bb37/" target="_blank" rel="noopener noreferrer" onClick={sendHit}>
                            <i className="fa fa-linkedin" id="linkedin" ></i>
                        </a>
                        <a className="nav-item nav-link" href="https://docs.google.com/document/d/1WBLuhiQD2WIeMPnhRqUklet1IUU9cASRBs405LGLRvc/edit?usp=sharing" target="_blank" rel="noopener noreferrer" onClick={sendHit}>
                            <i className="fa fa-file-text-o" id="resume" ></i>
                        </a>
                    </div>
                    <a id="google-certified" className="google-cert align-top" style={{"fontSize":".6rem"}} href="https://skillshop.exceedlms.com/profiles/ac123b10222540e3822c9fb147077b5f" target="_blank" rel="noopener noreferrer" onClick={sendHit}>
                        Google Ads & Analytics Certified ✓
                    </a>
                </div>
            </div> */}
        </nav>
    )
}

export default Header;