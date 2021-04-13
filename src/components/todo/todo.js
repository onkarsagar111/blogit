import React from 'react';
import Auxiliary from '../../hoc/auxiliary/auxiliary';

const Todo = (props) => {
    return (
        <Auxiliary>
            <h3>Functionalities to be developed</h3>
            <ul>
                <li>Login screen</li>
                <li>Login screen authentication</li>
                <li>Session management</li>
                <li>Editor for blog</li>
                <ol>
                    <li>category tags for searching</li>
                    <li>save functionality </li>
                    <li>attachment (upload)</li>
                    <li>styling panel.</li>
                </ol>
                <li>Save functionality</li>
                <li>Profile</li>
                <li>Theme</li>
                <li>...add more</li>
                
            </ul>
           
        </Auxiliary>
    )
}

export default Todo;