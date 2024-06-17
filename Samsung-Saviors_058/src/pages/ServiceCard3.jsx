import React from "react";
import {
  Box,
  Text,
  Grid,
  GridItem,
  VStack,
  Container,
  Spacer,
} from "@chakra-ui/react";

const ServiceCard2 = () => {
  const days = [1, 2, 3, 4];

  return (
    <Container
      maxW="container.xl"
      p={10}
      borderRadius="md"
      boxShadow="md"
      bg="gray.100"
    >
      <Box textAlign="center" mb={10} mt={9}>
        <Text fontSize="4xl" fontWeight="bold" color="teal.600">
          Itinerary
        </Text>
      </Box>
      {days.map((day) => (
        <Box key={day} mb={10}>
          <Text fontSize="2xl" fontWeight="bold" mb={4} color="teal.500">
            Day {day}
          </Text>
          <Grid
            templateColumns="repeat(4, 1fr)"
            gap={6}
            bg="white"
            p={10}
            borderRadius="md"
            boxShadow="sm"
          >
            <GridItem>
              <VStack spacing={4} align="stretch">
                <Text fontWeight="bold">Start Time:</Text>
                <Text>09.00 am</Text>
                <Text>11.00 am</Text>
                <Text>02.00 pm</Text>
                <Text>04.00 pm</Text>
              </VStack>
            </GridItem>
            <GridItem>
              <VStack spacing={4} align="stretch">
                <Text fontWeight="bold">End Time:</Text>
                <Text>09.00 am</Text>
                <Text>11.00 am</Text>
                <Text>02.00 pm</Text>
                <Text>04.00 pm</Text>
              </VStack>
            </GridItem>
            <GridItem>
              <VStack spacing={4} align="stretch">
                <Text fontWeight="bold">Activity:</Text>
                <Text>Activity Name</Text>
                <Text>Activity Name</Text>
                <Text>Activity Name</Text>
                <Text>Activity Name</Text>
              </VStack>
            </GridItem>
            <GridItem>
              <VStack spacing={4} align="stretch">
                <Text fontWeight="bold">budget:</Text>
                <Text>Activity Name</Text>
                <Text>Activity Name</Text>
                <Text>Activity Name</Text>
                <Text>Activity Name</Text>
              </VStack>
            </GridItem>
          </Grid>
        </Box>
      ))}
    </Container>
  );
};

export default ServiceCard2;
