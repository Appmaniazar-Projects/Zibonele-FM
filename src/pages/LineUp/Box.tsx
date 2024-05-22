// Box.tsx
import React from 'react';

interface BoxProps {
    time: string;
    title: string;
    description: string;
}

const Box: React.FC<BoxProps> = ({ time, title, description }) => (
    <div className="box">
        <h4>{time}</h4>
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
);

export default Box;

