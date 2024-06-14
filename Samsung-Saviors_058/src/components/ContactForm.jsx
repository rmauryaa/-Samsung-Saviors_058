import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Heading,
  Divider,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from '@chakra-ui/react';

const ContactForm = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Form validation
    if (name.trim() === '' || phone.trim() === '' || email.trim() === '' || message.trim() === '') {
      alert('Please fill in all fields.');
      return;
    }
    // Additional form submission logic can go here
    // For demonstration, just opening the modal
    onOpen();
  };

  return (
    <Box bg="gray.20" p={8} rounded="md" shadow="md" maxW="800px" mx="auto" my={10}>
      <Heading as="h2" size="xl" textAlign="center" mb={4}>
        CONTACT
      </Heading>
      <Divider borderColor="red.500" borderWidth="2px" width="60px" mx="auto" mb={8} />

      <form onSubmit={handleSubmit}>
        <FormControl id="name" mb={4} isRequired>
          <FormLabel>Name</FormLabel>
          <Input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        </FormControl>
        <FormControl id="phone" mb={4} isRequired>
          <FormLabel>Phone</FormLabel>
          <Input type="tel" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </FormControl>
        <FormControl id="email" mb={4} isRequired>
          <FormLabel>Email address</FormLabel>
          <Input type="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
        </FormControl>
        <FormControl id="message" mb={4} isRequired>
          <FormLabel>Message</FormLabel>
          <Textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} />
        </FormControl>
        <Button type="submit" colorScheme="red" width="full">
          CONTACT US
        </Button>
      </form>

      {/* Modal for Success Message */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent borderRadius="md" bg="white" p={4}>
          <ModalHeader textAlign="center" borderBottomWidth="1px">
            <Heading size="lg" color="blue.500">
              Form Submitted Successfully!
            </Heading>
          </ModalHeader>
          <ModalBody>
            <Box fontSize="lg" textAlign="center">
              <p>Thank you for reaching out to us!</p>
              <p>We will get back to you as soon as possible.</p>
            </Box>
          </ModalBody>
          <ModalFooter justifyContent="center">
            <Button colorScheme="blue" onClick={onClose} mr={3}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ContactForm;
