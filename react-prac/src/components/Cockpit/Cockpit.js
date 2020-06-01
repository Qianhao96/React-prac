import React from 'react';
import logo from '../../logo.svg';
import {StyleRoot} from 'radium';
import classes from './Cockpit.module.css';

const Cockpit = (props) => {
    const switchNameButtonClasses = (persons) =>{
        const buttonClasses = [];
        if(persons.length <= 2)
            buttonClasses.push(classes.red);
        if(persons.length <= 1)
            buttonClasses.push(classes.bold);
        return buttonClasses.join(" ");
    }

    const switchNameButtonStyle = (toggleState) =>{
        return toggleState ?
        { 
          backgroundColor: 'red',
          ":hover":{
            backgroundColor:'lightyellow',
            color: 'green',
            cursor: "pointer"
          }
        } 
        :{ 
          backgroundColor: 'blue',
          ":hover":{
            backgroundColor:'lightblue',
            color: 'green'
          }
        };
      }

    return (
        <StyleRoot>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className={switchNameButtonClasses(props.persons)}>Welcome to React</h1>
            </header>
            <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <button style= {switchNameButtonStyle(props.toggleState)}  onClick={() => props.switchName('llllllllllllllll')}>switch name</button>
            <button onClick={() => props.togglePerson()}>toggle person</button>
        </StyleRoot>
    );
}

export default Cockpit;