// src/components/MyTripsPage.jsx
import React, { useState, useEffect } from 'react';
import { Box, VStack, Heading, Text, Spinner, Center, Stack } from '@chakra-ui/react';
import { getTrips } from '../services/authService';

const MyTripsPage = () => {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const tripsData = await getTrips();
        setTrips(tripsData);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchTrips();
  }, []);

  if (loading) {
    return (
      <Center height="100vh">
        <Spinner size="xl" />
      </Center>
    );
  }

  return (
    <Box p={4} maxWidth="1200px" mx="auto">
      <VStack spacing={4}>
        <Heading as="h2" size="xl" mb={4}>My Planned Trips</Heading>
        {trips.map((trip, index) => (
          <Box key={index} width="100%" p={4} borderWidth="1px" borderRadius="md" boxShadow="md">
            <Stack spacing={2}>
              <Text><strong>Date:</strong> {trip.date instanceof Date ? trip.date.toDateString() : 'Date Not Available'}</Text>
              <Text><strong>Destination:</strong> {trip.destination}</Text>
              <Text><strong>Hotel:</strong> {trip.hotel}</Text>
              <Text><strong>Time:</strong> {trip.time}</Text>
              <Text><strong>Itinerary:</strong> {trip.itinerary}</Text>
            </Stack>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default MyTripsPage;
