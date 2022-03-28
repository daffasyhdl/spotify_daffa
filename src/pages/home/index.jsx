import React from "react";
import data from "../../components/data1";
import listdata from "../../data/data1";

function Home() {
  return (
    <div className='home'>
      <div className='albums'>
        {data.map((item) => {
          return (
            <Playlist
              key={item.id}
              url={item.album.images[0].url}
              title={item.name}
              artist={item.artists[0].name}
              album={item.album.name} />
          )
        })}
      </div>
    </div>
  );
}

export default Home
