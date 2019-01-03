import React from 'react'
import '../css_pages/photos.css'
import Layout from '../components/layout'
import arrow from '../components/arrow_select.png'
import car from '../components/photos/car.jpg'
import canyon from '../components/photos/canyon.jpg'
import falls from '../components/photos/falls.jpg'
import girl from '../components/photos/girl.jpg'
import plane from '../components/photos/plane.jpg'
import bunny from '../components/photos/bunny.jpg'
import piano from '../components/photos/piano.jpg'
import building from '../components/photos/building.jpg'
import jet from '../components/photos/jet.jpg'
import rock from '../components/photos/rock.jpg'
import carlight from '../components/photos/carlight.jpg'
import canyonlight from '../components/photos/canyonlight.jpg'
import fallslight from '../components/photos/fallslight.jpg'
import girllight from '../components/photos/girllight.jpg'
import planelight from '../components/photos/planelight.jpg'
import bunnylight from '../components/photos/bunnylight.jpg'
import pianolight from '../components/photos/pianolight.jpg'
import buildinglight from '../components/photos/buildinglight.jpg'
import jetlight from '../components/photos/jetlight.jpg'
import rocklight from '../components/photos/rocklight.jpg'

class Photos extends React.Component {
state = {
    photos: [bunnylight, girllight, carlight, canyonlight, pianolight, fallslight, rocklight, buildinglight, jetlight, planelight]
}

componentDidMount(){
    const jpg = [bunny, girl, car, canyon, piano, falls, rock, building, jet, plane]
    let photos = this.state.photos
    let i = 0
    jpg.forEach(jpeg => {
        const img = new Image()
        img.src = jpeg
        img.onload = () => {
            photos[i] = jpeg
            this.setState({ photos })
            i++
        }
    })
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
                <img id="mainpic" src={this.state.photos[1]} alt="gallery center" />
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