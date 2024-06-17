import React, { useState, useEffect } from 'react';
import { Button, Flex } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';
import { signInWithGoogle, signOutFromGoogle } from '../services/authService';
import { auth } from '../services/firebase';
import { onAuthStateChanged } from 'firebase/auth';

const GoogleAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const toast = useToast();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });

    return () => unsubscribe();
  }, []);

  const handleGoogleSignIn = async () => {
    try {
      const user = await signInWithGoogle();
      setIsLoggedIn(true);
      toast({
        title: "Successfully signed in",
        description: `Welcome, ${user.displayName}!`,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      console.error("Error signing in with Google", error);
      toast({
        title: "Error signing in",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleGoogleSignOut = async () => {
    try {
      await signOutFromGoogle();
      setIsLoggedIn(false);
      toast({
        title: "Signed out",
        description: "You have successfully signed out.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      console.error("Error signing out from Google", error);
      toast({
        title: "Error signing out",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex alignItems="center">
      {!isLoggedIn && (
        <Button
          onClick={handleGoogleSignIn}
          variant="outline"
          colorScheme="green"
          size="sm"
          marginRight="10px"
        >
          Sign In with Google
        </Button>
      )}
      {isLoggedIn && (
        <Button
          onClick={handleGoogleSignOut}
          variant="outline"
          colorScheme="red"
          size="sm"
        >
          Sign Out
        </Button>
      )}
    </Flex>
  );
};

export default GoogleAuth;
