import React from 'react'
import '../components/photos/photos.css'
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
        <div className="App">
            <Layout />
            <div id="photos">
                <div onClick={this.changeLeft}><img src={this.state.photos[0]} alt="gallery left" /></div>
                <div><img src={this.state.photos[1]} alt="gallery center" /></div>
                <div onClick={this.changeRight}><img src={this.state.photos[2]} alt="gallery right" /></div>
            </div>
        </div>
    )}
}

export default Photos