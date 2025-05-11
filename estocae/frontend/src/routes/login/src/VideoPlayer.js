 import React, {useRef} from 'react'
 // https://stackoverflow.com/questions/37463832/how-to-play-pause-video-in-react-without-external-library
export function VideoPlayer({ src }) {
    const vidRef = useRef(null);
  
    return (<video ref={vidRef} autoPlay>
        <source src={[src]} type="video/mp4"  />
      </video>);
  }