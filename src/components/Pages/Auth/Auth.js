import { Button } from 'react-bootstrap';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setToken } from '../../../reducer/reducer';
import './auth.css';

const CLIENT_ID = '0e384806e0754578bdaabb2b20c6440c';
const REDIRECT_URI = 'http://localhost:3000/';
const SCOPE = 'playlist-modify-private';

export default function Auth() {
  const dispatch = useDispatch();

  const auth = () => {
    const url = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}&response_type=token&show_dialog=true`;
    window.location = url;
  };

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem('token');

    if (!token && hash) {
      token = hash
        .substring(1)
        .split('&')
        .find((elem) => elem.startsWith('access_token'))
        .split('=')[1];

      window.location.hash = '';
      window.localStorage.setItem('token', token);
    }

    dispatch(setToken(token));
  });

  return (
    <div className="center-login">
      <Button variant="primary" onClick={auth}>
        Login
      </Button>
    </div>
  );
}
