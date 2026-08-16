export interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  type: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  image: string;
  featured: boolean;
  description: string;
  amenities: string[];
  gallery: string[];
}

export const properties: Property[] = [
  {
    id: "property-1",
    title: "Modern Family House",
    location: "Gacuriro, Kigali",
    price: "RWF 1,500,000 / month",
    type: "House",
    bedrooms: 4,
    bathrooms: 3,
    area: "320 m²",
    image: "/images/properties/property-1.jpg",
    featured: true,
    description:
      "A beautiful modern family house located in a peaceful neighborhood of Gacuriro.",
    amenities: [
      "Parking",
      "Security",
      "Garden",
      "Modern Kitchen",
      "Water & Electricity",
    ],
    gallery: [
      "/images/properties/property-1.jpg",
      "/images/properties/property-1/living-room.jpg",
      "/images/properties/property-1/bedroom.jpg",
      "/images/properties/property-1/kitchen.jpg",
      "/images/properties/property-1/bathroom.jpg",
    ],
  },

  {
    id: "property-2",
    title: "Luxury Family Home",
    location: "Nyarutarama, Kigali",
    price: "RWF 2,500,000 / month",
    type: "House",
    bedrooms: 5,
    bathrooms: 4,
    area: "420 m²",
    image: "/images/properties/property-2.jpg",
    featured: true,
    description:
      "A spacious luxury home with modern architecture and premium interior finishes.",
    amenities: [
      "Parking",
      "Security",
      "Garden",
      "Modern Kitchen",
      "Balcony",
    ],
    gallery: [
      "/images/properties/property-2.jpg",
      "/images/properties/property-2/living-room.jpg",
      "/images/properties/property-2/bedroom.jpg",
      "/images/properties/property-2/kitchen.jpg",
      "/images/properties/property-2/bathroom.jpg",
    ],
  },

  {
    id: "property-3",
    title: "Elegant Modern House",
    location: "Kibagabaga, Kigali",
    price: "RWF 1,800,000 / month",
    type: "House",
    bedrooms: 4,
    bathrooms: 3,
    area: "350 m²",
    image: "/images/properties/property-3.jpg",
    featured: true,
    description:
      "An elegant modern home offering comfort, privacy and beautiful contemporary spaces.",
    amenities: [
      "Parking",
      "Security",
      "Garden",
      "Modern Kitchen",
      "Laundry",
    ],
    gallery: [
      "/images/properties/property-3.jpg",
      "/images/properties/property-3/living-room.jpg",
      "/images/properties/property-3/bedroom.jpg",
      "/images/properties/property-3/kitchen.jpg",
      "/images/properties/property-3/bathroom.jpg",
    ],
  },

  {
    id: "property-4",
    title: "Large Modern Multi-Story House",
    location: "Kibagabaga, Kigali",
    price: "RWF 3,500,000 / month",
    type: "House",
    bedrooms: 6,
    bathrooms: 5,
    area: "650 m²",
    image: "/images/properties/property-4.jpg",
    featured: true,
    description:
      "A large modern multi-story house with spacious interiors, contemporary architecture and premium finishes.",
    amenities: [
      "Parking",
      "Security",
      "Garden",
      "Modern Kitchen",
      "Balconies",
      "Large Living Spaces",
      "Water & Electricity",
    ],
    gallery: [
      "/images/properties/property-4.jpg",
      "/images/properties/property-4/living-room.jpg",
      "/images/properties/property-4/bedroom.jpg",
      "/images/properties/property-4/kitchen.jpg",
      "/images/properties/property-4/bathroom.jpg",
    ],
  },
];