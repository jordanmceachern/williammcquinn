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
        <nav>
            <div id="hamburger" onClick={this.toggleHandler}>
                <hr />
                <hr />
                <hr />
            </div>
            <a id="home" href="#top"><p>William McQuinn</p></a>
            <a className="heading mobile hideThis" href="#photos">photos</a>
            <a className="heading mobile hideThis" href="#videos">videos</a>
            <a className="heading mobile hideThis" href="#contact">contact</a>
            <div id="facebook" className="heading mobile hideThis" onClick={this.toggleHandler}>
                <a 
                    href="https://www.facebook.com/williammcquinn7" 
                    target="_blank" 
                    rel="noopener noreferrer">
                    <img id="fb" src={facebook} alt="link to facebook"/>facebook page
                </a>
            </div>
        </nav>
        )
    }
}

export default Layout