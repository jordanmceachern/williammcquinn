import React from 'react'
import '../css_pages/videos.css'
import Layout from '../components/layout'
import arrow from '../components/arrow_select.png'

class Videos extends React.Component {
state = {
    videos: [
    "https://www.youtube.com/embed/GaQyX1m7XxE", 
    "https://www.youtube.com/embed/fCOKFpY1hnU", 
    "https://www.youtube.com/embed/Xh8vuDApIKI", 
    "https://www.youtube.com/embed/Jo8Oz_V78f8", 
    "https://www.youtube.com/embed/548L4yV2VIc", 
    "https://www.youtube.com/embed/6_iRct_zoBc"
    ],
    title: [
        "Improvement & Innovation",
        "On The Front Lines",
        "NB Proud, FierteNB",
        "Behind The Front Lines",
        "New Brunswick's Cyber Innovation",
        "CyberNB"
    ]
}

changeLeft = () => {
    let videos = this.state.videos
    let title = this.state.title
    const indexLength = videos.length-1
    const last = videos[indexLength]
    const lastTitle = title[indexLength]
    videos.pop()
    title.pop()
    videos.splice(0, 0, last)
    title.splice(0, 0, lastTitle)
    this.setState({ videos, title })
}

changeRight = () => {
    let videos = this.state.videos
    let title = this.state.title
    const first = videos[0]
    const firstTitle = title[0]
    videos.push(first)
    title.push(firstTitle)
    videos.splice(0, 1)
    title.splice(0, 1)
    this.setState({ videos, title })
}

changeMain = key => () => {
    const gallery = document.getElementById("gal")
    gallery.classList.toggle("hide")
    let videos = this.state.videos
    let title = this.state.title
    
    if(key === 0){
        return
    } else if(key === 1) {
        this.changeLeft()
    } else {
        const number = key-2
        for(var i=0; i<=number; i++){
            const move = videos[0]
            const moveTitle = title[0]
            videos.push(move)
            title.push(moveTitle)
            videos.splice(0, 1)
            title.splice(0, 1)
            this.setState({ videos, title })
        }
    }
}

showGallery = () => {
    const gallery = document.getElementById("gal")
    gallery.classList.toggle("hide")
}
    
render(){
    let j = -1
    const list = this.state.videos.map(video => {
        j++
        return  (<li 
                    key={`${j}`} 
                    src={video}
                    onClick={this.changeMain(j)}>
                    {this.state.title[j]}
                </li>)
    })
    return (
        <div className="App">
            <Layout />
            <div id="videos">
                <iframe
                    title="theatre"
                    src={this.state.videos[0]} 
                    frameBorder="0" 
                    allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                </iframe>
            </div>
            <div id="gal" className="hide">
                {list}
            </div>
            <div id="videoMenu">
                <div className="arrows" onClick={this.changeLeft}>
                    <img src={arrow} alt="cycle left" />
                </div>
                <div id="select" onClick={this.showGallery}>
                    see more
                </div>
                <div className="arrows" onClick={this.changeRight}>
                    <img src={arrow} id="cycleRight" alt="cycle right" />
                </div>
            </div>
        </div>
    )}
}

export default Videos