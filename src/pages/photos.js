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
    photos: [bunnylight, girllight, carlight, canyonlight, pianolight, fallslight, rocklight, buildinglight, jetlight, planelight],
    loaded: false,
    jpg: []
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
            this.setState({ jpg: photos })
            if(this.state.jpg.length === jpg.length){
                this.setState({loaded: true})
            }
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

changeMain = key => () => {
    const gallery = document.getElementById("gallery")
    gallery.classList.toggle("hide")
    let photos = this.state.photos
    
    if(key === 0){
        this.changeLeft()
    } else if(key === 1) {
        return
    } else {
        const number = key-2
        for(var i=0; i<=number; i++){
            const move = photos[0]
            photos.push(move)
            photos.splice(0, 1)
            this.setState({ photos })
        }
    }
}

showGallery = () => {
    const gallery = document.getElementById("gallery")
    gallery.classList.toggle("hide")
}
    
render(){
    let j = -1
    const thumbnails = this.state.photos.map(photo => {
        j++
        return <img key={`${j}`} src={photo} alt="thumbnail" onClick={this.changeMain(j)}/>
    })
    const seeMore = (this.state.loaded === true)? "show all":"loading..."

    return (
        <div className="App">
            <Layout />
            <div id="photos">
                <img id="leftPic" src={this.state.photos[0]} alt="gallery left" />
                <img id="mainPic" className="leftBlur rightBlur" src={this.state.photos[1]} alt="gallery center" />
                <img id="rightPic" src={this.state.photos[2]} alt="gallery right" />
            </div>
            <div id="gallery" className="outline">
                {thumbnails}
            </div>
            <div id="galleryMenu">
                <div className="arrows" onClick={this.changeLeft}>
                    <img src={arrow} alt="cycle left" />
                </div>
                <div id="select" onClick={this.showGallery}>
                    {seeMore}
                </div>
                <div className="arrows" onClick={this.changeRight}>
                    <img src={arrow} id="cycleRight" alt="cycle right" />
                </div>
            </div>
        </div>
    )}
}

export default Photos