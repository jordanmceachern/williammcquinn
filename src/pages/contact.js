import React from 'react'
import '../css_pages/contact.css'
import Layout from '../components/layout'

const Contact = () => {
    return (
        <div className="App">
            <Layout />
            <div id="contactInfo">
                <div>
                    <p><a href="mailto:william.mcquinn@gmail.com" target="_top">william.mcquinn@gmail.com</a></p>
                </div>
            </div>
        </div>
    )
}

export default Contact