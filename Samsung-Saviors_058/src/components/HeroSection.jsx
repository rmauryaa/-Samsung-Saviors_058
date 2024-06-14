import React from 'react';
import { Box, Image, Text, VStack, Stack } from '@chakra-ui/react';

const HeroSection = () => {
  return (
    <Box position="relative" w="100%" h={{ base: '50vh', md: '60vh', lg: '80vh' }}>
      <Image
        src="https://images.pexels.com/photos/212286/pexels-photo-212286.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Hero Background"
        objectFit="cover"
        w="100%"
        h="100%"
      />
      <VStack
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bg="blackAlpha.600"
        justifyContent="center"
        alignItems="flex-start"
        p={8}
      >
        <Text fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} fontWeight="bold" color="white">
          Weekend Getaway Planner
        </Text>
        <Box w="50px" h="5px" bg="red.600" my={4}></Box>
        <Text fontSize={{ base: 'md', md: 'lg', lg: 'xl' }} color="white">
          Simplify Your Adventures with Ease
        </Text>
      </VStack>
    </Box>
  );
};

export default HeroSection;
