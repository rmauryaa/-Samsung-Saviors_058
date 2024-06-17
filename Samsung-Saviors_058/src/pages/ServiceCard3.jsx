import React, { useState } from "react";
import {
  Box,
  Text,
  Grid,
  GridItem,
  VStack,
  Container,
  Button,
  Input,
  HStack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// CSS style for blurred background
const blurredBackground = {
  backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAy6cojeOJlnvET8UWGpOxyOA2j5Guboyp-Q&s')`,
  backgroundSize: 'cover',
  filter: 'blur(8px)',
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: -1,
};

const ServiceCard3 = () => {
  const navigate = useNavigate();
  const initialActivity = { startTime: "", endTime: "", activity: "", budget: "" };
  const initialItinerary = [
    { day: 1, activities: [{ ...initialActivity }] },
    { day: 2, activities: [{ ...initialActivity }] },
    { day: 3, activities: [{ ...initialActivity }] },
    { day: 4, activities: [{ ...initialActivity }] },
  ];
  const [itinerary, setItinerary] = useState(initialItinerary);
  const [editMode, setEditMode] = useState({ dayIndex: -1, activityIndex: -1 });

  const handleInputChange = (dayIndex, activityIndex, field, value) => {
    const newItinerary = [...itinerary];
    newItinerary[dayIndex].activities[activityIndex][field] = value;
    setItinerary(newItinerary);
  };

  const addNewActivity = (dayIndex) => {
    const newItinerary = [...itinerary];
    newItinerary[dayIndex].activities.push({ ...initialActivity });
    setItinerary(newItinerary);
  };

  const deleteActivity = (dayIndex, activityIndex) => {
    const newItinerary = [...itinerary];
    newItinerary[dayIndex].activities = newItinerary[dayIndex].activities.filter((_, i) => i !== activityIndex);
    setItinerary(newItinerary);
  };

  const addNewDay = () => {
    const newItinerary = [...itinerary, { day: itinerary.length + 1, activities: [{ ...initialActivity }] }];
    setItinerary(newItinerary);
  };

  const deleteDay = (dayIndex) => {
    const newItinerary = itinerary.filter((_, index) => index !== dayIndex);
    setItinerary(newItinerary);
  };

  const startEditing = (dayIndex, activityIndex) => {
    setEditMode({ dayIndex, activityIndex });
  };

  const saveActivity = () => {
    setEditMode({ dayIndex: -1, activityIndex: -1 });
  };

  const calculateTotalBudget = () => {
    return itinerary.reduce((total, day) => {
      return total + day.activities.reduce((dayTotal, activity) => dayTotal + parseFloat(activity.budget || 0), 0);
    }, 0);
  };

  const chartData = {
    labels: itinerary.map(day => `Day ${day.day}`),
    datasets: [
      {
        label: 'Number of Activities',
        data: itinerary.map(day => day.activities.length),
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
    ],
  };

  return (
    <Box position="relative">
      <Box style={blurredBackground} />
      <Container
        maxW="container.xl"
        p={10}
        borderRadius="md"
        boxShadow="md"
        bg="gray.100"
        position="relative"
        zIndex={0}
      >
        <Box textAlign="center" mb={10} mt={9}>
          <Text fontSize="4xl" fontWeight="bold" color="teal.600">
            Itinerary
          </Text>
        </Box>
        {itinerary.map((day, dayIndex) => (
          <Box key={day.day} mb={10}>
            <HStack justify="space-between">
              <Text fontSize="2xl" fontWeight="bold" mb={4} color="teal.500">
                Day {day.day}
              </Text>
              <Button colorScheme="red" onClick={() => deleteDay(dayIndex)}>
                Delete Day
              </Button>
            </HStack>
            {day.activities.map((item, activityIndex) => (
              <Grid
                key={activityIndex}
                templateColumns="repeat(5, 1fr)"
                gap={6}
                bg="white"
                p={10}
                borderRadius="md"
                boxShadow="sm"
                mb={4}
              >
                <GridItem>
                  <VStack spacing={4} align="stretch">
                    <Text fontWeight="bold">Start Time:</Text>
                    <Input
                      placeholder="Start Time"
                      value={item.startTime}
                      onChange={(e) =>
                        handleInputChange(dayIndex, activityIndex, "startTime", e.target.value)
                      }
                      readOnly={editMode.dayIndex !== dayIndex || editMode.activityIndex !== activityIndex}
                    />
                  </VStack>
                </GridItem>
                <GridItem>
                  <VStack spacing={4} align="stretch">
                    <Text fontWeight="bold">End Time:</Text>
                    <Input
                      placeholder="End Time"
                      value={item.endTime}
                      onChange={(e) =>
                        handleInputChange(dayIndex, activityIndex, "endTime", e.target.value)
                      }
                      readOnly={editMode.dayIndex !== dayIndex || editMode.activityIndex !== activityIndex}
                    />
                  </VStack>
                </GridItem>
                <GridItem>
                  <VStack spacing={4} align="stretch">
                    <Text fontWeight="bold">Activity:</Text>
                    <Input
                      placeholder="Activity"
                      value={item.activity}
                      onChange={(e) =>
                        handleInputChange(dayIndex, activityIndex, "activity", e.target.value)
                      }
                      readOnly={editMode.dayIndex !== dayIndex || editMode.activityIndex !== activityIndex}
                    />
                  </VStack>
                </GridItem>
                <GridItem>
                  <VStack spacing={4} align="stretch">
                    <Text fontWeight="bold">Budget:</Text>
                    <Input
                      placeholder="Budget"
                      value={item.budget}
                      onChange={(e) =>
                        handleInputChange(dayIndex, activityIndex, "budget", e.target.value)
                      }
                      readOnly={editMode.dayIndex !== dayIndex || editMode.activityIndex !== activityIndex}
                    />
                  </VStack>
                </GridItem>
                <GridItem>
                  <VStack spacing={4} align="stretch" mt="40px">
                    {editMode.dayIndex === dayIndex && editMode.activityIndex === activityIndex ? (
                      <Button colorScheme="green" onClick={saveActivity}>
                        Save
                      </Button>
                    ) : (
                      <Button colorScheme="blue" onClick={() => startEditing(dayIndex, activityIndex)}>
                        Edit
                      </Button>
                    )}
                    <Button colorScheme="red" onClick={() => deleteActivity(dayIndex, activityIndex)}>
                      Delete
                    </Button>
                  </VStack>
                </GridItem>
              </Grid>
            ))}
            <Button colorScheme="teal" onClick={() => addNewActivity(dayIndex)}>
              Add Activity
            </Button>
          </Box>
        ))}
        <Button colorScheme="teal" onClick={addNewDay} mb={10}>
          Add Day
        </Button>
        <Box textAlign="center" mt={10}>
          <Text fontSize="2xl" fontWeight="bold" color="teal.600">
            Total Budget: ${calculateTotalBudget().toFixed(2)}
          </Text>
        </Box>
        <Box mt={10}>
          <Bar data={chartData} />
        </Box>
        <Button colorScheme="teal" mt={4} onClick={() => navigate("/")}>
          Back to Home
        </Button>
      </Container>
    </Box>
  );
};

export default ServiceCard3;
