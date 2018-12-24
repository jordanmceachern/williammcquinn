import React from 'react'
import Layout from '../components/layout'
import ImageLoader from '../components/imageLoader/imageLoader'

export default () => {
    return (
        <div className="App">
            <ImageLoader />
            <Layout />            
        </div>
    )
}