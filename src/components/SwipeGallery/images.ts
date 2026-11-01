// 1. Pavalion Images 1 to 5
import domePavalion1 from '@/assets/landscape/Dome Pavalion.png';
import domePavalion2 from '@/assets/landscape/Dome Pavalion (2).png';
import domePavalion3 from '@/assets/landscape/Dome Pavalion (3).png';
import domePavalion4 from '@/assets/landscape/Dome Pavalion (4).png';
import domePavalion5 from '@/assets/landscape/Dome Pavalion (5).png';

// 2. Pavalion Gallery, Hall, and Lobby
import pavalionGallery from '@/assets/landscape/Pavalion Gallery.jpeg';
import pavalionHall from '@/assets/landscape/Pavalion Hall.jpeg';
import pavalionLobby from '@/assets/landscape/Pavalion lobby.jpeg';

// 3. Mansion Images and Kitchen
import classicalMansion1 from '@/assets/landscape/Classical Mansion.jpeg';
import classicalMansion2 from '@/assets/landscape/Classical Mansion (2).jpeg';
import mansionKitchen from '@/assets/landscape/MANSION Kitchen.jpeg';

// 4. Modern Kindergarden Images with Library
import modernKindergarden1 from '@/assets/landscape/Modern Kindergarden.jpeg';
import modernKindergarden2 from '@/assets/landscape/Modern Kindergarden (2).jpeg';
import modernKindergarden3 from '@/assets/landscape/Modern Kindergarden (3).jpeg';
import modernKindergarden4 from '@/assets/landscape/Modern Kindergarden (4).jpeg';
import kindergardenLibrary1 from '@/assets/landscape/Kindergarden Library.jpeg';
import kindergardenLibrary2 from '@/assets/landscape/Kindergarden Library (2).jpeg';

// 5. Luxurious Office (Both)
import luxuriousOffice1 from '@/assets/landscape/Luxurious Office.jpeg';
import luxuriousOffice2 from '@/assets/landscape/Luxurious Office (2).jpeg';

// 6. Modern Luxury Residence
import modernResidence from '@/assets/landscape/MODERN HOUSE.png';

export const projects = [
    // 1. Pavalion Images 1 to 5
    {
        id: 1,
        title: 'Sangam Pavalion I',
        category: 'Dome Pavilion',
        image: domePavalion1,
    },
    {
        id: 2,
        title: 'Sangam Pavalion II',
        category: 'Dome Pavilion',
        image: domePavalion2,
    },
    {
        id: 3,
        title: 'Sangam Pavalion III',
        category: 'Dome Pavilion',
        image: domePavalion3,
    },
    {
        id: 4,
        title: 'Sangam Pavalion IV',
        category: 'Dome Pavilion',
        image: domePavalion4,
    },
    {
        id: 5,
        title: 'Sangam Pavalion V',
        category: 'Dome Pavilion',
        image: domePavalion5,
    },

    // 2. Pavalion Gallery, Hall, and Lobby
    {
        id: 6,
        title: 'Pavalion Gallery',
        category: 'Gallery & Exhibition',
        image: pavalionGallery,
    },
    {
        id: 7,
        title: 'Pavalion Hall',
        category: 'Grand Hall',
        image: pavalionHall,
    },
    {
        id: 8,
        title: 'Pavalion Lobby',
        category: 'Hospitality Lobby',
        image: pavalionLobby,
    },

    // 3. Mansion Images and Kitchen
    {
        id: 9,
        title: 'Classical Mansion I',
        category: 'Classical Architecture',
        image: classicalMansion1,
    },
    {
        id: 10,
        title: 'Classical Mansion II',
        category: 'Classical Architecture',
        image: classicalMansion2,
    },
    {
        id: 11,
        title: 'Mansion Kitchen',
        category: 'Interior Design',
        image: mansionKitchen,
    },

    // 4. Modern Kindergarden Images with Library
    {
        id: 12,
        title: 'Modern Kindergarden I',
        category: 'Educational Architecture',
        image: modernKindergarden1,
    },
    {
        id: 13,
        title: 'Modern Kindergarden II',
        category: 'Educational Architecture',
        image: modernKindergarden2,
    },
    {
        id: 14,
        title: 'Modern Kindergarden III',
        category: 'Educational Architecture',
        image: modernKindergarden3,
    },
    {
        id: 15,
        title: 'Modern Kindergarden IV',
        category: 'Educational Architecture',
        image: modernKindergarden4,
    },
    {
        id: 16,
        title: 'Kindergarden Library I',
        category: 'Library & Learning',
        image: kindergardenLibrary1,
    },
    {
        id: 17,
        title: 'Kindergarden Library II',
        category: 'Library & Learning',
        image: kindergardenLibrary2,
    },

    // 5. Luxurious Office (Both)
    {
        id: 18,
        title: 'Luxurious Office I',
        category: 'Executive Workspace',
        image: luxuriousOffice1,
    },
    {
        id: 19,
        title: 'Luxurious Office II',
        category: 'Executive Workspace',
        image: luxuriousOffice2,
    },

    // 6. Modern Luxury Residence
    {
        id: 20,
        title: 'Modern Luxury Residence',
        category: 'Residential Architecture',
        image: modernResidence,
    },
];

export const images = projects.map(p => p.image);
