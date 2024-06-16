import React from 'react';
import { Box, Flex, Text, Link, Icon, VStack, HStack, Divider, useColorModeValue } from "@chakra-ui/react";
import { PhoneIcon, EmailIcon, TimeIcon } from "@chakra-ui/icons";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const ContactInfoWithMap = () => {
  return (
    <Box p={8} boxShadow="lg" bg="black" rounded="md" maxW="100%" mx="auto" mt={10} color="white">
      {/* Contact Info Section */}
      <Flex justify="space-between" align="center" mb={10} direction={{ base: "column", md: "row" }}>
        <Box mb={{ base: 10, md: 0 }}>
          <Text fontSize="2xl" fontWeight="bold" mb={4}>Delhi, India</Text>
          <VStack align="start" spacing={4}>
            <HStack>
              <Icon as={PhoneIcon} color="red.500" />
              <Link href="tel:+911234567890" color="red.500" fontWeight="medium">+91-1234567890</Link>
            </HStack>
            <HStack>
              <Icon as={EmailIcon} color="red.500" />
              <Link href="mailto:example@gmail.com" color="red.500" fontWeight="medium">example@gmail.com</Link>
            </HStack>
            <HStack>
              <Icon as={TimeIcon} color="red.500" />
              <Text color="red.500" fontWeight="medium">Mon-Fri - 08:00-19:00</Text>
            </HStack>
          </VStack>
        </Box>
        {/* Google Maps Section */}
        <Box flex="1" ml={{ base: 0, md: 5 }} height="300px" position="relative" w={{ base: "100%", md: "60%" }}>
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.839370995!2d77.068897!3d28.527218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1dff1e8b3f4b%3A0x4c3b8f7b0c0b0e0!2sDelhi!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: 'md' }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </Box>
      </Flex>

      {/* Divider */}
      <Divider my={8} borderColor="gray.600" />

      {/* Footer Section */}
      <Box textAlign="center" mb={5}>
        <Text fontSize="xl" fontWeight="bold" mb={2}>Weekend Planner</Text>
        <Text>Copyright © 2024 All rights reserved</Text>
        <Text>
          Powered By <Link href="#" color="red.500" fontWeight="medium">Weekend Planner - Website creator</Link>
        </Text>
      </Box>

      {/* Navigation Links Section */}
      <Flex justify="center" wrap="wrap" mt={5} mb={5}>
        <Link href="#" mx={3} my={2} color="white" fontWeight="medium">HOME</Link>
        <Link href="#" mx={3} my={2} color="white" fontWeight="medium">ABOUT</Link>
        <Link href="#" mx={3} my={2} color="white" fontWeight="medium">SERVICES</Link>
        <Link href="#" mx={3} my={2} color="white" fontWeight="medium">TESTIMONIALS</Link>
        <Link href="#" mx={3} my={2} color="white" fontWeight="medium">CONTACT</Link>
      </Flex>

      {/* Additional Footer Section */}
      <Box textAlign="center" py={5} bg="gray.900" rounded="md">
        <Text fontSize="lg" fontWeight="bold" color="white">Follow Us</Text>
        <HStack justify="center" spacing={8} mt={4}>
          <Link href="https://facebook.com" isExternal>
            <Icon as={FaFacebook} size="lg" color="red.500" />
          </Link>
          <Link href="https://twitter.com" isExternal>
            <Icon as={FaTwitter} size="lg" color="red.500" />
          </Link>
          <Link href="https://instagram.com" isExternal>
            <Icon as={FaInstagram} size="lg" color="red.500" />
          </Link>
          <Link href="https://linkedin.com" isExternal>
            <Icon as={FaLinkedin} size="lg" color="red.500" />
          </Link>
        </HStack>
      </Box>
    </Box>
  );
};

export default ContactInfoWithMap;
