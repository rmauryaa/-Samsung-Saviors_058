import React from 'react';
import { Box, Flex, Text, Image, Heading, Stack } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'John Doe',
    title: 'Weekend Explorer',
    image: 'https://www.servcorp.com/media/28199/background-checks.jpg?format=webp&quality=80&width=688',
    quote: 'This planner saved my trip. When plans changed, I quickly found a new adventure!',
  },
  {
    name: 'Jane Smith',
    title: 'Travel Enthusiast',
    image: 'https://media.istockphoto.com/id/1350172562/photo/a-happy-businessman-is-sitting-in-a-coffee-shop-and-checking-on-his-bank-account-on-the.jpg?s=612x612&w=0&k=20&c=vCojhktp7d5Ohc0eXcjim3Vce6YP52XOC1yF5zdQzAI=',
    quote: 'Great tool for managing multiple plans. I love the inspirations it offers!',
  },
  {
    name: 'Alice Johnson',
    title: 'Casual Traveler',
    image: 'https://i.insider.com/63f5f1ff88f76900192cca6a?width=1136&format=jpeg',
    quote: 'Perfect for spontaneous trips! It made everything so easy.',
  },
];

const Testimonials = () => {
  return (
    <Box
      p={8}
      bg="gray.50"
      borderRadius="md"
      maxW="1200px"
      mx="auto"
      as={motion.div}
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Heading as="h2" size="xl" textAlign="center" mb={4}>
        Testimonials
      </Heading>
      <Box borderBottomWidth="2px" borderColor="red.500" width="60px" mx="auto" mb={8} />
      <Flex
        direction={{ base: 'column', md: 'row' }}
        justify="space-around"
        align="center"
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.3 }}
      >
        {testimonials.map((testimonial, index) => (
          <Box
            key={index}
            bg="white"
            p={6}
            m={4}
            borderRadius="md"
            shadow="md"
            maxW="350px"
            as={motion.div}
            whileHover={{ scale: 1.05 }}
          >
            <Image
              borderRadius="full"
              boxSize="100px"
              src={testimonial.image}
              alt={testimonial.name}
              mx="auto"
            />
            <Stack spacing={3} mt={4} textAlign="center">
              <Heading as="h3" size="md">
                {testimonial.name}
              </Heading>
              <Text fontSize="sm" color="gray.500">
                {testimonial.title}
              </Text>
              <Flex justifyContent="center" mt={2}>
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} color="yellow.500" />
                ))}
              </Flex>
              <Text mt={2} fontStyle="italic">
                "{testimonial.quote}"
              </Text>
            </Stack>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default Testimonials;
