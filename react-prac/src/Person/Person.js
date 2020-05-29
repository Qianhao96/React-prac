import React from 'react';
import Radium from 'radium';
const person = (props) => {
    const style = {
        '@media (min-width: 1000px)':{
            minWidth:'700px'
        }
    };

    return (
    <div>
        <p onClick={props.click}>I'm {props.name}</p>
        {props.children}
        <br/>
        {props.changed != null ? <input style={style} type="text" onChange={props.changed} value={props.name} /> : null}
    </div>
    
    
    )
};

export default Radium(person);