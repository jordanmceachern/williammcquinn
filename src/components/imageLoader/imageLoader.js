import React from 'react'
import './imageLoader.css'
import svg from './filming.svg'
import c1 from './filming.jpg'
import c2 from './carousel_1.jpg'
import c3 from './carousel_2.jpg'
import c4 from './carousel_4.jpg'
import c5 from './carousel_5.jpg'

class ImageLoader extends React.Component {
  state={
    loadFirst: false,
    slideIndex: 0
  }

  slides = null
  setSlides = element => {
    this.slides = element
    if(this.slides){
      this.carousel()
    }
  }

  componentDidMount(){
    const img = new Image()
    img.src = c1
    img.onload = () => {this.setState({loadFirst: true})}
  }

  carousel = () => {
    const x = document.querySelectorAll('.slides')
    const arr = Array.from(x)
    console.log(arr[4])
    let i = 0
    setInterval(() => {
      arr.forEach(photo => {
        photo.style.display = "none"
      })
      arr[i].style.display = "unset"
      i++
      if(i>arr.length-1){i=0}
    }, 3500)
  }
  
  render(){
    if(this.state.loadFirst){
      var src = <div id="jpg" ref={this.setSlides}>
                  <img src={c1} className="slides" alt="of william filming"/>
                  <img src={c2} style={{display: "none"}} className="slides" alt="of william filming"/>
                  <img src={c3} style={{display: "none"}} id="editing" className="slides" alt="of william filming"/>
                  <img src={c4} style={{display: "none"}} className="slides" alt="of william filming"/>
                  <img src={c5} style={{display: "none"}} className="slides" alt="of william filming"/>
                </div>
    } else {
        src = <div id="svg">
                <img src={svg} alt="background loading" />
              </div>
    }
    return (
      <div id="container">
        {src}
      </div>
    )
  }
}

export default ImageLoader