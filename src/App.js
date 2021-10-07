import Search from './components/Search';
import {BiCalendar} from 'react-icons/bi';
import AddAppointment from './components/AddAppointment';
import AppointmentList from './data.json';
import AppointmentInfo from './components/AppointmentInfo';


function App() {
  return (
    <div className="App container mx-auto mt-3 font-thin">
      <h1 className="text-5xl mb-3"> <BiCalendar className="inline-block text-red-400"/>Your Appointments</h1>
      <AddAppointment />
      <Search />
      
      <ul className="divide-y divide-grey-200">
        {AppointmentList.map(appointment => (
           <AppointmentInfo key={appointment.id} appointment={appointment} />
        ))
        }
      </ul>
    </div>
  );
}

export default App;
