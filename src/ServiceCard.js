import './styles/ServiceCard.css';


function ServiceCard({props}) {
    return (
        <div className="ServiceCard">
            <div className="ServiceCard__tt">
                <div className="ServiceCard__title">{props.title}</div>
                <div className="ServiceCard__time secondary">{props.time}</div>
            </div>
            <div className="ServiceCard__insignia">{props.insig}</div>
            <div className="ServiceCard__price">{props.price}</div>
            <div className="ServiceCard__checkMark">
                <input type="checkbox" />
                    <span className="checkMark__checkmark"></span>
            </div>
        </div>
      );
}


export default ServiceCard;
