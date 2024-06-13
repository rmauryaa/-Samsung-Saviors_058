import React from 'react';
import { Box, Flex, Image, Text, Heading, Divider } from '@chakra-ui/react';

const AboutUs = () => {
  return (
    <Flex direction={{ base: 'column', md: 'row' }} p={5} bg="gray.50">
      <Box flex="1">
        <Image
          src="https://images.squarespace-cdn.com/content/v1/5b420b8c1aef1dea2e4f205b/9f24711c-f728-4c01-a296-8171df6d1a36/Leap+Day.jpg?format=1500w"
          alt="Notebook and coffee"
          borderRadius="md"
          objectFit="cover"
          w="100%"
          h="100%"
        />
      </Box>
      <Box flex="1" p={5} bg="gray.100" borderRadius="md">
        <Heading as="h2" size="xl" mb={4}>
          About Us
        </Heading>
        <Divider borderColor="red.500" borderWidth="2px" w="50px" mb={4} />
        <Text fontSize="lg">
          Our Weekend Getaway Planner seamlessly arranges your trips, ensuring your adventures are efficient and stress-free. Whether it’s a spontaneous day out or a well-planned excursion, our advanced tools turn your travel dreams into reality with simplified arrangements.
        </Text>
      </Box>
    </Flex>
  );
};

export default AboutUs;
