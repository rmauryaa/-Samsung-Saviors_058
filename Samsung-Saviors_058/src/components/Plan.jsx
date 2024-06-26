// src/components/Plan.jsx
import React from 'react';
import { Box, Text, Image, VStack, Divider, Button } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';
import { auth } from '../services/firebase';

const Plan = () => {
  const navigate = useNavigate();
  const toast = useToast();

  const handleChooseDates = () => {
    if (!auth.currentUser) {
      toast({
        title: "Authentication required",
        description: "Please sign in to choose dates.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return; // Prevent navigation
    } else {
      navigate('/calendar');
    }
  };

  return (
    <Box position="relative" width="100%" height="400px">
      <Image
        src="https://static.wixstatic.com/media/d10a57_874dcf05a7e04da2b30a419042f0b233~mv2.jpg/v1/fill/w_1406,h_558,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/d10a57_874dcf05a7e04da2b30a419042f0b233~mv2.jpg"
        alt="Background"
        objectFit="cover"
        width="100%"
        height="100%"
      />
      <Box
        position="absolute"
        top="20%"
        right="5%"
        // transform="translateY(-50%)"
        width={{ base: "80%", md: "40%" }}
        height="auto"
        bg="rgba(255, 255, 255, 0.8)"
        p={8}
        borderRadius="md"
        boxShadow="lg"
        transition="transform 0.3s"
        _hover={{ transform: "scale(1.05)" }}
      >
        <VStack
          spacing={4}
          align="start"
        >
          <Text fontSize="3xl" fontWeight="bold">
            Plan Your Ideal Weekend
          </Text>
          <Divider borderColor="red.500" borderWidth="2px" width="20%" />
          <Text fontSize="md">
            Turn Cancelled Plans into New Opportunities
          </Text>
          <Button colorScheme="teal" mt={4} onClick={handleChooseDates}>Choose Dates</Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default Plan;
