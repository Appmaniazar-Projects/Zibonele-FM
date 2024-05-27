// DaySchedule.tsx
import React from 'react';
import Box from './Box';

interface DayScheduleProps {
    schedule: {
        time: string;
        title: string;
        description: string;
    }[];
}

const DaySchedule: React.FC<DayScheduleProps> = ({ schedule }) => {
    console.log('Schedule for the Day:', schedule); // Debugging line
    return (
        <div className="contents">
            {schedule.map((item, index) => (
                <Box
                    key={index}
                    time={item.time}
                    title={item.title}
                    description={item.description}
                />
            ))}
        </div>
    );
};

export default DaySchedule;
