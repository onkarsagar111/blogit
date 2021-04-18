import React from 'react';
import Main from '../../helper/main/main';

const Todo = (props) => {
    return (
        <Main miniMode={props.miniMode}>
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
                <li> 
                     <a href="https://visme.co/blog/website-color-schemes/">page for themes  </a></li>
                <li>...add more</li>
                
            </ul>

            <h1>ISSUES</h1>
            <ol>
                <li>min width of side bar</li>
            </ol>
           
        </Main>
    )
}

export default Todo;