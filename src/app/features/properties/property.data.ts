export interface Property {
  id: number;
  title: string;
  imageUrl: string;
  price: number;
  location: string;
  url: string;
}

export const MOCK_PROPERTIES: Property[] = [
  {
    id: 1,
    title: 'Mountain Cabin Retreat',
    imageUrl:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    price: 120,
    location: 'Mittenwald, Germany',
    url: 'property/1',
  },
  {
    id: 2,
    title: 'Modern Loft with City View',
    imageUrl:
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    price: 180,
    location: 'Hamburg, Germany',
    url: 'property/2',
  },
  {
    id: 3,
    title: 'Charming Beach House',
    imageUrl:
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=400&q=80',
    price: 250,
    location: 'Camogli, Italy',
    url: 'property/3',
  },
  {
    id: 4,
    title: 'Cozy Downtown Apartment',
    imageUrl:
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80',
    price: 150,
    location: 'Montpellier, France',
    url: 'property/4',
  },
];
