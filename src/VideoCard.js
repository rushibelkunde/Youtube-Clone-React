import React from 'react'
import './VideoCard.css'
function VideoCard({thumb, videoTitle, channelLogo, channelName, views, timeStamp}) {
  return (
    <div className='videoCard'>
        <img src={thumb} alt="" width='300px' height='180px'/>
        <div className='upper'>
            <img src={channelLogo} alt="" width='40px' height='40px' className='channelLogo' />
            <div className='videoTitle'>{videoTitle}
            <div className='channelName'>{channelName}</div>
        <div className='lower'>
            <div className='views'>{views}</div>
            <div className='timeStamp'>•</div>
            <div className='timeStamp'>{timeStamp}</div>
        </div></div>
        </div>
        

    </div>
  )
}

export default VideoCard