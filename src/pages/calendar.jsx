import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import rrulePlugin from '@fullcalendar/rrule';

export default function Calendar() {
  const handleDateClick = (arg) => {
    alert(arg.dateStr);
  };

  const events = [
    { 
      title: 'Private Equity Breakfast and Networking', 
      date: '2024-11-23', 
      description: 'We are excited to announce an EXCLUSIVE breakfast networking event with Private Equity professionals across prestigious firms at London Marriott Hotel Kensington!', 
      link: 'https://forms.office.com/Pages/ResponsePage.aspx?id=B3WJK4zudUWDC0-CZ8PTB9P6iTUMvllImZF8S_cEo5RUMEJVT1ZRQTNIWUlZVTlYNERCMDlRRzg3MCQlQCNjPTEu' // Link for event 1
    },
    { 
      title: 'Peter Higgins x Serendipity Soc', 
      date: '2024-11-27', 
      description: 'Ready to uncover the secrets of creating global brands and leaving a lasting legacy? We are excited to welcome Peter Higgins, a serial entrepreneur with a proven track record of building and transforming globally recognized brands like Charles Tyrwhitt (revenue of £350MM), ME+EM (valued + £135MM), Emma Watsons gin company, RENAIS(£25MM raised by VC) and many more. 🚀 ', 
      link: 'https://lu.ma/mumhnb6l' // Link for event 2
    },
    { 
      title: 'AmplifyMe Simulation', 
      date: '2024-11-26', 
      description: 'A free, 2-hour LIVE simulation event to gain experience in investment bank trading and asset management roles.', 
      link: 'https://amplifyme.com/society-booking?uid=45b71311' // Link for event 2
    },
    { 
      title: 'Coremont Careers Evening', 
      date: '2024-11-21', 
      description: 'Come meet the team for a presentation + networking to get to know more about a technical yet finance-y side of the market! ', 
      link: 'https://forms.office.com/Pages/ResponsePage.aspx?id=B3WJK4zudUWDC0-CZ8PTB9P6iTUMvllImZF8S_cEo5RUQ0E1V0Q4V0JZUEI1RExDSDQ5MVUyNVpLVyQlQCNjPTEu' // Link for event 3
    },
    { 
      title: 'Investing Masterclass with Ali Zafar', 
      date: '2024-11-05', 
      description: 'Due to popular demand, we are thrilled to announce an exclusive workshop featuring industry expert Ali Zafar, who will guide you through everything you need to know about investing and trading your own money.', 
    },
    { title: 'SEC', date: '2024-11-09', link: 'https://investmentsoc.com/sec' },
    { title: 'SEC', date: '2024-11-02', link: 'https://investmentsoc.com/sec' },
    { title: 'SEC', date: '2024-11-16', link: 'https://investmentsoc.com/sec' },
    { title: 'SEC', date: '2024-11-23', link: 'https://investmentsoc.com/sec' },
    { 
      title: 'Lazard Exclusive Networking', 
      date: '2024-11-07', 
      description: 'Don’t miss the rare opportunity to gain insights at our exclusive panel event featuring top professionals from Lazard! ', 
    },
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
              {arg.event.extendedProps.link && ( 
              <a 
                href={arg.event.extendedProps.link} 
                className="text-blue-500 text-xs" // Reduced text size for link
                target="_blank" // Open link in a new tab
                rel="noopener noreferrer" // Security best practices
              >
                Find out more!
              </a>
              )}
            </div>
          );
        }}
        eventDidMount={(arg) => {
          const eventDate = new Date(arg.event.start); // Get the event date
          const currentDate = new Date(); // Get the current date
          arg.el.style.outline = 'blue'; // Remove blue outline
          arg.el.style.boxShadow = 'none'; // Optional

          if (eventDate < currentDate) {
            arg.el.style.backgroundColor = '#192841'; // Light blue for past events
          } else {
            arg.el.style.backgroundColor = '#2e5a88'; // Blue for future events
          }

          
        }}
      />
    </div>
  );
}
