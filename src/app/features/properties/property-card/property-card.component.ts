import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Property } from '../property.data';

@Component({
  selector: 'app-property-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.scss'],
})
export class PropertyCardComponent {
  @Input() property!: Property;
}
