export interface IProject {
    title: string; // Project title
    description: string; // Detailed description of the project
    technologies: string[]; // Technologies used in the project
    startDate: Date; // Start date of the project
    endDate: Date; // End date of the project (can be null for ongoing projects)
    isOngoing: boolean; // Indicates if the project is ongoing
    link: string; // URL to the project or repository
    images: string[]; // Array of image URLs related to the project
}