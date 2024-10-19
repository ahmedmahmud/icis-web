import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import rrulePlugin from '@fullcalendar/rrule';

export default function Calendar() {
  const handleDateClick = (arg) => {
    alert(arg.dateStr);
  };

  // Example events with links
  const events = [
    { 
      title: 'Event 1', 
      date: '2024-10-01', 
      description: 'This is event 1', 
      link: 'https://example.com/event1' // Link for event 1
    },
    { 
      title: 'Event 2', 
      date: '2024-10-09', 
      description: 'This is event 2', 
      link: 'https://example.com/event2' // Link for event 2
    },
    { 
      title: 'Event 3', 
      date: '2024-10-21', 
      description: 'This is event 3', 
      link: 'https://example.com/event3' // Link for event 3
    },
    { title: 'SEC', date: '2024-10-05', rrule: 'FREQ=WEEKLY' },
    
  ];

  return (
    <div className="container mt-32">
      <h1 className="text-3xl font-bold mb-8 text-center">Event Calendar</h1>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events}
        eventContent={(arg) => {
          return (
            <div className="p-2 text-sm"> {/* Reduced font size */}
              <strong className="block truncate">{arg.event.title}</strong> {/* Ensure title fits */}
              <p className="truncate">{arg.event.extendedProps.description}</p> {/* Ensure description fits */}
              <a 
                href={arg.event.extendedProps.link} 
                className="text-blue-500 underline text-xs" // Reduced text size for link
                target="_blank" // Open link in a new tab
                rel="noopener noreferrer" // Security best practices
              >
                More Info
              </a>
            </div>
          );
        }}
        eventDidMount={(arg) => {
          const eventDate = new Date(arg.event.start); // Get the event date
          const currentDate = new Date(); // Get the current date

          // Set the background color based on whether the event is in the past or future
          if (eventDate < currentDate) {
            arg.el.style.backgroundColor = '#4c5c7a'; // Light blue for past events
          } else {
            arg.el.style.backgroundColor = 'blue'; // Blue for future events
          }

          arg.el.addEventListener('click', () => {
            alert(`Event: ${arg.event.title}`);
          });
        }}
      />
    </div>
  );
}
