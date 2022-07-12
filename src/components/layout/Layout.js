//job of this component is render the main navigation side by side with actual content
import classes from './Layout.module.css';
import {Fragment} from "react";
import MainNavigation from "./MainNavigation";

const Layout = (props) => {
    return (
        <Fragment>
            <MainNavigation/>
            <main className={classes.main}>{props.children}</main>
        </Fragment>
    );
}
export default Layout;