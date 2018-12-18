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
                    <a id="home" href="#">william mcquinn</a>
                </div>
                <div id="footer" className="heading mobile hideThis" onClick={this.toggleHandler}>
                    <a 
                        href="https://www.facebook.com/williammcquinn7" 
                        target="_blank" 
                        rel="noopener noreferrer">
                        <img id="fb" src={facebook} alt="link to facebook"/>facebook page
                    </a>
                </div>
            </div>
        </React.Fragment>
        )
    }
}

export default Layout