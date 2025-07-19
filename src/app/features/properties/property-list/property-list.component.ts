import { Component } from '@angular/core';

import {
  Property,
  PropertyCardComponent,
} from '../property-card/property-card.component';

const MOCK_PROPERTIES: Property[] = [
  {
    id: 1,
    title: 'Mountain Cabin Retreat',
    imageUrl:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    price: 120,
    location: 'Mittenwald, Germany',
  },
  {
    id: 2,
    title: 'Modern Loft with City View',
    imageUrl:
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    price: 180,
    location: 'Hamburg, Germany',
  },
  {
    id: 3,
    title: 'Charming Beach House',
    imageUrl:
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=400&q=80',
    price: 250,
    location: 'Camogli, Italy',
  },
  {
    id: 4,
    title: 'Cozy Downtown Apartment',
    imageUrl:
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80',
    price: 150,
    location: 'Montpellier, France',
  },
];

@Component({
  selector: 'app-property-list',
  standalone: true,
  imports: [PropertyCardComponent],
  template: `
    <section class="property-list" aria-label="Property Listings">
      <h2 class="property-list-title">Find your perfect stay</h2>
      <div class="property-grid">
        @for (property of properties; track property.id) {
          <app-property-card [property]="property"></app-property-card>
        }
      </div>
    </section>
  `,
  styleUrls: ['./property-list.component.scss'],
})
export class PropertyListComponent {
  properties = MOCK_PROPERTIES;
}
