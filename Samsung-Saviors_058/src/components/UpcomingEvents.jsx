// // components/UpcomingEvents.jsx
import React, { useEffect, useState } from 'react';

const UpcomingEvents = ({ accessToken }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('https://www.googleapis.com/calendar/v3/calendars/primary/events', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }

        const data = await response.json();
        setEvents(data.items);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    if (accessToken) {
      fetchEvents();
    }
  }, [accessToken]);

  return (
    <div>
      {/* <h2>Upcoming Events</h2> */}
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <strong>{event.summary}</strong> - {event.start.dateTime || event.start.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpcomingEvents;
