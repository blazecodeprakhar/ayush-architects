import projectLiving from '@/assets/project-living-room.webp';
import projectKitchen from '@/assets/project-kitchen.webp';
import projectBedroom from '@/assets/project-bedroom.webp';
import modernKindergarden from '@/assets/landscape/Modern Kindergarden.jpeg';
import luxuriousOffice from '@/assets/landscape/Luxurious Office.jpeg';
import modernResidence from '@/assets/landscape/MODERN HOUSE.png';

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
        title: 'Modern Kindergarden',
        category: 'Educational',
        image: modernKindergarden,
    },
    {
        id: 5,
        title: 'Luxurious Office',
        category: 'Home Office',
        image: luxuriousOffice,
    },
    {
        id: 6,
        title: 'Modern Luxury Residence',
        category: 'Residential',
        image: modernResidence,
    },
];

// For compatibility with the requested structure, though we prefer using the objects above
export const images = projects.map(p => p.image);
