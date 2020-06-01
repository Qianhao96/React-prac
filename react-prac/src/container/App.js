import React, { useState } from 'react';
import logo from '../logo.svg';
import './App.css';
import Person from '../components/Persons/Person/Person';
import Radium, {StyleRoot} from 'radium';

const App = props => {

  const [personsState, setPersonsState] = useState({
    persons: [
      {name: "lqh1", id: "111"},
      {name: "lqh2", id: "222"},
      {name: "lqh3", id: "333"}
    ], 
    otherState: "some other state"
  });

  const [TogglePersonsState, setTogglePersonsState] = useState({
    doseShow: true
  });

  const switchNameHandler = (newName) => {
    setPersonsState({
      persons: [
        {name: "lqh3", id: "111"},
        {name: "lqh4", id: "222"},
        {name: newName, id: "333"}
      ]
    });
  };

  const nameChangedHandler = (event, id) =>{
    const personIndex = personsState.persons.findIndex(p => {
      return p.id === id;
    })
    const person1 = {...personsState.persons[personIndex]};
    person1.name = event.target.value;
    const persons2 = [...personsState.persons];
    persons2[personIndex] = person1;
    setPersonsState({
      persons: persons2
    });
  };

  const togglePersonsHandler = () =>{
    setTogglePersonsState({doseShow: !TogglePersonsState.doseShow});
  };

  const deletePersonHandler = (personIndex) =>{
    const persons1 = [...personsState.persons];
    persons1.splice(personIndex, 1);
    setPersonsState({persons: persons1});
  }

  const switchNameButtonStyle = () =>{
    return TogglePersonsState.doseShow ?
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

  const ShowPersonOrNot = () =>{
    return TogglePersonsState.doseShow ? 
      <div>
        {personsState.persons.map((person, index) => {
            return <Person click={() => deletePersonHandler(index)} name={person.name} changed = {(event) => nameChangedHandler(event, person.id)}  key={person.id}/>
        })}
      </div>
      : null
  }
  const switchNameButtonClasses = () =>{
    const classes = [];
    if(personsState.persons.length <= 2)
      classes.push("red");
    if(personsState.persons.length <= 1)
      classes.push("bold");
    return classes.join(" ");
  }
  
  return (
     <StyleRoot>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className={switchNameButtonClasses()}>Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button style= {switchNameButtonStyle()} onClick={switchNameHandler.bind(this, "testtttttttttt")}>switch name</button>
        <button onClick={togglePersonsHandler}>toggle person</button>
        
        { ShowPersonOrNot()}
      </div>
     </StyleRoot>
  );
}

// export default Radium(App);

export default App;
