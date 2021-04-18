import React from 'react';
import { NavLink } from 'react-router-dom';
import { Popup, Button } from 'semantic-ui-react';

import classes from './titlebarNavigation.module.css';

const TitlebarNavigation = (props) => {

     return (
          <div className={classes.Navigations}>

               <NavLink to="/home"
                    className={classes.Inactive}
                    activeClassName={classes.ActiveClass}
               >
                    <label className={classes.label}>HOME</label>

               </NavLink>

               <NavLink to="/about"
                    className={classes.Inactive}
                    activeClassName={classes.ActiveClass}>
                    <label className={classes.label}> ABOUT</label>

               </NavLink>

               <NavLink to="/team"
                    className={classes.Inactive}
                    activeClassName={classes.ActiveClass}>
                    <label className={classes.label}>TEAM</label>

               </NavLink>

               <NavLink to="/contactUs"
                    className={classes.Inactive}
                    activeClassName={classes.ActiveClass}>
                    <label className={classes.label}>CONTACT US</label>

               </NavLink>
               
               {/* <Icon size="large" name='user circle' /> */}
              
               
          </div>
     );
}

export default TitlebarNavigation;