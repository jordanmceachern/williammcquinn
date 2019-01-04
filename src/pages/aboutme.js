import React from 'react'
import { Link } from 'gatsby'
import '../css_pages/aboutme.css'
import Layout from '../components/layout'

const Contact = () => {
    return (
        <div className="App">
            <Layout />
            <div id="about">
                <p>
                    William is an event videographer trained by director David McQuinn, and 
                    resides in Fredericton NB. Working alongside McQuinn Media for over 5 years 
                    and educated by Hollywood professionals, William knows how to capture a 
                    moment through the eye of the lens.
                </p>
                <p>
                    William keeps up to date and on trend by regularly practicing alongside 
                    Hollywood directors and world leaders in the industries of Editing, Videography, 
                    and Aerial Drone Videography.
                </p>
                <p>
                    William is also a part of the McQuinn Media team run by David McQuinn, 
                    offering the finest quality of video production for over 30 years. You can 
                    find a link to the team here:
                    <a 
                        href="https://www.mcquinnmedia.com/" 
                        target="_blank" 
                        rel="noopener noreferrer">
                        <div>(mcquinnmedia.com)</div>
                    </a>
                </p>
                <p id="seewhat">
                    Ask us what we can do for you today, we'd love to hear from you!   
                    <Link to="/contact"><div>(contact)</div></Link>
                </p>
            </div>
        </div>
    )
}

export default Contact