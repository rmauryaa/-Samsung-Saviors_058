/* global gapi */
import React, { useState, useEffect } from 'react';
import { Box, Text, List, ListItem } from '@chakra-ui/react';
import { listUpcomingEvents } from '../utils/calendarUtils';

const UpcomingEvents = ({ accessToken }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    if (accessToken) {
      listUpcomingEvents().then((events) => {
        setEvents(events);
      });
    }
  }, [accessToken]);

  return (
    <Box>
      <Text fontSize="xl" fontWeight="bold">Upcoming Events</Text>
      <List spacing={3}>
        {events.map((event) => (
          <ListItem key={event.id}>
            <Text fontSize="lg">{event.summary}</Text>
            <Text>{new Date(event.start.dateTime).toLocaleString()}</Text>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default UpcomingEvents;
