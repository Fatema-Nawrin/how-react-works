import React from 'react';
import Details from '../Details/Details';

const Device = (props) => {
    return (
        <div>
            <h2>I have {props.name}</h2>
            <Details price={props.price}></Details>
        </div>
    );
};

export default Device;