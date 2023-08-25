import './styles/TimeButton.css';

function TimeButton({time}) {
    return (
        <div className="TimeButton">
            <div className="TimeButton__time">{time}</div>
        </div>
    );
}

export default TimeButton;
