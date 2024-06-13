import React from 'react';
import { Box, Flex, Text, Image, Heading, Stack } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

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
    quote: 'Perfect for spontaneous trips! It makes planning effortless.',
  },
];

const Testimonials = () => {
  return (
    <Box py={10} px={5}>
      <Heading as="h2" textAlign="center" mb={10}>
        TESTIMONIALS
      </Heading>
      <Flex justify="space-around" flexWrap="wrap">
        {testimonials.map((testimonial, index) => (
          <Box key={index} maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" m={5} p={5} textAlign="center" boxShadow="md" bg="gray.50">
            <Text fontSize="xl" fontStyle="italic" mb={4}>
              &ldquo; {testimonial.quote} &rdquo;
            </Text>
            <Image borderRadius="md" boxSize="150px" src={testimonial.image} alt={testimonial.name} mx="auto" mb={4} objectFit="cover" />
            <Text fontWeight="bold" fontSize="lg" mb={1}>{testimonial.name}</Text>
            <Text fontSize="sm" color="gray.500">{testimonial.title}</Text>
            <Stack direction="row" justify="center" mt={2} spacing={1}>
              {Array(5).fill('').map((_, i) => (
                <StarIcon key={i} color="yellow.500" />
              ))}
            </Stack>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default Testimonials;
