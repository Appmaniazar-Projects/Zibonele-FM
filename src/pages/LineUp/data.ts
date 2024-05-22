// data.ts
export type Day = 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun';

export const weeklySchedule: Record<Day, { time: string; title: string; description: string; }[]> = {
    mon: [
        { time: "00:00 - 03:00", title: "Ezidla Umzi", description: "Lenny Makhasi" },
        { time: "03:00 - 04:50", title: "Itshayile", description: "Sisipho Geni" },
        { time: "04:50 - 05:00", title: "Umyalezo Wosuku", description: "Rev Cebisile Vellem" },
        { time: "04:50 - 05:00", title: "Umyalezo Wosuku", description: "Rev Cebisile Vellem" },
        { time: "04:50 - 05:00", title: "Umyalezo Wosuku", description: "Rev Cebisile Vellem" },
        // Add more slots as needed
    ],
    tue: [
        { time: "00:00 - 03:00", title: "Tuesday Show 1", description: "Host 1" },
        { time: "03:00 - 04:50", title: "Tuesday Show 2", description: "Host 2" },
        // Add more slots as needed
    ],
    wed: [
        { time: "00:00 - 03:00", title: "Wednesday Show 1", description: "Host 1" },
        { time: "03:00 - 04:50", title: "Wednesday Show 2", description: "Host 2" },
        { time: "04:50 - 05:00", title: "Umyalezo Wosuku", description: "Rev Cebisile Vellem" },
        // Add more slots as needed
    ],
    thu: [
        { time: "00:00 - 03:00", title: "Thursday Show 1", description: "Host 1" },
        { time: "03:00 - 04:50", title: "Thursday Show 2", description: "Host 2" },
        // Add more slots as needed
    ],
    fri: [
        { time: "00:00 - 03:00", title: "Friday Show 1", description: "Host 1" },
        { time: "03:00 - 04:50", title: "Friday Show 2", description: "Host 2" },
        // Add more slots as needed
    ],
    sat: [
        { time: "00:00 - 03:00", title: "Saturday Show 1", description: "Host 1" },
        { time: "03:00 - 04:50", title: "Saturday Show 2", description: "Host 2" },
        // Add more slots as needed
    ],
    sun: [
        { time: "00:00 - 03:00", title: "Sunday Show 1", description: "Host 1" },
        { time: "03:00 - 04:50", title: "Sunday Show 2", description: "Host 2" },
        // Add more slots as needed
    ],
};
