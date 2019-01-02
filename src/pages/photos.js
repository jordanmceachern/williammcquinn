import React from 'react'
import '../css_pages/photos.css'
import Layout from '../components/layout'
import arrow from '../components/arrow_select.png'
import bridge from '../components/photos/bridge.jpg'
import car from '../components/photos/car.jpg'
import canyon from '../components/photos/canyon.jpg'
import falls from '../components/photos/falls.jpg'
import girl from '../components/photos/girl.jpg'
import horse from '../components/photos/horse.jpg'
import plains from '../components/photos/plains.jpg'
import plane from '../components/photos/plane.jpg'
import water from '../components/photos/water.jpg'

class Photos extends React.Component {
state = {
    photos: [bridge, car, canyon, falls, girl, horse, plains, plane, water]
}

changeLeft = () => {
    let photos = this.state.photos
    const indexLength = photos.length-1
    const last = photos[indexLength]
    photos.pop()
    photos.splice(0, 0, last)
    this.setState({ photos })
}

changeRight = () => {
    let photos = this.state.photos
    const first = photos[0]
    photos.push(first)
    photos.splice(0, 1)
    this.setState({ photos })
}
    
render(){
    return (
        <div className="App">
            <Layout />
            <div id="photos">
                <img id="leftPic" src={this.state.photos[0]} alt="gallery left" />
                <img src={this.state.photos[1]} alt="gallery center" />
                <img id="rightPic" src={this.state.photos[2]} alt="gallery right" />
            </div>
            <div id="gallery">
                <div className="arrows" onClick={this.changeLeft}>
                    <img src={arrow} alt="cycle left" />
                </div>
                <div id="select">
                    <hr />
                    <hr />
                    <hr />
                </div>
                <div className="arrows" onClick={this.changeRight}>
                    <img src={arrow} id="cycleRight" alt="cycle right" />
                </div>
            </div>
        </div>
    )}
}

export default Photos