// src/pages/ServiceCard2.jsx
import React, { useState, useEffect } from 'react';
import {
  Box,
  VStack,
  Text,
  Button,
  Input,
  Textarea,
  FormControl,
  FormLabel,
  useToast,
  Grid,
  Select,
  Flex,
} from '@chakra-ui/react';
import { getTrips, updateTrip, deleteTrip } from '../services/authService';
import { Link } from 'react-router-dom'; // Import Link for navigation

// CSS style for blurred background
const blurredBackground = {
  background: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Q3G4vQe9a49puhIt2i26AF-k8jIor5zgzg&s')`,
  backgroundSize: 'cover',
  filter: 'blur(8px)',
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: -1,
};

const ServiceCard2 = () => {
  const [trips, setTrips] = useState([]);
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [sortBy, setSortBy] = useState('date'); // State for sorting field
  const [sortOrder, setSortOrder] = useState('asc'); // State for sorting order
  const [searchTerm, setSearchTerm] = useState(''); // State for search term
  const toast = useToast();

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const tripsData = await getTrips();
        setTrips(tripsData);
      } catch (error) {
        console.error(error);
        toast({
          title: 'Error fetching trips',
          description: error.message,
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      }
    };
    fetchTrips();
  }, [toast]);

  // Function to handle sorting
  const handleSort = (field) => {
    if (field === sortBy) {
      // Toggle sortOrder if same field clicked
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      // Default to ascending order for new field
      setSortBy(field);
      setSortOrder('asc');
    }
  };

  // Function to handle search by destination name
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Function to filter trips based on search term
  const filteredTrips = trips.filter((trip) =>
    trip.destination.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to sort trips based on current sortBy and sortOrder
  const sortedTrips = [...filteredTrips].sort((a, b) => {
    const aValue = a[sortBy];
    const bValue = b[sortBy];
    if (sortOrder === 'asc') {
      return aValue < bValue ? -1 : 1;
    } else {
      return aValue > bValue ? -1 : 1;
    }
  });

  const handleEditTrip = (trip) => {
    setSelectedTrip(trip);
  };

  const handleSaveTrip = async () => {
    try {
      await updateTrip(selectedTrip.date, selectedTrip);
      setTrips(trips.map((trip) =>
        trip.date === selectedTrip.date ? selectedTrip : trip
      ));
      setSelectedTrip(null);
      toast({
        title: 'Trip updated',
        description: `Your trip for ${selectedTrip.date.toDateString()} has been updated.`,
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      console.error(error);
      toast({
        title: 'Error updating trip',
        description: error.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleDeleteTrip = async (date) => {
    try {
      await deleteTrip(date);
      setTrips(trips.filter((trip) => trip.date !== date));
      toast({
        title: 'Trip deleted',
        description: `Your trip for ${new Date(date).toDateString()} has been deleted.`,
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      console.error(error);
      toast({
        title: 'Error deleting trip',
        description: error.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box p={4} maxWidth="1200px" mx="auto" position="relative">
      {/* Blurred background */}
      <Box style={blurredBackground} />
      {/* Overlay content */}
      <VStack spacing={4} align="stretch">
        <Text fontSize="2xl" fontWeight="bold">
          Manage Your Trips
        </Text>
        {/* Sorting and search UI */}
        <Flex justifyContent="space-between" alignItems="center" width="100%">
          <Flex alignItems="center">
            <Select
              variant="outline"
              placeholder="Sort by"
              value={sortBy}
              onChange={(e) => handleSort(e.target.value)}
              maxWidth="200px"
              mr={4}
            >
              <option value="date">Date</option>
              <option value="startTime">Start Time</option>
              <option value="endTime">End Time</option>
            </Select>
            <Select
              variant="outline"
              placeholder="Order"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              maxWidth="150px"
              mr={4}
            >
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </Select>
          </Flex>
          <Input
            placeholder="Search by Destination"
            value={searchTerm}
            onChange={handleSearch}
            maxWidth="300px"
          />
        </Flex>
        {/* Back button */}
        <Link to="/" style={{ alignSelf: 'flex-start' }}>
          <Button colorScheme="teal" mt={4} mb={2}>
            Back
          </Button>
        </Link>
        {/* Displaying trips in grid */}
        <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap={4} width="100%">
          {sortedTrips.map((trip, index) => (
            <Box
              key={index}
              p={4}
              borderWidth="1px"
              borderRadius="md"
              boxShadow="md"
              bg="white"
              _hover={{ boxShadow: 'lg', bg: 'gray.100' }}
            >
              <Text fontWeight="bold">Date: {trip.date.toDateString()}</Text>
              <Text>Destination: {trip.destination}</Text>
              <Text>Hotel: {trip.hotel}</Text>
              <Text>Start Time: {trip.startTime}</Text>
              <Text>End Time: {trip.endTime}</Text>
              <Text>Budget: {trip.budget}</Text>
              <Text>Itinerary: {trip.itinerary}</Text>
              <Button colorScheme="blue" mt={2} onClick={() => handleEditTrip(trip)}>
                Edit
              </Button>
              <Button colorScheme="red" mt={2} onClick={() => handleDeleteTrip(trip.date)}>
                Delete
              </Button>
            </Box>
          ))}
        </Grid>
        {/* Edit form */}
        {selectedTrip && (
          <Box width="100%" mt={4} p={4} borderWidth="1px" borderRadius="md" boxShadow="md">
            <FormControl mb={4}>
              <FormLabel>Destination</FormLabel>
              <Input
                value={selectedTrip.destination}
                onChange={(e) =>
                  setSelectedTrip({ ...selectedTrip, destination: e.target.value })
                }
                placeholder="Enter your destination"
              />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Hotel</FormLabel>
              <Input
                value={selectedTrip.hotel}
                onChange={(e) =>
                  setSelectedTrip({ ...selectedTrip, hotel: e.target.value })
                }
                placeholder="Enter your hotel"
              />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Start Time</FormLabel>
              <Input
                value={selectedTrip.startTime}
                onChange={(e) =>
                  setSelectedTrip({ ...selectedTrip, startTime: e.target.value })
                }
                placeholder="Enter the start time"
              />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>End Time</FormLabel>
              <Input
                value={selectedTrip.endTime}
                onChange={(e) =>
                  setSelectedTrip({ ...selectedTrip, endTime: e.target.value })
                }
                placeholder="Enter the end time"
              />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Travel Budget</FormLabel>
              <Input
                value={selectedTrip.budget}
                onChange={(e) =>
                  setSelectedTrip({ ...selectedTrip, budget: e.target.value })
                }
                placeholder="Enter your travel budget"
              />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Itinerary</FormLabel>
              <Textarea
                value={selectedTrip.itinerary}
                onChange={(e) =>
                  setSelectedTrip({ ...selectedTrip, itinerary: e.target.value })
                }
                placeholder="Enter your trip itinerary here..."
              />
            </FormControl>
            <Button colorScheme="teal" onClick={handleSaveTrip}>
              Save Trip
            </Button>
          </Box>
        )}
      </VStack>
    </Box>
  );
};

export default ServiceCard2;
