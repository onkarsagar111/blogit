import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import classes from './layout.module.css';
import Titlebar from '../titlebar/titlebar';
import Sidebar from '../sidebar/sidebar';

import AllPosts from '../allposts/allposts';
import CreatePost from '../createpost/createpost';
import Settings from '../settings/settings';
import Themes from '../themes/themes';
import Todo from '../todo/todo';
import Home from '../home/home';
import About from '../about/about';
import Team from '../team/team';
import ContactUs from '../contactUs/contactUs';
import FullPost from '../fullPost/fullPost';

const Layout = (props) => {

    const [miniMode, setMiniMode] = useState(true);

    const collapseSidebar = () => {
        setMiniMode(true);
    }
    const expandSidebar = () => {
        setMiniMode(false);
    }
    const toggleSidebar = () => {
        setMiniMode(!miniMode);
    }

    return (
        <div className={classes.Layout}>
            <Switch>
                <Route
                    path="/home"
                    exact
                    render={(props) => {
                        return (
                            <Home {...props} miniMode={miniMode} />
                        )
                    }
                    }
                />
                <Route
                    path="/about"
                    exact
                    render={(props) => {
                        return (
                            <About {...props} miniMode={miniMode} />
                        )
                    }
                    }
                />
                <Route
                    path="/team"
                    exact
                    render={(props) => {
                        return (
                            <Team {...props} miniMode={miniMode} />
                        )
                    }
                    }
                />
                <Route
                    path="/contactUs"
                    exact
                    render={(props) => {
                        return (
                            <ContactUs {...props} miniMode={miniMode} />
                        )
                    }
                    }
                />
                <Route
                    path="/createpost"
                    exact
                    render={(props) => {
                        return (
                            <CreatePost {...props} miniMode={miniMode} />
                        )
                    }
                    }
                />
                <Route
                    path="/allposts"
                    exact
                    render={(props) => {
                        return (
                            <AllPosts {...props} miniMode={miniMode} />
                        )
                    }
                    }
                />
                <Route
                    path="/fullpost"
                    exact
                    render={(props) => {
                        return (
                            <FullPost {...props} miniMode={miniMode} />
                        )
                    }
                    }
                />
                <Route
                    path="/themes"
                    exact
                    render={(props) => {
                        return (
                            <Themes {...props} miniMode={miniMode} />
                        )
                    }
                    }
                />
                <Route
                    path="/settings"
                    exact
                    render={(props) => {
                        return (
                            <Settings {...props} miniMode={miniMode} />
                        )
                    }
                    }
                />
                <Route
                    path="/todo"
                    exact
                    render={(props) => {
                        return (
                            <Todo {...props} miniMode={miniMode} />
                        )
                    }
                    }
                />
                <Route
                    path="/"
                    render={(props) => {
                        return (
                            <AllPosts {...props} miniMode={miniMode} />
                        )
                    }
                    }
                />
            </Switch>
            <Sidebar miniMode={miniMode} expandSidebar={expandSidebar} collapseSidebar={collapseSidebar} toggleSidebar={toggleSidebar} />
            <Titlebar />
        </div>
    );
}

export default Layout;