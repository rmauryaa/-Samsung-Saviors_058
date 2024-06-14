import React, { useEffect } from 'react';
import { Button, Box, Flex } from '@chakra-ui/react';
import { gapiLoaded, gisLoaded, handleAuthClick, handleSignoutClick } from '../google';

const GoogleAuth = () => {
  useEffect(() => {
    // Load Google API script
    const gapiScript = document.createElement('script');
    gapiScript.src = 'https://apis.google.com/js/api.js';
    gapiScript.onload = gapiLoaded;
    document.body.appendChild(gapiScript);

    // Load Google Identity Services script
    const gisScript = document.createElement('script');
    gisScript.src = 'https://accounts.google.com/gsi/client';
    gisScript.onload = gisLoaded;
    document.body.appendChild(gisScript);
  }, []);

  return (
    <Flex alignItems="center">
      <Button
        id="authorize_button"
        onClick={handleAuthClick}
        style={{ visibility: 'hidden', marginRight: '10px' }}
        variant="outline"
        colorScheme="green"
        size="sm"
      >
        Sign In with Google
      </Button>
      <Button
        id="signout_button"
        onClick={handleSignoutClick}
        style={{ visibility: 'hidden' }}
        variant="outline"
        colorScheme="red"
        size="sm"
      >
        Sign Out
      </Button>
      <Box ml={4}>
        <pre id="content" style={{ whiteSpace: 'pre-wrap' }}></pre>
      </Box>
    </Flex>
  );
};

export default GoogleAuth;
