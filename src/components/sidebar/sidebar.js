import React from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

import classes from './sidebar.module.css';

const Sidebar = () => {

    return (
        <div className={classes.Sidebar}>
            <Icon name='content' size/>
            <ul className={classes.ul}>
                <NavLink to="/createpost"
                    className={classes.Inactive}
                    activeStyle={{
                        color: '#0072C6',
                        fontSize: 'large'
                    }}
                >
                    <li className={classes.NavigationItem}>                        Create New Post</li>
                </NavLink>

                <NavLink to="/allposts"
                    className={classes.Inactive}
                    activeStyle={{
                        color: '#0072C6',
                        fontSize: 'large'
                    }}
                >
                    <li className={classes.NavigationItem}>                        All Posts</li>
                </NavLink>

                <NavLink to="/themes"
                    className={classes.Inactive}
                    activeStyle={{
                        color: '#0072C6',
                        fontSize: 'large'
                    }}
                >
                    <li className={classes.NavigationItem}>                        Themes</li>
                </NavLink>

                <NavLink to="/settings"
                    className={classes.Inactive}
                    activeStyle={{
                        color: '#0072C6',
                        fontSize: 'large'
                    }}
                >
                    <li className={classes.NavigationItem}>                        Settings</li>
                </NavLink>

                <NavLink to="/todo"
                    className={classes.Inactive}
                    activeClassName='active'
                    activeStyle={{
                        color: '#0072C6',
                        fontSize: 'large',
                        textDecoration: 'none'
                    }}>
                    <li className={classes.NavigationItem}>TODO list</li>
                </NavLink>

            </ul>
        </div>
    );
}

export default Sidebar;