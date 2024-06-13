/* global gapi */
export const listUpcomingEvents = async () => {
    try {
      const response = await gapi.client.calendar.events.list({
        calendarId: 'primary',
        timeMin: new Date().toISOString(),
        showDeleted: false,
        singleEvents: true,
        maxResults: 10,
        orderBy: 'startTime',
      });
  
      return response.result.items;
    } catch (error) {
      console.error('Error fetching calendar events', error);
      return [];
    }
  };
  
  export const createEvent = async (event) => {
    try {
      const response = await gapi.client.calendar.events.insert({
        calendarId: 'primary',
        resource: event,
      });
  
      return response.result;
    } catch (error) {
      console.error('Error creating calendar event', error);
      return null;
    }
  };
  