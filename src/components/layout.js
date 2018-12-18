import React, { Component } from 'react'
import './layout.css'
import facebook from './facebook.png'

class Layout extends Component {

toggleHandler = () => {
    const navhtml = document.getElementsByClassName("mobile")
    const navArr = Array.from(navhtml)
    navArr.forEach(element => element.classList.toggle("hideThis"))
}
    
render(){
    return (
        <React.Fragment>
            <div id="header">
                <div className="heading">
                    <div id="hamburger" onClick={this.toggleHandler}>
                        <hr />
                        <hr />
                        <hr />
                    </div>
                    <Link id="home" to="/">brittany mcquinn</Link>
                </div>
                <Link id="story" className="heading mobile hideThis" to="/story" onClick={this.toggleHandler}>story</Link>
                <Link id="lyrics" className="heading mobile hideThis" to="/lyrics" onClick={this.toggleHandler}>lyrics</Link>
                <Link id="shows" className="heading mobile hideThis" to="/shows" onClick={this.toggleHandler}>shows</Link>
                <Link id="contact" className="heading mobile hideThis" to="/contact" onClick={this.toggleHandler}>contact</Link>
            </div>

            <div id="footer">
                <div className="links">
                    <a 
                    href="https://www.facebook.com/williammcquinn7" 
                    target="_blank" 
                    rel="noopener noreferrer">
                        <img id="fb" src={facebook} alt="link to facebook"/>Facebook Page
                    </a>
                </div>
                <div className="links">
                    <a 
                    href="https://www.instagram.com/brittanymcquinn/?hl=en" 
                    target="_blank" 
                    rel="noopener noreferrer">
                        <img src={instagram} alt="link to instagram"/>
                    </a>
                </div>
                <div className="links">
                    <a 
                    href="https://twitter.com/brittanymcquinn" 
                    target="_blank" rel="noopener noreferrer">
                        <img src={twitter} alt="link to twitter"/>
                    </a>
                </div>
                <div className="links" id="buyDiv">
                    <a 
                    href="https://fanlink.to/BrittanyMcQuinn" 
                    target="_blank" rel="noopener noreferrer"
                    id="buy">
                        <p>stream/ buy</p>
                    </a>
                </div>
            </div>
        </React.Fragment>
        )
    }
}

export default Layout