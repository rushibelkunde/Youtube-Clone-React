// import React from 'react'
import './Videos.css'
import VideoCard from './VideoCard'
import {videos} from './videosFile'
import React, { Component } from 'react'

class Videos extends Component {
  constructor(){
    super()
    this.state = {
      videos : videos
    }
  }
  render() {
    let videos = this.state.videos
    return (
      <div className='videoPage'>
        {videos.map((video,i)=>(
          <VideoCard 
          key={i} 
          thumb={video.thumb} 
          videoTitle={video.videoTitle} 
          channelLogo={video.Logo} 
          channelName={video.channelName} 
          views={video.views} 
          timeStamp={video.timeStamp}/>
        ))}
      </div>
    )
  }
}

export default Videos