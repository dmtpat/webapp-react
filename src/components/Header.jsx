import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/movies">Movies</NavLink>
            <NavLink to="/otherPage">Other</NavLink>
        </header>
    )
}
export default Header