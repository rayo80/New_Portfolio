import React from 'react'
import OnviewAnimation from './OnviewAnimation';

const divStyle = {
    background: 'blue',
    width: 500,
    height: 500,
};

const Box = () => {
    return ( 
        <OnviewAnimation>
            <div style={divStyle}>

            </div>
        </OnviewAnimation>

     );
}
 
export default Box;