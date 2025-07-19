import { Component, Input } from '@angular/core';

export interface Property {
  id: number;
  title: string;
  imageUrl: string;
  price: number;
  location: string;
}

@Component({
  selector: 'app-property-card',
  standalone: true,
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.scss'],
})
export class PropertyCardComponent {
  @Input() property!: Property;
}
