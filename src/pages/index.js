import React from 'react'
import Layout from '../components/layout'
import ImageLoader from '../components/imageLoader/imageLoader'
import { Helmet } from 'react-helmet'

export default () => {
  return (
    <div className="App">
      <Helmet>
        <meta charSet='utf-8' />
        <title>William McQuinn</title>
        <meta name='description' content='William is an event videographer trained by director David McQuinn, and 
                    resides in Fredericton NB. Working alongside McQuinn Media for over 5 years 
                    and educated by Hollywood professionals, William knows how to capture a 
                    moment through the eye of the lens.'></meta>
        <link rel='canonical' href='https://williammcquinn.com' />
      </Helmet>
      <ImageLoader />
      <Layout />            
    </div>
  )
}