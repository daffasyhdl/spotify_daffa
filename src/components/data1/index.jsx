import React from "react";

const Playlist = ({ key, url, title, artist, album }) => {
  return (
      <div className="playlist">
          <div className='container' key={key}>
              <h4 className='title'>{title}</h4>
              <img className='image' src={url} alt="image" />
              <h4 className='artist'>{artist}</h4>
              <h6 className='album'>{album}</h6>
              <Button className='btn-select' variant="outline-primary">Select</Button>{' '}
          </div>
      </div>
  );
}

export default Playlist
