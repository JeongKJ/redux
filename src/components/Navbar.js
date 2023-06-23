import { Link } from "react-router-dom";
import './Navbar.css';

export default function Navbar() {
    return (
        <div className="headerwrap">
            <ul>
                <li><Link to='/'>nav1</Link></li>
                <li><Link to='/'>nav2</Link></li>
                <li><Link to='/'>nav3</Link></li>
                <li><Link to='/'>nav4</Link></li>
            </ul>
        </div>
    )
}