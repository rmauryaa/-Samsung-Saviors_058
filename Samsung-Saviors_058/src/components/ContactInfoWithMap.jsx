import React from 'react';
import { Box, Flex, Text, Link, Icon } from "@chakra-ui/react";
import { PhoneIcon, EmailIcon, TimeIcon } from "@chakra-ui/icons";

const ContactInfoWithMap = () => {
  return (
    <Box p={5} boxShadow="md" bg="white" rounded="md">
      {/* Contact Info Section */}
      <Flex justify="space-between" align="center" mb={5}>
        <Box>
          <Text fontSize="xl" fontWeight="bold">Delhi, India</Text>
          <Flex align="center" mt={2}>
            <Icon as={PhoneIcon} color="red.500" mr={2} />
            <Link href="tel:+911234567890" color="red.500">+91-1234567890</Link>
          </Flex>
          <Flex align="center" mt={2}>
            <Icon as={EmailIcon} color="red.500" mr={2} />
            <Link href="mailto:example@gmail.com" color="red.500">example@gmail.com</Link>
          </Flex>
          <Flex align="center" mt={2}>
            <Icon as={TimeIcon} color="red.500" mr={2} />
            <Text color="red.500">Mon-Fri - 08:00-19:00</Text>
          </Flex>
        </Box>
        {/* Google Maps Section */}
        <Box flex="1" ml={5} height="300px" position="relative">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.839370995!2d77.068897!3d28.527218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1dff1e8b3f4b%3A0x4c3b8f7b0c0b0e0!2sDelhi!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
            width="90%"
            height="100%"
            style={{ border: 0, borderRadius: 'md' }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </Box>
      </Flex>

      {/* Footer Section */}
      <Box textAlign="center">
        <Text fontSize="lg" fontWeight="bold">Weekend Planner</Text>
        <Text>Copyright © 2024 All rights reserved</Text>
        <Text>
          Powered By <Link href="#" color="red.500">Weekend Planner - Website creator</Link>
        </Text>
      </Box>

      {/* Navigation Links Section */}
      <Flex justify="center" mt={5}>
        <Link href="#" mx={2}>HOME</Link>
        <Link href="#" mx={2}>ABOUT</Link>
        <Link href="#" mx={2}>SERVICES</Link>
        <Link href="#" mx={2}>TESTIMONIALS</Link>
        <Link href="#" mx={2}>CONTACT</Link>
      </Flex>
    </Box>
  );
};

export default ContactInfoWithMap;
