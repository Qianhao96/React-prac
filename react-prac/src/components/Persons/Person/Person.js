import React, {Component} from 'react';
// import Radium from 'radium';
//import styled from 'styled-components';
import Auxiliary from '../../../hoc/Auxiliary'


import classes from './Person.module.css';

const Person = (props) => {
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
    <Auxiliary classes={[classes.Blue, classes.Yellow, classes.Red].join(' ')}>
        <p onClick={props.click}>I'm {props.name}</p>
        {props.children}
        <br/>
        {props.changed != null ? <input  type="text" onChange={props.changed} value={props.name} /> : null}
    </Auxiliary>
    
    
    )
};

// export default Radium(person);
export default Person;


// class Person extends Component {
//     // const style = {
//     //     '@media (min-width: 1000px)':{
//     //         minWidth:'700px'
//     //     }
//     // };

//     // const StyledDiv = styled.div`
//     //     @media (min-width: 1000px) {
//     //         width:'700px';
//     //         background-color: red;
//     //     }
//     // `;
//     render (){
//         return[
//                 <p key="i1" onClick={this.props.click}>I'm {this.props.name}</p>,
//                 <p  key="i2">{this.props.children}</p>,
//                 <p  key="i3">{this.props.changed != null ? <input  type="text" onChange={this.props.changed} value={this.props.name} /> : null}</p>
//             ];
//     }
// };

// // export default Radium(person);
// export default Person;