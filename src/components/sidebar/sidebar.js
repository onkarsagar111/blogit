import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "semantic-ui-react";

import classes from "./sidebar.module.css";

const Sidebar = (props) => {
  const [attachedClasses, setAttachedClasses] = useState(
    props.miniMode === true ? classes.SidebarFull : classes.SidebarMini
  );

  const collapseSidebar = () => {
    console.log("line 12", props.clickHam);
    if (!props.clickHam) {
      setAttachedClasses(classes.SidebarMini);
      props.collapseSidebar();
    }
  };
  const openSidebar = () => {
    console.log("line 20", props.clickHam);
    setAttachedClasses(classes.SidebarFull);
    props.expandSidebar();
  };

  const toggleSidebar = () => {
    // setAttachedClasses(classes.SidebarFull);
    console.log(props.clickHam);
    props.miniMode === true
      ? setAttachedClasses(classes.SidebarFull)
      : setAttachedClasses(classes.SidebarMini);
    props.toggleSidebar();
  };

  return (
    <div className={attachedClasses} onMouseOver={openSidebar}>
      <div
        className={
          props.clickHam
            ? [classes.content, classes.contentSelected].join(" ")
            : classes.content
        }
      >
        <Icon size="big" name="content" className={classes.Icon} onClick={toggleSidebar} onMouseOver={openSidebar}/>
      </div>
      <ul
        className={classes.ul}
        onMouseOver={openSidebar}
        onMouseLeave={collapseSidebar}
      >
        <NavLink
          to="/createpost"
          className={classes.Inactive}
          activeClassName={classes.ActiveClass}
          activeStyle={{
            color: "#58c6d5",
          }}
        >
          <li className={classes.NavigationItem}>
            <Icon size="big" name="add" />
            <label className={classes.label}>Create New Post</label>
          </li>
        </NavLink>

        <NavLink
          to="/allposts"
          className={classes.Inactive}
          activeClassName={classes.ActiveClass}
          activeStyle={{
            color: "#58c6d5",
          }}
        >
          <li className={classes.NavigationItem}>
            {" "}
            <Icon size="big" name="file alternate" />
            <label className={classes.label}>All Posts</label>
          </li>
        </NavLink>

        <NavLink
          to="/themes"
          className={classes.Inactive}
          activeClassName={classes.ActiveClass}
          activeStyle={{
            color: "#58c6d5",
          }}
        >
          <li className={classes.NavigationItem}>
            {" "}
            <Icon size="big" name="theme" />
            <label className={classes.label}>Themes </label>
          </li>
        </NavLink>

        <NavLink
          to="/settings"
          className={classes.Inactive}
          activeClassName={classes.ActiveClass}
          activeStyle={{
            color: "#58c6d5",
          }}
        >
          <li className={classes.NavigationItem}>
            {" "}
            <Icon size="big" name="setting" />
            <label className={classes.label}> Settings</label>
          </li>
        </NavLink>

        <NavLink
          to="/todo"
          className={classes.Inactive}
          activeClassName={classes.ActiveClass}
          activeStyle={{
            color: "#58c6d5",
            textDecoration: "none",
          }}
        >
          <li className={classes.NavigationItem}>
            <Icon size="big" name="tasks" />
            <label className={classes.label}>TODO list</label>
          </li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Sidebar;
