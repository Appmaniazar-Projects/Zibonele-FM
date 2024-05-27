import React from 'react';

interface BoxProps {
    time: string;
    title: string;
    description: string;
}

const Box: React.FC<BoxProps> = ({ time, title, description }) => {
    console.log('Box component:', { time, title, description }); // Debugging line

    return (
        <div className="box">
            <h4>{time}</h4>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default Box;
