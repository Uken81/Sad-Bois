import { NavLink } from "react-router-dom";

import './header.styles.scss';

const Header = () => (
    <div className='header-container'>
        <nav className='navbar'>
            <ul className='navbar-links'>
                <div className="home-link">
                    <NavLink className='nav-link' to="/">Sad Bois</NavLink>
                </div>
                <div className="pages-link">
                    <NavLink className='nav-link' to="/members">Members</NavLink>
                    <NavLink className='nav-link' to="/Merchandise">Merchandise</NavLink>
                    <NavLink className='nav-link' to="/Videos">Videos</NavLink>
                    <NavLink className='nav-link' to="/Art">Art</NavLink>
                    <NavLink className='nav-link' to="/Sign In">Sign In</NavLink>
                </div>
            </ul>
        </nav>
    </div>
)

export default Header;