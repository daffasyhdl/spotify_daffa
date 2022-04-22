import React from 'react';
import './Search.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Card, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { setToken } from '../../../reducer/reducer';
import Playlist from '../Home/Playlist';

function Home() {
  const [search, setSearch] = useState('');
  const [track, setTrack] = useState([]);

  const { token } = useSelector((state) => state.auth);

  const dispatch = useDispatch((state) => state.auth);

  const searchAlbums = async (e) => {
    e.preventDefault();
    const { data } = await axios.get('https://api.spotify.com/v1/search', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        q: search,
        type: 'track',
      },
    });

    setTrack(data.tracks.items);
  };

  //   const searchTrack = (event) => {
  //     event.preventDefault();
  //     const url = `https://api.spotify.com/v1/search?q=${search}&type=track`;
  //     fetch(url, {
  //       method: 'GET',
  //       headers: {
  //         Authorization: `Bearer ${userAccessToken}`,
  //         'Content-type': 'application/json',
  //       },
  //     })
  //       .then((res) => res.json())
  //       .then((result) => setSearchResult(result.tracks.items));
  //   };

  //   useEffect(() => {
  //     const hash = window.location.hash.substring(1).split('&')[0].split('=');

  //     if (hash[0] === 'access_token') {
  //       setToken(hash[1]);
  //     }
  //   }, []);

  //   console.log(userAccessToken);

  //   const renderAlbums = () => {
  //     return albums.map((artist) => (
  //       <div className="container-card">
  //         <Card className="card" style={{ width: '20rem' }}>
  //           <Card.Body>
  //             <div key={artist.id}>
  //               <h3>{artist.name}</h3>
  //               {artist.images.length ? (
  //                 <img width={'35%'} src={artist.images[0].url} alt="" />
  //               ) : (
  //                 <div>No Image</div>
  //               )}
  //               <br></br>
  //               <Button
  //                 className="btnSelected"
  //                 variant="outline-primary"
  //                 size="sm"
  //                 onClick={logout}
  //               >
  //                 Selected{' '}
  //               </Button>{' '}
  //             </div>
  //           </Card.Body>
  //         </Card>
  //       </div>
  //     ));
  //   };]

  // useEffect(() => {
  //   const combineItem = track.map((track) => ({
  //     ...track,
  //     isSelected: selected.find((item) => item.id === track.id),
  //   }));
  //   setCombine(combineItem);
  // }, [track, selected]);

  const logout = () => {
    dispatch(setToken(''));
    window.localStorage.removeItem('token');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Spotify API</h1>
        <div className="header">
          <Button className="btnLogout" variant="danger" onClick={logout}>
            Logout
          </Button>
        </div>

        <div className="search">
          <Form style={{ width: '20rem' }} onSubmit={searchAlbums}>
            <Form.Control
              type="text"
              placeholder="Search Your Music"
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button
              className="btnSearch"
              as="input"
              type="submit"
              value="Search"
            />{' '}
          </Form>
        </div>

        {/* <h1>Selected</h1>
        <div className="albums">
          {selected.map((item) => (
            <Playlist
              key={item.id}
              url={item.album.images[0].url}
              title={item.name}
              artist={item.artists[0].name}
              album={item.album.name}
              click={selectClick(item)}
            />
          ))}
        </div> */}

        <h1> Track List</h1>
        <div className="albums">
          {track.map((item) => (
            <Playlist
              key={item.id}
              url={item.album.images[0].url}
              title={item.name}
              artist={item.artists[0].name}
              album={item.album.name}
            />
          ))}
        </div>
      </header>
    </div>
  );
}

export default Home;
