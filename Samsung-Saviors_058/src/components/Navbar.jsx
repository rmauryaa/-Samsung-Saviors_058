import React from 'react';
import { Box, Flex, HStack, Link, IconButton, useDisclosure, useColorModeValue } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import GoogleAuth from './GoogleAuth'; 

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const hoverColor = useColorModeValue('gray.800', 'gray.100'); // Adjust hover color based on color mode

  return (
    <Box bg="gray.900" px={6} pos="fixed" w="100%" zIndex="999">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Link href="#" _hover={{ textDecoration: 'none' }}>
          <Box fontSize="2xl" fontWeight="bold" color="white">
            Weekend Planner
          </Box>
        </Link>
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
        {/* GoogleAuth Component */}
        <GoogleAuth />
      </Flex>

      {isOpen && (
        <Box pb={4} display={{ md: 'none' }}>
          <HStack as="nav" spacing={4} color="white" flexDirection="column">
            <Link href="#home">Home</Link>
            <Link href="#about">About</Link>
            <Link href="#services">Services</Link>
            <Link href="#testimonials">Testimonials</Link>
            <Link href="#contact">Contact</Link>
          </HStack>
          {/* GoogleAuth Component */}
          <GoogleAuth />
        </Box>
      )}
    </Box>
  );
};

export default Navbar;
