import React from 'react';

function YoutubeVideo() {
  return (
    <div className='flex justify-center items-center p-4'>
      <div className='w-full max-w-4xl'>
        <div className='relative w-full' style={{ paddingTop: '56.25%' }}>
          <iframe
            className='absolute top-0 left-0 w-full h-full'
            src='https://www.youtube.com/embed/6RO0swH6fAo'
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default YoutubeVideo;
