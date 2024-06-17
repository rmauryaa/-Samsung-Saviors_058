// src/components/Dashboard.jsx
import React from "react";
import { Box, SimpleGrid, Heading, Center } from "@chakra-ui/react";
import { Pie, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

const pieData = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.6)",
        "rgba(54, 162, 235, 0.6)",
        "rgba(255, 206, 86, 0.6)",
        "rgba(75, 192, 192, 0.6)",
        "rgba(153, 102, 255, 0.6)",
        "rgba(255, 159, 64, 0.6)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const barData = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: "rgba(75, 192, 192, 0.6)",
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 1,
    },
  ],
};


const ServiceCard1 = () => {
  return (
    <Box p={5} textAlign="center">

    <Box display="flex" justifyContent="Center" p={5}>
      <Heading as="h1" mb={5} mt={10} w="20%" textAlign="center" bg="#ecc94b" p={5} borderRadius={9}>
        User Dashboard
      </Heading>
    </Box>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Box boxShadow="md" p="6" rounded="md" bg="white">
          <Heading as="h3" size="lg" mb={5}>
            Pie Chart
          </Heading>
          <Pie data={pieData} />
        </Box>
        <Box boxShadow="md" p="6" rounded="md" bg="white">
          <Heading as="h3" size="lg" mb={5}>
            Bar Chart
          </Heading>
          <Bar data={barData} />
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default ServiceCard1;
