import React from 'react';
import { Box, Button, FormControl, FormLabel, Input, Textarea, Heading, Divider } from '@chakra-ui/react';

const ContactForm = () => {
  return (
    <Box bg="gray.20" p={8} rounded="md" shadow="md" maxW="800px" mx="auto" my={10}>
      <Heading as="h2" size="xl" textAlign="center" mb={4}>
        CONTACT
      </Heading>
      <Divider borderColor="red.500" borderWidth="2px" width="60px" mx="auto" mb={8} />
      <FormControl id="name" mb={4}>
        <FormLabel>Name</FormLabel>
        <Input type="text" placeholder="Name" />
      </FormControl>
      <FormControl id="phone" mb={4}>
        <FormLabel>Phone</FormLabel>
        <Input type="tel" placeholder="Phone" />
      </FormControl>
      <FormControl id="email" mb={4}>
        <FormLabel>Email address</FormLabel>
        <Input type="email" placeholder="Email address" />
      </FormControl>
      <FormControl id="message" mb={4}>
        <FormLabel>Message</FormLabel>
        <Textarea placeholder="Message" />
      </FormControl>
      <Button colorScheme="red" width="full">
        CONTACT US
      </Button>
    </Box>
  );
};

export default ContactForm;
