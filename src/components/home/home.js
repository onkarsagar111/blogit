import React from 'react';
import Main from '../../helper/main/main';

const Home = (props) => {
    return(
        <Main miniMode={props.miniMode}>
            <p>I am Home</p>
        </Main>
    )
}

export default Home;