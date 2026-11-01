// 1. Pavalion Images 1 to 5 (5 angles)
import domePavalion1 from '@/assets/landscape/Dome Pavalion.png';
import domePavalion2 from '@/assets/landscape/Dome Pavalion (2).png';
import domePavalion3 from '@/assets/landscape/Dome Pavalion (3).png';
import domePavalion4 from '@/assets/landscape/Dome Pavalion (4).png';
import domePavalion5 from '@/assets/landscape/Dome Pavalion (5).png';

// 2. Pavalion Gallery, Hall, and Lobby (3 angles)
import pavalionGallery from '@/assets/landscape/Pavalion Gallery.jpeg';
import pavalionHall from '@/assets/landscape/Pavalion Hall.jpeg';
import pavalionLobby from '@/assets/landscape/Pavalion lobby.jpeg';

// 3. Mansion Images and Kitchen (3 angles)
import classicalMansion1 from '@/assets/landscape/Classical Mansion.jpeg';
import classicalMansion2 from '@/assets/landscape/Classical Mansion (2).jpeg';
import mansionKitchen from '@/assets/landscape/MANSION Kitchen.jpeg';

// 4. Modern Kindergarden Images with Library (6 angles)
import modernKindergarden1 from '@/assets/landscape/Modern Kindergarden.jpeg';
import modernKindergarden2 from '@/assets/landscape/Modern Kindergarden (2).jpeg';
import modernKindergarden3 from '@/assets/landscape/Modern Kindergarden (3).jpeg';
import modernKindergarden4 from '@/assets/landscape/Modern Kindergarden (4).jpeg';
import kindergardenLibrary1 from '@/assets/landscape/Kindergarden Library.jpeg';
import kindergardenLibrary2 from '@/assets/landscape/Kindergarden Library (2).jpeg';

// 5. Luxurious Office (2 angles)
import luxuriousOffice1 from '@/assets/landscape/Luxurious Office.jpeg';
import luxuriousOffice2 from '@/assets/landscape/Luxurious Office (2).jpeg';

// 6. Modern Luxury Residence (1 angle)
import modernResidence from '@/assets/landscape/MODERN HOUSE.png';

export interface Project {
    id: number;
    title: string;
    category: string;
    location?: string;
    description?: string;
    image: string;
    images: string[];
}

export const projects: Project[] = [
    {
        id: 1,
        title: 'Sangam Pavalion',
        category: 'Pavilion Architecture',
        location: 'Cultural Zone',
        image: domePavalion1,
        images: [
            domePavalion1,
            domePavalion2,
            domePavalion3,
            domePavalion4,
            domePavalion5,
        ],
        description: 'A sculptural dome pavilion that blends organic architecture, natural light, and serene landscaped spaces to create a harmonious connection between nature and design.',
    },
    {
        id: 2,
        title: 'Pavalion Interiors',
        category: 'Interior Design',
        location: 'Exhibition Hall',
        image: pavalionHall,
        images: [
            pavalionHall,
            pavalionGallery,
            pavalionLobby,
        ],
        description: 'The interiors feature warm ambient lighting, fluid spatial forms, and a minimalist material palette, creating a tranquil and immersive atmosphere that complements the pavilion’s organic architecture.',
    },
    {
        id: 3,
        title: 'Classic Mansion',
        category: 'Classical Architecture',
        location: 'Private Grounds',
        image: classicalMansion1,
        images: [
            classicalMansion1,
            classicalMansion2,
            mansionKitchen,
        ],
        description: 'A timeless classical mansion featuring elegant symmetry, pitched roofs, arched windows, and refined detailing, reflecting grandeur and traditional architectural charm.',
    },
    {
        id: 4,
        title: 'Modern Kindergarden',
        category: 'Educational',
        location: 'Urban Campus',
        image: modernKindergarden1,
        images: [
            modernKindergarden1,
            modernKindergarden2,
            modernKindergarden3,
            modernKindergarden4,
            kindergardenLibrary1,
            kindergardenLibrary2,
        ],
        description: 'A contemporary kindergarten designed with playful outdoor spaces, interactive landscapes, and child-friendly architecture, fostering creativity, exploration, and joyful learning.',
    },
    {
        id: 5,
        title: 'Luxurious Office',
        category: 'Commercial / Workspace',
        location: 'Tribeca, NY',
        image: luxuriousOffice1,
        images: [
            luxuriousOffice1,
            luxuriousOffice2,
        ],
        description: 'Inspiring workspace combining productivity with style. Built-in shelving and refined materials create a distinguished executive atmosphere.',
    },
    {
        id: 6,
        title: 'Modern House',
        category: 'Residential',
        location: 'Private Estate',
        image: modernResidence,
        images: [
            modernResidence,
        ],
        description: 'A contemporary luxury residence featuring clean geometric volumes, expansive terraces, elegant material contrasts, and minimalist detailing, creating a sophisticated blend of modern design and comfort.',
    },
];

export const images = projects.map(p => p.image);
