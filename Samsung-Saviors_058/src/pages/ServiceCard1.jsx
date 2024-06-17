// src/pages/ServiceCard1.jsx
import React, { useEffect, useState } from "react";
import { Box, SimpleGrid, Heading, Button, useToast } from "@chakra-ui/react";
import { Pie, Bar } from "react-chartjs-2";
import { useNavigate } from "react-router-dom";
import { fetchUserData, getTrips } from "../services/authService";
import { Chart, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from "chart.js";
import { auth } from '../services/firebase'; // Adjust the path as per your project structure
import "chartjs-adapter-date-fns"; // Adjust this import according to the package structure
import '../styles/Dashboard.css'; // Import the CSS file

Chart.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const ServiceCard1 = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [tripsData, setTripsData] = useState([]);
  const toast = useToast();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const currentUser = auth.currentUser;
        if (currentUser) {
          const user = await fetchUserData(currentUser.uid);
          setUserData(user);
          const trips = await getTrips(currentUser.uid);
          setTripsData(trips);
        } else {
          toast({
            title: "Authentication required",
            description: "Please sign in to view your dashboard.",
            status: "warning",
            duration: 5000,
            isClosable: true,
          });
          navigate("/"); // Redirect to home or sign-in page
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        toast({
          title: "Error",
          description: "An error occurred while fetching user data.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    };

    fetchData();
  }, [navigate, toast]);

  const getMonthlyBookings = () => {
    const months = [
      "January", "February", "March", "April", "May", "June", 
      "July", "August", "September", "October", "November", "December"
    ];
    const bookings = new Array(12).fill(0);

    tripsData.forEach(trip => {
      const month = trip.date.getMonth(); // getMonth returns 0-11
      bookings[month] += 1;
    });

    return { labels: months, datasets: [{ label: "Monthly Bookings", data: bookings, backgroundColor: "rgba(75, 192, 192, 0.6)", borderColor: "rgba(75, 192, 192, 1)", borderWidth: 1 }] };
  };

  const getTopDestinations = () => {
    const destinationCounts = {};

    tripsData.forEach(trip => {
      if (destinationCounts[trip.destination]) {
        destinationCounts[trip.destination] += 1;
      } else {
        destinationCounts[trip.destination] = 1;
      }
    });

    const labels = Object.keys(destinationCounts);
    const data = Object.values(destinationCounts);

    return { labels, datasets: [{ label: "Top Destinations", data, backgroundColor: "rgba(153, 102, 255, 0.6)", borderColor: "rgba(153, 102, 255, 1)", borderWidth: 1 }] };
  };

  const getTopHotels = () => {
    const hotelCounts = {};

    tripsData.forEach(trip => {
      if (hotelCounts[trip.hotel]) {
        hotelCounts[trip.hotel] += 1;
      } else {
        hotelCounts[trip.hotel] = 1;
      }
    });

    const labels = Object.keys(hotelCounts);
    const data = Object.values(hotelCounts);

    return { labels, datasets: [{ label: "Top Hotels", data, backgroundColor: "rgba(255, 159, 64, 0.6)", borderColor: "rgba(255, 159, 64, 1)", borderWidth: 1 }] };
  };

  if (!userData) return null;

  return (
    <div className="dashboard-container">
      <div className="dashboard-background"></div>
      <div className="dashboard-content">
        <Box p={5} textAlign="center">
          <Heading as="h1" mb={10} mt={20} className="dashboard-heading">
            User Dashboard
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Box className="chart-box">
              <Heading as="h3" size="lg" mb={5}>
                Monthly Bookings
              </Heading>
              <Bar data={getMonthlyBookings()} />
            </Box>
            <Box className="chart-box">
              <Heading as="h3" size="lg" mb={5}>
                Top Destinations
              </Heading>
              <Bar data={getTopDestinations()} />
            </Box>
            <Box className="chart-box">
              <Heading as="h3" size="lg" mb={5}>
                Top Hotels
              </Heading>
              <Bar data={getTopHotels()} />
            </Box>
          </SimpleGrid>

          <Button mt={10} colorScheme="teal" onClick={() => navigate("/")}>
            Back to Home
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default ServiceCard1;
