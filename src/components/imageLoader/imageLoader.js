import React from 'react'
import './imageLoader.css'
import svg from './brittany.svg'
import jpg from './brittany.jpg'

class ImageLoader extends React.Component {
  state={
    loadFirst: false
  }

  componentDidMount(){
    const img = new Image()
    img.src = jpg
    img.onload = () => {this.setState({loadFirst: true})}
  }
  
  render(){
    const src = 
    this.state.loadFirst ? jpg : svg
    return (
          <div 
            className="background"
            style={{background: `center / cover no-repeat url(${src})`}}>
          </div>
    )
  }
}

export default ImageLoader