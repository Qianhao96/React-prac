import React, { useState } from 'react';
import logo from '../logo.svg';
import './App.css';
import Persons from '../components/Persons/Persons';

import Cockpit from '../components/Cockpit/Cockpit';

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
    setTogglePersonsState({ doseShow: !TogglePersonsState.doseShow});
  };

  const deletePersonHandler = (personIndex) =>{
    const persons1 = [...personsState.persons];
    persons1.splice(personIndex, 1);
    setPersonsState({persons: persons1});
  }


  const ShowPersonOrNot = () =>{
    return TogglePersonsState.doseShow ?
      <Persons
        persons={personsState.persons} 
        clicked = {deletePersonHandler}
        changed = {nameChangedHandler} 
      />
      : null
  }

  
  return (
      <div className="App">
        <Cockpit
          persons = {personsState.persons}
          toggleState = {TogglePersonsState.doseShow}
          switchName = {switchNameHandler}
          togglePerson={togglePersonsHandler}
        />
        
        { ShowPersonOrNot()}
      </div>
  );
}

// export default Radium(App);

export default App;
