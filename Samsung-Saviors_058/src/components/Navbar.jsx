// src/components/Navbar.jsx
import React from 'react';
import { Box, Flex, HStack, IconButton, useDisclosure, useColorModeValue } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import GoogleAuth from './GoogleAuth';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const hoverColor = useColorModeValue('gray.800', 'gray.100'); // Adjust hover color based on color mode

  return (
    <Box bg="gray.900" px={6} pos="fixed" w="100%" zIndex="999">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <RouterLink to="/" style={{ textDecoration: 'none' }}>
          <Box fontSize="2xl" fontWeight="bold" color="white" cursor="pointer">
            Weekend Planner
          </Box>
        </RouterLink>
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
          <ScrollLink to="home" smooth={true} duration={500}>
            <Box cursor="pointer" _hover={{ color: hoverColor }}>Home</Box>
          </ScrollLink>
          <ScrollLink to="about" smooth={true} duration={500}>
            <Box cursor="pointer" _hover={{ color: hoverColor }}>About</Box>
          </ScrollLink>
          <ScrollLink to="services" smooth={true} duration={500}>
            <Box cursor="pointer" _hover={{ color: hoverColor }}>Services</Box>
          </ScrollLink>
          <ScrollLink to="testimonials" smooth={true} duration={500}>
            <Box cursor="pointer" _hover={{ color: hoverColor }}>Testimonials</Box>
          </ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={500}>
            <Box cursor="pointer" _hover={{ color: hoverColor }}>Contact</Box>
          </ScrollLink>
        </HStack>
        <GoogleAuth />
      </Flex>

      {isOpen && (
        <Box pb={4} display={{ md: 'none' }}>
          <HStack as="nav" spacing={4} color="white" flexDirection="column">
            <ScrollLink to="home" smooth={true} duration={500}>
              <Box cursor="pointer" _hover={{ color: hoverColor }}>Home</Box>
            </ScrollLink>
            <ScrollLink to="about" smooth={true} duration={500}>
              <Box cursor="pointer" _hover={{ color: hoverColor }}>About</Box>
            </ScrollLink>
            <ScrollLink to="services" smooth={true} duration={500}>
              <Box cursor="pointer" _hover={{ color: hoverColor }}>Services</Box>
            </ScrollLink>
            <ScrollLink to="testimonials" smooth={true} duration={500}>
              <Box cursor="pointer" _hover={{ color: hoverColor }}>Testimonials</Box>
            </ScrollLink>
            <ScrollLink to="contact" smooth={true} duration={500}>
              <Box cursor="pointer" _hover={{ color: hoverColor }}>Contact</Box>
            </ScrollLink>
            <GoogleAuth />
          </HStack>
        </Box>
      )}
    </Box>
  );
};

export default Navbar;
