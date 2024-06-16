import React, { useEffect } from 'react';
import { Box, Text, Flex, Image } from "@chakra-ui/react";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Widget = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once when in view
    threshold: 0.2,    // Trigger animation when 20% of the element is visible
  });

  useEffect(() => {
    if (inView) {
      // Trigger animation here (if needed)
    }
  }, [inView]);

  return (
    <Box py={10} textAlign="center">
      <Text fontSize="2xl" mb={6}>SERVICES</Text>
      <Box w="50%" h="2px" bg="red.500" mx="auto" mb={10}></Box>
      <Flex justify="center" flexWrap="wrap">
        <MotionBox
          ref={ref}
          maxW="sm"
          borderWidth="2px"
          rounded="lg"
          overflow="hidden"
          m={4}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
          <Image
            src="https://media.licdn.com/dms/image/C4D12AQHH9RamoD6drg/article-cover_image-shrink_720_1280/0/1609060487754?e=1723680000&v=beta&t=z-8OMBgl9Gjy3R_tsI5my_WbsXzSxdjWCmqh3fdnKO0"
            alt="Adventure Inspiration"
            rounded="lg"
            boxSize="300px"
            objectFit="cover"
          />
          <Box p={6}>
            <Text fontSize="md" mb={2} fontWeight="semibold">Adventure Inspiration</Text>
            <Text fontSize="sm">Discover new destinations and activities through our curated list of exciting weekend itineraries.</Text>
          </Box>
        </MotionBox>

        <MotionBox
          ref={ref}
          maxW="sm"
          borderWidth="2px"
          rounded="lg"
          overflow="hidden"
          m={4}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
          <Image
            src="https://cloudmantras.com/wp-content/uploads/2020/01/salesforce-industries-2-e1580401996286.png"
            alt="Instant Cancellations"
            rounded="lg"
            boxSize="300px"
            objectFit="cover"
          />
          <Box p={6}>
            <Text fontSize="md" mb={2} fontWeight="semibold">Instant Cancellations</Text>
            <Text fontSize="sm">Quickly manage and update your travel plans with our easy-to-use cancellation feature.</Text>
          </Box>
        </MotionBox>

        <MotionBox
          ref={ref}
          maxW="sm"
          borderWidth="2px"
          rounded="lg"
          overflow="hidden"
          m={4}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
          <Image
            src="https://www.storenshipfast.com/wp-content/uploads/2018/07/user-management-system.jpg"
            alt="Tailored Itineraries"
            rounded="lg"
            boxSize="300px"
            objectFit="cover"
          />
          <Box p={6}>
            <Text fontSize="md" mb={2} fontWeight="semibold">Tailored Itineraries</Text>
            <Text fontSize="sm">Create customized travel plans based on your unique preferences, from scenic hikes to cultural city tours.</Text>
          </Box>
        </MotionBox>
      </Flex>
    </Box>
  );
};

const MotionBox = motion(Box);

export default Widget;
