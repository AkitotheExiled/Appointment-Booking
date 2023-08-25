import './styles/TimeCard.css';
import TimeButton from './TimeButton.js';

function TimeCard({times}) {
    return (
        <div className="TimeCard">
            <>
            {times.map((apptime) => (
                <TimeButton time={apptime}/>
            ))}
            </>
        </div>
    )
}


export default TimeCard;
