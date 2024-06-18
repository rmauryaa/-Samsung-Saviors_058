<center>

# Weekend Planner

</center>

This is a React application for planning and managing weekend trips. The application features user authentication, data visualization, and a user-friendly interface for trip planning and management.

---
<center>

## Deployment

</center>

The application is deployed at [Weekend Planner](https://my-weekend-planner.netlify.app/).

---

## File Structure


<center>


## Important Pages

</center>

### Plan.jsx

This component is responsible for displaying the main interface where users can choose dates to plan their trips. It uses Chakra UI for styling and Firebase for authentication.

- **Dependencies:**
  - `@chakra-ui/react`
  - `react-router-dom`
  - `firebase`

- **Features:**
  - Displays a background image with an overlay containing text and a button.
  - Checks user authentication before allowing date selection.
  - Shows a toast notification if the user is not authenticated.

### ServiceCard1.jsx

This component displays the user dashboard with data visualizations of trip information. It uses Chart.js for rendering charts.

- **Dependencies:**
  - `@chakra-ui/react`
  - `react-chartjs-2`
  - `chart.js`
  - `firebase`
  - `react-router-dom`

- **Features:**
  - Fetches user data and trip information after user authentication.
  - Displays monthly bookings, top destinations, and top hotels in bar charts.
  - Shows toast notifications for errors or authentication prompts.

### ServiceCard2.jsx

This component allows users to manage their trips, including viewing, editing, and deleting trip details. It provides sorting and search functionality.

- **Dependencies:**
  - `@chakra-ui/react`
  - `react-router-dom`

- **Features:**
  - Fetches trip data from the backend service.
  - Allows sorting trips by date, start time, and end time in ascending or descending order.
  - Provides a search bar for filtering trips by destination.
  - Includes functionality for editing and deleting trips with real-time updates.

### ServiceCard3.jsx

This component allows users to create and manage a detailed itinerary for their trips. It provides functionality for adding, editing, and deleting activities for each day of the trip.

- **Dependencies:**
  - `@chakra-ui/react`
  - `react-chartjs-2`
  - `chart.js`
  - `react-router-dom`

- **Features:**
  - Provides an interface for adding and managing activities for each day of the trip.
  - Allows users to edit details like start time, end time, activity description, and budget.
  - Calculates and displays the total budget for the trip.
  - Visualizes the number of activities per day using a bar chart.

<center>


## Getting Started

</center>

### Prerequisites

- Node.js and npm
- Firebase project for authentication and data storage

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-repository/weekend-planner.git
    ```
2. Navigate to the project directory:
    ```bash
    cd weekend-planner
    ```
3. Install dependencies:
    ```bash
    npm install
    ```

### Firebase Configuration

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
2. Add your Firebase configuration to `src/services/firebase.js`.

### Running the Application

1. Start the development server:
    ```bash
    npm run dev
    ```

2. Open your browser and navigate to `http://localhost:3000`.

<center>


## Usage

</center>

- Sign in to access trip planning and management features.
- Use the "Plan Your Ideal Weekend" section to start planning your trips.
- Access the user dashboard to view visualizations of your trips.
- Manage your trips, including sorting, searching, editing, and deleting trips.
- Create and manage detailed itineraries for your trips.



## Acknowledgements

- Chakra UI for the UI components
- Firebase for backend services
- Chart.js for data visualization

