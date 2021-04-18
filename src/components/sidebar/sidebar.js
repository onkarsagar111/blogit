import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

import classes from './sidebar.module.css';

const Sidebar = (props) => {

    const [attachedClasses, setAttachedClasses] = useState(props.miniMode === true ? classes.SidebarFull : classes.SidebarMini);

    const collapseSidebar = () => {
        setAttachedClasses(classes.SidebarMini);
        props.collapseSidebar();
    }
    const openSidebar = () => {
        setAttachedClasses(classes.SidebarFull);
        props.expandSidebar();
    }

    return (
        <div className={attachedClasses}>
            <ul className={classes.ul} onMouseOver={openSidebar} onMouseLeave={collapseSidebar}>
                <NavLink to="/createpost"
                    className={classes.Inactive}
                    activeClassName={classes.ActiveClass}
                    activeStyle={{
                        color: '#58c6d5',
                    }}
                >
                    <li className={classes.NavigationItem}><Icon size="large" name='add' />
                        <label className={classes.label} >Create New Post</label>
                    </li>
                </NavLink>

                <NavLink to="/allposts"
                    className={classes.Inactive}
                    activeClassName={classes.ActiveClass}
                    activeStyle={{
                        color: '#58c6d5'
                    }}
                >
                    <li className={classes.NavigationItem}> <Icon size="large" name='file alternate' />
                        <label className={classes.label}>All Posts</label>
                    </li>
                </NavLink>

                <NavLink to="/themes"
                    className={classes.Inactive}
                    activeClassName={classes.ActiveClass}
                    activeStyle={{
                        color: '#58c6d5'
                    }}
                >
                    <li className={classes.NavigationItem}>  <Icon size="large" name='theme' />
                        <label className={classes.label}>Themes </label>
                    </li>
                </NavLink>

                <NavLink to="/settings"
                    className={classes.Inactive}
                    activeClassName={classes.ActiveClass}
                    activeStyle={{
                        color: '#58c6d5'
                    }}
                >

                    <li className={classes.NavigationItem}> <Icon size="large" name='setting' />
                        <label className={classes.label}> Settings</label>
                    </li>

                </NavLink>

                <NavLink to="/todo"
                    className={classes.Inactive}
                    activeClassName={classes.ActiveClass}
                    activeStyle={{
                        color: '#58c6d5',
                        textDecoration: 'none'
                    }}>
                    <li className={classes.NavigationItem}><Icon size="large" name='tasks' />
                        <label className={classes.label}>TODO list</label>
                    </li>
                </NavLink>

            </ul>
        </div>
    );
}

export default Sidebar;