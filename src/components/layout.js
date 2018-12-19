import React, { Component } from 'react'
import './layout.css'
import facebook from './facebook.png'
import logo from './logo.jpg'

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
            <a id="home" href="#top"><img src={logo} alt="brand logo"/></a>
            <a className="heading mobile hideThis" href="#photos">Photos</a>
            <a className="heading mobile hideThis" href="#videos">Videos</a>
            <a className="heading mobile hideThis" href="#contact">Contact</a>
            <div id="facebook" className="heading mobile hideThis" onClick={this.toggleHandler}>
                <a 
                    href="https://www.facebook.com/williammcquinn7" 
                    target="_blank" 
                    rel="noopener noreferrer">
                    <img id="fb" src={facebook} alt="link to facebook"/>Facebook Page
                </a>
            </div>
        </nav>
        )
    }
}

export default Layout