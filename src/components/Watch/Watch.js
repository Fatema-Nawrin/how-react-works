import React, { useEffect, useState } from 'react';
import Display from '../Display/Display';

const Watch = () => {
    const [steps, setSteps] = useState(0);
    const increaseSteps = () => {
        const newSteps = steps + 1;
        setSteps(newSteps)
    }
    useEffect(() => {
        console.log(steps)
    }, [steps])
    return (
        <div style={{ border: '2px solid midnightblue' }}>
            <h2>A smart counter</h2>
            <h3>Curent number: {steps}</h3>
            <button onClick={increaseSteps}>Increase</button>
            <Display name='Connor' steps={steps}></Display>

        </div>
    );
};

export default Watch;