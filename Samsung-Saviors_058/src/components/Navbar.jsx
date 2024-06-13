import React, { useState } from 'react';
import { Box, Flex, HStack, Link, IconButton, useDisclosure, Button, useColorModeValue } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import GoogleAuth from './GoogleAuth'; // Import GoogleAuth component for Google Sign-In

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const hoverColor = useColorModeValue('gray.800', 'gray.100'); // Adjust hover color based on color mode

  return (
    <Box bg="gray.900" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box fontSize="2xl" fontWeight="bold" color="white">Weekend Planner</Box>
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Open Menu"
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack
          as="nav"
          spacing={4}
          display={{ base: 'none', md: 'flex' }}
          color="white"
        >
          <Link href="#home">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#services">Services</Link>
          <Link href="#testimonials">Testimonials</Link>
          <Link href="#contact">Contact</Link>
        </HStack>
        {/* Google Sign-In Button */}
        <GoogleAuth />
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <HStack as="nav" spacing={4} color="white" flexDirection="column">
            <Link href="#home">Home</Link>
            <Link href="#about">About</Link>
            <Link href="#services">Services</Link>
            <Link href="#testimonials">Testimonials</Link>
            <Link href="#contact">Contact</Link>
          </HStack>
          {/* Google Sign-In Button */}
          <Box mt={4}>
            <GoogleAuth />
          </Box>
        </Box>
      ) : null}
    </Box>
  );
};

export default Navbar;
