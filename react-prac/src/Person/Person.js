import React from 'react';
// import Radium from 'radium';
import styled from 'styled-components';

const person = (props) => {
    // const style = {
    //     '@media (min-width: 1000px)':{
    //         minWidth:'700px'
    //     }
    // };

    const StyledDiv = styled.div`
        @media (max-width: 500px){
            width: 100%;
            background-color: red;
        }
        background-color: blue;
        width: 60%;
    `;

    return (
        <StyledDiv>
            <p onClick={props.click}>I'm {props.name}</p>
            {props.children}
            <br/>
            {props.changed != null ? <input type="text" onChange={props.changed} value={props.name} /> : null}
        </StyledDiv>
    )
};

// export default Radium(person);
export default person;