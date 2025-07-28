export interface Property {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
  price: number;
  location: string;
  url: string;
  rating: number;
  numberOfReviews: number;
  amenities: { id: number; name: string; icon: string }[];
  host: string;
}

export const MOCK_PROPERTIES: Property[] = [
  {
    id: 1,
    title: 'Mountain Cabin Retreat',
    imageUrl:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    description:
      'Escape to the tranquility of the mountains with this cozy cabin retreat. Perfect for a weekend getaway or a peaceful retreat, this cabin offers a serene environment with stunning views of the surrounding forest.',
    price: 120,
    location: 'Mittenwald, Germany',
    url: '/property/1',
    rating: 4.5,
    numberOfReviews: 100,
    amenities: [
      { id: 1, name: 'WiFi', icon: 'wifi' },
      { id: 2, name: 'TV', icon: 'tv' },
      { id: 3, name: 'Kitchen', icon: 'kitchen' },
      { id: 4, name: 'Parking', icon: 'parking' },
    ],
    host: 'Andreas Müller',
  },
  {
    id: 2,
    title: 'Modern Loft with City View',
    imageUrl:
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    description:
      'Experience the vibrant city life from this modern loft with a city view. A perfect place to relax and enjoy the city.',
    price: 180,
    location: 'Hamburg, Germany',
    url: '/property/2',
    rating: 4.7,
    numberOfReviews: 200,
    amenities: [
      { id: 1, name: 'Air conditioning', icon: 'ac' },
      { id: 2, name: 'Parking', icon: 'parking' },
      { id: 3, name: 'WiFi', icon: 'wifi' },
    ],
    host: 'Laura Schmidt',
  },
  {
    id: 3,
    title: 'Charming Beach House',
    imageUrl:
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=400&q=80',
    description:
      'Escape to the tranquility of the beach with this charming beach house. A perfect place to relax and enjoy the beach.',
    price: 250,
    location: 'Camogli, Italy',
    url: '/property/3',
    rating: 4.8,
    numberOfReviews: 300,
    amenities: [
      { id: 1, name: 'TV', icon: 'tv' },
      { id: 2, name: 'WiFi', icon: 'wifi' },
      { id: 3, name: 'Air conditioning', icon: 'ac' },
    ],
    host: 'Paolo Rossi',
  },
  {
    id: 4,
    title: 'Cozy Downtown Apartment in Beaux-Arts',
    imageUrl:
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80',
    description:
      'Experience the heart of the city in this beautifully appointed downtown apartment. Perfect for business travelers and tourists alike, this space offers modern amenities and easy access to all major attractions.',
    price: 150,
    location: 'Montpellier, France',
    url: '/property/4',
    rating: 4.6,
    numberOfReviews: 400,
    amenities: [
      { id: 1, name: 'Parking', icon: 'parking' },
      { id: 2, name: 'WiFi', icon: 'wifi' },
      { id: 3, name: 'Breakfast', icon: 'breakfast' },
    ],
    host: 'Isabelle Dubois',
  },
];
