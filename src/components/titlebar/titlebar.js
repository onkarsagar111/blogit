import React from 'react';
import { Icon, Popup, Button } from 'semantic-ui-react';

import TitlebarNavigation from '../navigation/titlebarNavigation/titlebarNavigation';
import classes from './titlebar.module.css';

const Titlebar = (props) => {
    return (
        <div className={classes.Titlebar}>
            <Icon name="blogger" size="huge" />
            <label className={classes.heading}>BLOG!T</label>
            <TitlebarNavigation />
            <label className={classes.SignIn}>
                <Popup
                    content='Sign in to continue'
                    on='click'
                    pinned
                    position='bottom right'
                    trigger={<Button content='Sign in' />}
                />
            </label>
        </div>
    );
}

export default Titlebar;
