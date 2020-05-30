import React from 'react';
// import Radium from 'radium';
//import styled from 'styled-components';

import classes from './Person.module.css';

const person = (props) => {
    // const style = {
    //     '@media (min-width: 1000px)':{
    //         minWidth:'700px'
    //     }
    // };

    // const StyledDiv = styled.div`
    //     @media (min-width: 1000px) {
    //         width:'700px';
    //         background-color: red;
    //     }
    // `;

    return (
    <div className={[classes.Blue, classes.Yellow, classes.Red].join(' ')}>
        <p onClick={props.click}>I'm {props.name}</p>
        {props.children}
        <br/>
        {props.changed != null ? <input  type="text" onChange={props.changed} value={props.name} /> : null}
    </div>
    
    
    )
};

// export default Radium(person);
export default person;