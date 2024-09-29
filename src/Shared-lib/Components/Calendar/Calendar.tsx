import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const myEventsList = [
  {
    title: 'Event 1',
    start: new Date(2024, 9, 10, 10, 0), 
    end: new Date(2024, 9, 10, 12, 0),   
  },
  {
    title: 'Event 2',
    start: new Date(2024, 9, 11, 14, 0), 
    end: new Date(2024, 9, 11, 16, 0),   
  },
];

function CalendarComponent() {
  return (
    <section className="bgSeccion p-4 row justify-content-center mb-5" >


      <Calendar
      className="row justify-content-center mb-5"
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
      
    </section>
  );
}

export default CalendarComponent;
