import "./Header.css"
import earth from "../images/earth.png"

export default function Header () {
    return (
        <div className="Header">
            <div className="Header--content">
                <img src={earth}></img>
                <h4>Мой дневник путешествий.</h4>
            </div>
        </div>
    )
}