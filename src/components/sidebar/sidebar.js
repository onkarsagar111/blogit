import React from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

import classes from './sidebar.module.css';

const Sidebar = () => {

    return (
        <div className={classes.Sidebar}>
            <ul className={classes.ul}>
              <label className={classes.content}><Icon size="big" name='content'/></label>
                <NavLink to="/createpost"
                    className={classes.Inactive}
                    activeStyle={{
                        color: '#0072C6',
                        fontSize: 'large'
                    }}
                >
                    <li className={classes.NavigationItem}><Icon size="big" name='add' />
                        <label className={classes.label} >Create New Post</label>
                    </li>
                </NavLink>

                <NavLink to="/allposts"
                    className={classes.Inactive}
                    activeStyle={{
                        color: '#0072C6',
                        fontSize: 'large'
                    }}
                >
                    <li className={classes.NavigationItem}> <Icon size="big" name='file alternate'  />
                        <label className={classes.label}>All Posts</label>
                    </li>
                </NavLink>

                <NavLink to="/themes"
                    className={classes.Inactive}
                    activeStyle={{
                        color: '#0072C6',
                        fontSize: 'large'
                    }}
                >
                    <li className={classes.NavigationItem}>  <Icon size="big" name='theme' />
                        <label className={classes.label}>Themes </label>
                    </li>
                </NavLink>

                <NavLink to="/settings"
                    className={classes.Inactive}
                    activeStyle={{
                        color: '#0072C6',
                        fontSize: 'large'
                    }}
                >

                    <li className={classes.NavigationItem}> <Icon size="big" name='setting' />
                        <label className={classes.label}> Settings</label>
                    </li>

                </NavLink>

                <NavLink to="/todo"
                    className={classes.Inactive}
                    activeClassName='active'
                    activeStyle={{
                        color: '#0072C6',
                        fontSize: 'large',
                        textDecoration: 'none'
                    }}>
                    <li className={classes.NavigationItem}><Icon size="big" name='tasks' />
                        <label className={classes.label}>TODO list</label>
                    </li>
                </NavLink>

            </ul>
        </div>
    );
}

export default Sidebar;