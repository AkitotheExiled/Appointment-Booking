import './styles/App.css';
import './styles/ServiceCard.css';
import './styles/DateCard.css';
import ServiceCard from './ServiceCard';
import DateCard from './DateCard';

function App() {
  let prop = {title: "Service Title", time: "30 minutes", insig: "$", price: "10"};
  let dateProp = {month: "Aug", day: "WEDNESDAY", numberDay: 9};
  return (
    <div className="App">
      <DateCard props={dateProp} />
      <ServiceCard props={prop} />
    </div>
  );
}

export default App;
