import React, { Component } from 'react';
import classes from './Profile.module.css';

class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name : "Surabhi",
            age : 50,
            description: ""
        };
    }
    
    changeNameHandler = () => {
        this.setState({name : "Chetna Jain"});
    }

    handleDescription = (ev) => {
        this.setState({description: ev.target.value});
    }

    render() {
        
        return (
            <div className={classes.Profile}>
                <p onClick={this.changeNameHandler}>Hi {this.state.name} ({this.state.description})</p>
                <input type="text" onChange={(event) => this.handleDescription(event)} />
            </div>
        );
    }
}

export default Profile;