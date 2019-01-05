import React from 'react'
import './imageLoader.css'
import Layout from '../layout'
import c1light from './filminglight.jpg'
import c2light from './carousel_2light.jpg'
import c3light from './carousel_3light.jpg'
import c4light from './carousel_4light.jpg'
import c5light from './carousel_5light.jpg'
import c6light from './carousel_6light.jpg'
import c7light from './carousel_7light.jpg'
import c1 from './filming.jpg'
import c2 from './carousel_2.jpg'
import c3 from './carousel_3.jpg'
import c4 from './carousel_4.jpg'
import c5 from './carousel_5.jpg'
import c6 from './carousel_6.jpg'
import c7 from './carousel_7.jpg'

class ImageLoader extends React.Component {
  state = {
    photos: [c2light, c1light, c3light, c4light, c5light, c6light, c7light],
    jpg: [c2, c1, c3, c4, c5, c6, c7]
  }
  
  componentDidMount(){
    const jpg = this.state.jpg
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
      }
    )
    this.carousel()
  }
  
  carousel = () => {
    setInterval(() => {
      const photos = this.state.photos
      const jpg = this.state.jpg
      const first = jpg[0]
      photos.splice(0,1)
      jpg.splice(0,1)
      photos.push(first)
      jpg.push(first)
      this.setState({ photos, jpg })
    }, 2500)
  }
      
  render(){
      return (
          <div className="App">
              <Layout />
              <div id="landing">
                  <img id="leftPicture" src={this.state.photos[0]} alt="gallery left" />
                  <img id="mainPicture" className="leftBlurr rightBlurr" src={this.state.photos[1]} alt="gallery center" />
                  <img id="rightPicture" src={this.state.photos[2]} alt="gallery right" />
              </div>
          </div>
      )}
  }
  
  export default ImageLoader