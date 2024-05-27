// data.ts

export interface Profile {
    id: number;
    name: string;
    schedule: string;
    author: string;
    imageUrl: string;
}

const profileData: Profile[] = [
    {
        id: 1,
        name: "Esithebeni Nosapho",
        schedule: "Mon, Tue, Wed & Friday 09:00-12:00",
        author: "Tabita Busani Jama",
        imageUrl: "https://zibonelefm.co.za/wp-content/uploads/2023/11/ghg-1024x1024.jpg"
    },
    {
        id: 2,
        name: "John Doe",
        schedule: "Mon-Fri 08:00-17:00",
        author: "Jane Smith Doe",
        imageUrl: "https://zibonelefm.co.za/wp-content/uploads/2023/11/Apostle-AB-Shiyane-1024x1024.jpg"
    },
    // Add more profile objects as needed
    {
        id: 3,
        name: "Esithebeni Nosapho",
        schedule: "Mon, Tue, Wed & Friday 09:00-12:00",
        author: "Tabita Busani",
        imageUrl: "https://zibonelefm.co.za/wp-content/uploads/2023/11/bluetooth-1024x1024.jpg"
    },
];

export default profileData;
