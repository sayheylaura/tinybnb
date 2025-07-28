import { Component } from '@angular/core';

import { MOCK_PROPERTIES } from '../property.data';
import { PropertyCardComponent } from '../property-card/property-card.component';

@Component({
  selector: 'app-property-list',
  standalone: true,
  imports: [PropertyCardComponent],
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss'],
})
export class PropertyListComponent {
  properties = MOCK_PROPERTIES;
}
