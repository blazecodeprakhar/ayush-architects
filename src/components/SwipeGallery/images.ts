import projectLiving from '@/assets/project-living-room.webp';
import projectKitchen from '@/assets/project-kitchen.webp';
import projectBedroom from '@/assets/project-bedroom.webp';
import projectDining from '@/assets/project-dining.webp';
import projectOffice from '@/assets/project-office.webp';
import projectBathroom from '@/assets/project-bathroom.webp';

export const projects = [
    {
        id: 1,
        title: 'Minimalist Haven',
        category: 'Living Room',
        image: projectLiving,
    },
    {
        id: 2,
        title: 'Culinary Elegance',
        category: 'Kitchen',
        image: projectKitchen,
    },
    {
        id: 3,
        title: 'Tranquil Retreat',
        category: 'Master Bedroom',
        image: projectBedroom,
    },
    {
        id: 4,
        title: 'Refined Dining',
        category: 'Dining Room',
        image: projectDining,
    },
    {
        id: 5,
        title: 'Executive Study',
        category: 'Home Office',
        image: projectOffice,
    },
    {
        id: 6,
        title: 'Spa Sanctuary',
        category: 'Bathroom',
        image: projectBathroom,
    },
];

// For compatibility with the requested structure, though we prefer using the objects above
export const images = projects.map(p => p.image);
