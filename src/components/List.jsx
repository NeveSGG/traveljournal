import "./List.css"
import icon from "../Icon.png"

export default function List (props) {

    return (
        <div className="List">
            <div className="List--img">
                <img src={props.coverImage} className="coverImg"></img>
            </div>
            <div className="List--description">
                <div className="descr-loc">
                    <img src={icon}></img>
                    <p className="location">{props.location}</p>
                    <a href={props.url} className="hyper">Посмотреть на Яндекс.Картах</a>
                </div>
                <h2 className="namename">{props.name}</h2>
                <p className="dates">{props.date1} - {props.date2}</p>
                <p className="justText">{props.description}</p>
            </div>
        </div>
    )
}