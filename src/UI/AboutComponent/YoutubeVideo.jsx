import React from 'react'

function YoutubeVideo() {
  return (
    <div className='flex justify-center'>

    <div style={{ textAlign: "center", marginTop: "20px" }}>
     
      <iframe 
        width="700" 
        height="405" 
        src="https://www.youtube.com/embed/6RO0swH6fAo" 
        title="YouTube video player" 
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
      ></iframe>
    </div>

    </div>
  )
}

export default YoutubeVideo