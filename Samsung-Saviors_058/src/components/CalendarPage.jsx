// src/components/CalendarPage.jsx
import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Box, Button, VStack, Heading, Spinner, Center, Input, Textarea, FormControl, FormLabel, useToast } from '@chakra-ui/react';
import { addTrip, getTrips } from '../services/authService';
import { useNavigate } from 'react-router-dom';
import '../styles/CalendarPage.css'; // Import custom styles

const CalendarPage = () => {
  const [date, setDate] = useState(new Date());
  const [selectedDates, setSelectedDates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tripDetails, setTripDetails] = useState({ destination: '', hotel: '', startTime: '', endTime: '', budget: '', itinerary: '' });
  const [isFormVisible, setFormVisible] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const trips = await getTrips();
        setSelectedDates(trips);
      } catch (error) {
        console.error(error);
        toast({
          title: "Authentication required",
          description: "Please sign in to manage your trips.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
        navigate('/');
      } finally {
        setLoading(false);
      }
    };
    fetchTrips();
  }, [navigate, toast]);

  const handleDateChange = (newDate) => {
    setDate(newDate);
    const existingTrip = selectedDates.find(d => d.date.toDateString() === newDate.toDateString());
    setTripDetails(existingTrip ? existingTrip : { destination: '', hotel: '', startTime: '', endTime: '', budget: '', itinerary: '' });
    setFormVisible(true);
  };

  const handleSaveTrip = async () => {
    try {
      await addTrip(date, tripDetails);
      setSelectedDates([...selectedDates, { date, ...tripDetails }]);
      toast({
        title: "Trip saved",
        description: `Your trip for ${date.toDateString()} has been saved.`,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      setFormVisible(false);
    } catch (error) {
      console.error(error);
      toast({
        title: "Error saving trip",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  if (loading) {
    return (
      <Center height="100vh">
        <Spinner size="xl" />
      </Center>
    );
  }

  return (
    <Box className="calendar-page-container" bg="#2d3748" minHeight="100vh" display="flex" justifyContent="center" alignItems="center">
      <Box p={4} maxWidth="1200px" bg="gray.900" color="white" borderRadius="md" boxShadow="lg" width="100%">
        <VStack spacing={4}>
          <Heading as="h2" size="xl" mb={4}>Select Your Travel Dates</Heading>
          <Box borderWidth="1px" borderRadius="md" overflow="hidden" bg="gray.800">
            <Calendar
              onChange={handleDateChange}
              value={date}
              tileClassName={({ date }) =>
                selectedDates.find(d => d.date.toDateString() === date.toDateString()) ? 'selected' : null
              }
            />
          </Box>
          {isFormVisible && (
            <Box width="100%" mt={4} p={4} borderWidth="1px" borderRadius="md" boxShadow="md" bg="gray.800">
              <FormControl mb={4}>
                <FormLabel>Destination</FormLabel>
                <Input
                  value={tripDetails.destination}
                  onChange={(e) => setTripDetails({ ...tripDetails, destination: e.target.value })}
                  placeholder="Enter your destination"
                  bg="gray.700"
                  color="white"
                />
              </FormControl>
              <FormControl mb={4}>
                <FormLabel>Hotel</FormLabel>
                <Input
                  value={tripDetails.hotel}
                  onChange={(e) => setTripDetails({ ...tripDetails, hotel: e.target.value })}
                  placeholder="Enter your hotel"
                  bg="gray.700"
                  color="white"
                />
              </FormControl>
              <FormControl mb={4}>
                <FormLabel>Start Time</FormLabel>
                <Input
                  value={tripDetails.startTime}
                  onChange={(e) => setTripDetails({ ...tripDetails, startTime: e.target.value })}
                  placeholder="Enter the start time"
                  bg="gray.700"
                  color="white"
                />
              </FormControl>
              <FormControl mb={4}>
                <FormLabel>End Time</FormLabel>
                <Input
                  value={tripDetails.endTime}
                  onChange={(e) => setTripDetails({ ...tripDetails, endTime: e.target.value })}
                  placeholder="Enter the end time"
                  bg="gray.700"
                  color="white"
                />
              </FormControl>
              <FormControl mb={4}>
                <FormLabel>Travel Budget</FormLabel>
                <Input
                  value={tripDetails.budget}
                  onChange={(e) => setTripDetails({ ...tripDetails, budget: e.target.value })}
                  placeholder="Enter your travel budget"
                  bg="gray.700"
                  color="white"
                />
              </FormControl>
              <FormControl mb={4}>
                <FormLabel>Itinerary</FormLabel>
                <Textarea
                  value={tripDetails.itinerary}
                  onChange={(e) => setTripDetails({ ...tripDetails, itinerary: e.target.value })}
                  placeholder="Enter your trip itinerary here..."
                  bg="gray.700"
                  color="white"
                />
              </FormControl>
              <Button colorScheme="teal" onClick={handleSaveTrip}>Save Trip</Button>
            </Box>
          )}
          <Button colorScheme="teal" onClick={() => navigate('/')}>Back to Plan</Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default CalendarPage;
