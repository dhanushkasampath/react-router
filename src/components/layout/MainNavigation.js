//job of this component is render the main navigation bar
import classes from './MainNavigation.module.css';
import {NavLink} from "react-router-dom";

const MainNavigation = () => {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>Great Quotes</div>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/quotes' activeClassName={classes.active}>All Quotes</NavLink>
                    </li>
                    <li>
                        <NavLink to='/new-quote' activeClassName={classes.active}>Add a Quote</NavLink>
                    </li>
                 </ul>
            </nav>
        </header>
    );
}
export default MainNavigation;