import React, { useState } from 'react';
import { Button, Input, TextArea } from 'semantic-ui-react';
import Main from '../../helper/main/main';

import classes from './createpost.module.css';

const CreatePost = (props) => {

    var initialForm = {
        title: {
            isValid: true,
            type: 'text',
            placeholder: 'Enter Title',
            value: '',
        },
        desc: {
            isValid: true,
            type: 'text',
            placeholder: 'Enter Desc',
            value: '',
        },
        content: {
            isValid: false,
            type: 'textarea',
            placeholder: 'Enter Article',
            value: '',
            rows: '8',
            cols: '20'
        },
        country: {
            isValid: true,
            type: 'select',
            placeholder: 'Select country',
            value: '',
            options: ['India', 'US', 'Canada', 'Australia']
        }
    }

    const [inputForm, setInputForm] = useState(initialForm);

    return (
        <Main miniMode={props.miniMode}>
            <div className={classes.Body}>
                <div className={classes.container}>
                    <h4>Title </h4>
                    <Input
                    />
                </div>
                <div className={classes.container}>
                    <h4>Description </h4>
                    <Input
                    />
                </div>
                <div className={classes.container}>
                    <h4>Location </h4>
                    <Input
                    />
                </div>
                <h4>Content </h4>
                <TextArea
                />
                <br />
                <Button primary>Create</Button>
                <Button color='green'>Cancel</Button>
            </div>
        </Main>
    )

}

export default CreatePost;
