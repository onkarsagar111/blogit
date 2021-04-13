import {React} from 'react';

import classes from './layout.module.css';
import Titlebar from '../titlebar/titlebar';
import Sidebar from '../sidebar/sidebar';



const Layout = (props) => {

    return (
        <div className={classes.Layout}>
            <Titlebar />
            {props.children}
            <Sidebar />
        </div>
    );
}

export default Layout;