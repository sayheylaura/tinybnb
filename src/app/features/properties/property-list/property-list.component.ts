import { Component } from '@angular/core';

import { MOCK_PROPERTIES } from '../property.data';
import { PropertyCardComponent } from '../property-card/property-card.component';

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
