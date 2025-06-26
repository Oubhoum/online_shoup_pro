import "./header.css";

import { Link } from "react-router-dom";


const Navbar = ({toggleMenu, setToggleMenu}) => {
    return (

        <nav
            style={{ right: toggleMenu ? "0" : "-320px" }}
            className="navbar">
            <ul className="navbar-links">
                <Link to="/" onClick={() => setToggleMenu(false)} className="navbar-link">الصفحة الرئيسية</Link>
                <Link to="products" onClick={() => setToggleMenu(false)} className="navbar-link">الإلكترونيات والموبيلات</Link>
                <Link onClick={() => setToggleMenu(false)} className="navbar-link">المنزل والمطبخ</Link>
                <Link onClick={() => setToggleMenu(false)} className="navbar-link">رجالية</Link>
                <Link onClick={() => setToggleMenu(false)} className="navbar-link">نسائية</Link>
            </ul>
        </nav>

    )
}

export default Navbar