import React from 'react';
import { Box, Image, Text, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const HeroSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px', // Adjust rootMargin as per your design and layout
  });

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
        as={motion.div}
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bg="blackAlpha.600"
        justifyContent="center"
        alignItems="flex-start"
        p={8}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        ref={ref}
      >
        <Text
          fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
          fontWeight="bold"
          color="white"
          mb={4}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeInOut' }}
        >
          Weekend Getaway Planner
        </Text>
        <Box
          w="50px"
          h="5px"
          bg="red.600"
          my={4}
          as={motion.div}
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.5 }}
        />
        <Text
          fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}
          color="white"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: 'easeInOut' }}
        >
          Simplify Your Adventures with Ease
        </Text>
      </VStack>
    </Box>
  );
};

export default HeroSection;
