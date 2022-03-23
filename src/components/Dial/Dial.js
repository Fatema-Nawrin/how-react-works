import React from 'react';

const Dial = (props) => {
    return (
        <div style={{ border: '2px solid yellow' }}>
            <h3>This is dial</h3>
            <p>So far steps today: {props.steps}</p>
        </div>

    );
};

export default Dial;