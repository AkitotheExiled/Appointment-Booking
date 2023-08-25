import './styles/App.css';
import './styles/ServiceCard.css';
import './styles/DateCard.css';
import ServiceCard from './ServiceCard';
import DateCard from './DateCard';
import TimeCard from './TimeCard';
function App() {
  let prop = {title: "Service Title", time: "30 minutes", insig: "$", price: "10"};
  let dateProp = {month: "Aug", day: "WEDNESDAY", numberDay: 9};
  let times2 = ["11:00AM", "12:00PM", "1:00PM", "2:00PM", "3:00PM", "4:00PM"];
  return (
    <div className="App">
      <DateCard props={dateProp} />
      <TimeCard times={times2} />
      <ServiceCard props={prop} />
    </div>
  );
}

export default App;
