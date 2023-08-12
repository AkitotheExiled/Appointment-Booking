import './styles/DateCard.css';


function DateCard({props}) {
    return (
        <div className="DateCard">
            <div className="DateCard__month">{props.month}</div>
            <div className="DateCard__day">{props.day}</div>
            <div className="DateCard__numberDay">{props.numberDay}</div>
        </div>
    );
}

export default DateCard;
