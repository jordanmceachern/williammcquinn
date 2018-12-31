import React from 'react'
import '../css_pages/photos.css'
import Layout from '../components/layout'
import bridge from '../components/photos/bridge.jpg'
import car from '../components/photos/car.jpg'
import cockpit from '../components/photos/cockpit.jpg'
import falls from '../components/photos/falls.jpg'
import girl from '../components/photos/girl.jpg'
import horse from '../components/photos/horse.jpg'
import plains from '../components/photos/plains.jpg'
import plane from '../components/photos/plane.jpg'
import water from '../components/photos/water.jpg'

class Photos extends React.Component {
state = {
    photos: [bridge, car, cockpit, falls, girl, horse, plains, plane, water]
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
                <img onClick={this.changeLeft} src={this.state.photos[0]} alt="gallery left" />
                <img src={this.state.photos[1]} alt="gallery center" />
                <img onClick={this.changeRight} src={this.state.photos[2]} alt="gallery right" />
            </div>
        </div>
    )}
}

export default Photos