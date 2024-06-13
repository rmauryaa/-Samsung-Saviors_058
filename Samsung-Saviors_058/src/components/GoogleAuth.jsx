/* global gapi */
import React, { useState, useEffect } from 'react';
import { Button } from '@chakra-ui/react';

const CLIENT_ID = '132041858442-ltei1fbc8pj5r0ufgbfdtqbd4qe94c2k.apps.googleusercontent.com';
const API_KEY = 'AIzaSyC2B6TmKHg5ykgGpZuOe8hPemq5m2TE4tE';
const DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'];
const SCOPES = 'https://www.googleapis.com/auth/calendar';
const REDIRECT_URI = 'http://localhost:3002'; // Replace with your authorized redirect URI

const GoogleAuth = ({ handleAuth }) => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/api.js';
    script.onload = () => {
      gapi.load('client:auth2', initClient);
    };
    document.body.appendChild(script);
  }, []);

  const initClient = () => {
    gapi.client
      .init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
        redirect_uri: REDIRECT_URI, // Set the redirect URI here
      })
      .then(() => {
        gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
        updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
      })
      .catch((error) => {
        console.error('Error initializing Google API client', error);
      });
  };

  const updateSigninStatus = (signedIn) => {
    setIsSignedIn(signedIn);
    if (signedIn) {
      handleAuth(gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse().access_token);
    }
  };

  const handleSignInClick = () => {
    gapi.auth2.getAuthInstance().signIn();
  };

  const handleSignOutClick = () => {
    gapi.auth2.getAuthInstance().signOut();
  };

  return (
    <div>
      {isSignedIn ? (
        <Button colorScheme="red" onClick={handleSignOutClick}>
          Sign Out
        </Button>
      ) : (
        <Button colorScheme="green" onClick={handleSignInClick}>
          Sign In with Google
        </Button>
      )}
    </div>
  );
};

export default GoogleAuth;
