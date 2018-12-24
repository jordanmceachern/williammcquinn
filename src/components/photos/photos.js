import React from 'react'
import './photos.css'
import bridge from './bridge.jpg'
import car from './car.jpg'
import cockpit from './cockpit.jpg'
import falls from './falls.jpg'
import girl from './girl.jpg'
import horse from './horse.jpg'
import plains from './plains.jpg'
import plane from './plane.jpg'
import water from './water.jpg'

class Photos extends React.Component {
state = {
    photos: [bridge, car, cockpit, falls, girl, horse, plains, plane, water]
}

changeLeft = () => {
    console.log("left")
    //let photos = this.state.photos
    //rearrange photosArr
    //setState { photos }
}

changeRight = () => {
    console.log("right")
}
    
render(){
    return (
        <div id="photos">
            <div onClick={this.changeLeft}><img src={this.state.photos[0]} alt="gallery left" /></div>
            <div><img src={this.state.photos[1]} alt="gallery center" /></div>
            <div onClick={this.changeRight}><img src={this.state.photos[2]} alt="gallery right" /></div>
        </div>
    )}
}

export default Photos