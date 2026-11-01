import sangamPavalion from '@/assets/landscape/Dome Pavalion.png';
import pavalionInteriors from '@/assets/landscape/Pavalion Hall.jpeg';
import classicMansion from '@/assets/landscape/Classical Mansion.jpeg';
import modernKindergarden from '@/assets/landscape/Modern Kindergarden.jpeg';
import luxuriousOffice from '@/assets/landscape/Luxurious Office.jpeg';
import modernResidence from '@/assets/landscape/MODERN HOUSE.png';

export const projects = [
    {
        id: 1,
        title: 'Sangam Pavalion',
        category: 'Pavilion Architecture',
        image: sangamPavalion,
    },
    {
        id: 2,
        title: 'Pavalion Interiors',
        category: 'Interior Design',
        image: pavalionInteriors,
    },
    {
        id: 3,
        title: 'Classic Mansion',
        category: 'Luxury Architecture',
        image: classicMansion,
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
