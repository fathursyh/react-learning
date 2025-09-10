import { NavLink } from "react-router-dom";

export default function MainNavigation() {
    return (
        <header>
            <nav>
                <menu>
                    <li>
                        <NavLink to={'/'} className={({isActive}) => isActive ? 'active': undefined}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/products'} className={({isActive}) => isActive ? 'active': undefined}>Products</NavLink>
                    </li>
                </menu>
            </nav>
        </header>
    )
}