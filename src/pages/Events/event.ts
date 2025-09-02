// src/event.ts
export interface Event {
    title: string;
    date: string;
    location: string;
    description: string;
    imageUrl: string;
}

export const events: Event[] = [
    {
        title: "Business Breakfast",
        date: "13 Jun 2022 at 10:01",
        location: "Khayelitsha",
        description: "A business breakfast event for local bussinesses to network.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Brunch_Set_up.jpg", // You can use an online image URL as well
    },
    {
        title: "Roadshows",
        date: "Aug - Nov 2022",
        location: "Cape Metro",
        description: "Short description of the event.",
        imageUrl: "https://4.imimg.com/data4/KK/KK/GLADMIN-/wp-content-uploads-2011-06-road-show-250x250.jpg",
    },
    // Add more events as needed
    {
        title: "Woman's Day",
        date: "Date & Time",
        location: "Location",
        description: "Short description of the event.",
        imageUrl: "https://dangerouswomenproject.org/wp-content/uploads/2016/09/NAtional-Womens-Day.jpg",
    },
    {
        title: "Heritage Day",
        date: "Date & Time",
        location: "Location",
        description: "Short description of the event.",
        imageUrl: "https://www.bce.co.za/wp-content/uploads/2023/10/BCE-NewsLetter-V45_External.jpg",
    },
    {
        title: "Gqom Explosion",
        date: "Date & Time",
        location: "Location",
        description: "Short description of the event.",
        imageUrl: "https://m.media-amazon.com/images/I/61z-70N0VfL._UXNaN_FMjpg_QL85_.jpg",
    },
];
