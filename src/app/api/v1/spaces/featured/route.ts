import { NextResponse } from 'next/server';

const MOCK_FEATURED_SPACES = [
    {
        id: 'collab-hub-1',
        spaceId: 'collab-hub-1',
        spaceName: 'Collaborative Hub',
        spaceType: 'Sharing Workspace',
        city: {
            _id: 'city-1',
            name: 'Kochi',
            description: 'Queen of Arabian Sea',
            image: '/images/kochi.jpg',
            isActive: true,
        },
        spaceCategory: 'Sharing Workspace',
        shortDescription: 'A vibrant collaborative space',
        amenities: ['Wifi', 'Parking', 'Coffee'],
        pricing: {
            hotDesk: 120,
            dedicatedDesk: 150,
            privateOffice: 0,
        },
        location: {
            address: 'MG Road, Kochi',
            pincode: '682001',
        },
        contact: {
            email: 'info@collabhub.com',
            phone: '+919876543210',
        },
        images: ['/images/thumb-1.jpg'],
        status: 'active',
        isFeatured: true,
        features: {
            wifi: '100 Mbps',
            seats: '50 Seats',
            area: '120 m²',
        }
    },
    {
        id: 'open-ws-1',
        spaceId: 'open-ws-1',
        spaceName: 'Open Workspace',
        spaceType: 'Hot Desk',
        city: {
            _id: 'city-2',
            name: 'Trivandrum',
            description: 'Capital City',
            image: '/images/tvm.jpg',
            isActive: true,
        },
        spaceCategory: 'Hybrid',
        shortDescription: 'Open space for creative minds',
        amenities: ['Wifi', 'Chill Zone'],
        pricing: {
            hotDesk: 85,
        },
        location: {
            address: 'Technopark, Trivandrum',
        },
        contact: {
            email: 'hello@openws.com',
        },
        images: ['/images/thumb-2.png'],
        status: 'active',
        isFeatured: true,
        features: {
            wifi: '100 Mbps',
            seats: '30 Seats',
            area: '90 m²',
        }
    },
    {
        id: 'private-1',
        spaceId: 'private-1',
        spaceName: 'Private Suite',
        spaceType: 'Private Office',
        city: {
            _id: 'city-1',
            name: 'Kochi',
            description: '',
            image: '',
            isActive: true,
        },
        spaceCategory: 'Private',
        pricing: {
            privateOffice: 45,
        },
        amenities: ['Wifi', 'Meeting Room'],
        location: {},
        contact: {},
        images: ['/images/thumb-1.jpg'],
        status: 'active',
        isFeatured: true,
        features: {
            wifi: '75 Mbps',
            seats: '10 Seats',
            area: '50 m²',
        }
    },
    {
        id: 'collab-hub-2',
        spaceId: 'collab-hub-2',
        spaceName: 'Collaborative Hub',
        spaceType: 'Sharing Workspace',
        city: {
            _id: 'city-3',
            name: 'Calicut',
            description: '',
            image: '',
            isActive: true,
        },
        spaceCategory: 'Sharing Workspace',
        pricing: {
            hotDesk: 120,
        },
        amenities: [],
        location: {},
        contact: {},
        images: ['/images/thumb-1.jpg'],
        status: 'active',
        isFeatured: true,
        features: {
            wifi: '100 Mbps',
            seats: '50 Seats',
            area: '120 m²',
        }
    },
    {
        id: 'open-ws-2',
        spaceId: 'open-ws-2',
        spaceName: 'Open Workspace',
        spaceType: 'Hot Desk',
        city: {
            _id: 'city-1',
            name: 'Kochi',
            description: '',
            image: '',
            isActive: true,
        },
        spaceCategory: 'Hybrid',
        pricing: {
            hotDesk: 85,
        },
        amenities: [],
        location: {},
        contact: {},
        images: ['/images/thumb-2.png'],
        status: 'active',
        isFeatured: true,
        features: {
            wifi: '100 Mbps',
            seats: '30 Seats',
            area: '90 m²',
        }
    },
    {
        id: 'private-2',
        spaceId: 'private-2',
        spaceName: 'Private Suite',
        spaceType: 'Private Office',
        city: {
            _id: 'city-2',
            name: 'Trivandrum',
            description: '',
            image: '',
            isActive: true,
        },
        spaceCategory: 'Private',
        pricing: {
            privateOffice: 45,
        },
        amenities: [],
        location: {},
        contact: {},
        images: ['/images/thumb-1.jpg'],
        status: 'active',
        isFeatured: true,
        features: {
            wifi: '75 Mbps',
            seats: '10 Seats',
            area: '50 m²',
        }
    },
];

export async function GET() {
    return NextResponse.json({
        success: true,
        data: MOCK_FEATURED_SPACES,
        pagination: {
            page: 1,
            limit: 10,
            total: MOCK_FEATURED_SPACES.length,
            totalPages: 1,
        }
    });
}
