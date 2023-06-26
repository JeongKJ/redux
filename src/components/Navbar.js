import { Link } from "react-router-dom";
import './Navbar.css';
import { BsList } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import logo from '../../src/logo.PNG'
export default function Navbar() {
    return (
        <div className="headerwrap">
            <div className="logo">
                <img src={logo} alt=""></img>
            </div>
            <ul>
                <li><Link to='/'><BsList size='24px'/></Link></li>
                <li><Link to='/'>쇼핑하기</Link></li>
                <li><Link to='/'>브랜드스토리</Link></li>
                <li><Link to='/'><BiCart size='30px' /></Link></li>
            </ul>
        </div>
    )
}