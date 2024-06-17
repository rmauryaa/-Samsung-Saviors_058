// src/pages/ServiceCard2.jsx
import React, { useState, useEffect } from 'react';
import { Box, VStack, Text, Button, Input, Textarea, FormControl, FormLabel, useToast } from '@chakra-ui/react';
import { getTrips, updateTrip, deleteTrip } from '../services/authService';

const ServiceCard2 = () => {
  const [trips, setTrips] = useState([]);
  const [selectedTrip, setSelectedTrip] = useState(null);
  const toast = useToast();

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const tripsData = await getTrips();
        setTrips(tripsData);
      } catch (error) {
        console.error(error);
        toast({
          title: "Error fetching trips",
          description: error.message,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    };
    fetchTrips();
  }, [toast]);

  const handleEditTrip = (trip) => {
    setSelectedTrip(trip);
  };

  const handleSaveTrip = async () => {
    try {
      await updateTrip(selectedTrip.date, selectedTrip);
      setTrips(trips.map(trip => trip.date === selectedTrip.date ? selectedTrip : trip));
      setSelectedTrip(null);
      toast({
        title: "Trip updated",
        description: `Your trip for ${selectedTrip.date.toDateString()} has been updated.`,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      console.error(error);
      toast({
        title: "Error updating trip",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleDeleteTrip = async (date) => {
    try {
      await deleteTrip(date);
      setTrips(trips.filter(trip => trip.date !== date));
      toast({
        title: "Trip deleted",
        description: `Your trip for ${new Date(date).toDateString()} has been deleted.`,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      console.error(error);
      toast({
        title: "Error deleting trip",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box p={4} maxWidth="1200px" mx="auto">
      <VStack spacing={4}>
        <Text fontSize="2xl" fontWeight="bold">Manage Your Trips</Text>
        {trips.map((trip, index) => (
          <Box key={index} width="100%" p={4} borderWidth="1px" borderRadius="md" boxShadow="md">
            <Text><strong>Date:</strong> {trip.date.toDateString()}</Text>
            <Text><strong>Destination:</strong> {trip.destination}</Text>
            <Text><strong>Hotel:</strong> {trip.hotel}</Text>
            <Text><strong>Start Time:</strong> {trip.startTime}</Text>
            <Text><strong>End Time:</strong> {trip.endTime}</Text>
            <Text><strong>Budget:</strong> {trip.budget}</Text>
            <Text><strong>Itinerary:</strong> {trip.itinerary}</Text>
            <Button colorScheme="blue" mt={2} onClick={() => handleEditTrip(trip)}>Edit</Button>
            <Button colorScheme="red" mt={2} onClick={() => handleDeleteTrip(trip.date)}>Delete</Button>
          </Box>
        ))}
        {selectedTrip && (
          <Box width="100%" mt={4} p={4} borderWidth="1px" borderRadius="md" boxShadow="md">
            <FormControl mb={4}>
              <FormLabel>Destination</FormLabel>
              <Input
                value={selectedTrip.destination}
                onChange={(e) => setSelectedTrip({ ...selectedTrip, destination: e.target.value })}
                placeholder="Enter your destination"
              />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Hotel</FormLabel>
              <Input
                value={selectedTrip.hotel}
                onChange={(e) => setSelectedTrip({ ...selectedTrip, hotel: e.target.value })}
                placeholder="Enter your hotel"
              />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Start Time</FormLabel>
              <Input
                value={selectedTrip.startTime}
                onChange={(e) => setSelectedTrip({ ...selectedTrip, startTime: e.target.value })}
                placeholder="Enter the start time"
              />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>End Time</FormLabel>
              <Input
                value={selectedTrip.endTime}
                onChange={(e) => setSelectedTrip({ ...selectedTrip, endTime: e.target.value })}
                placeholder="Enter the end time"
              />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Travel Budget</FormLabel>
              <Input
                value={selectedTrip.budget}
                onChange={(e) => setSelectedTrip({ ...selectedTrip, budget: e.target.value })}
                placeholder="Enter your travel budget"
              />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Itinerary</FormLabel>
              <Textarea
                value={selectedTrip.itinerary}
                onChange={(e) => setSelectedTrip({ ...selectedTrip, itinerary: e.target.value })}
                placeholder="Enter your trip itinerary here..."
              />
            </FormControl>
            <Button colorScheme="teal" onClick={handleSaveTrip}>Save Trip</Button>
          </Box>
        )}
      </VStack>
    </Box>
  );
};

export default ServiceCard2;
