import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { IconAndTextComponent } from '../../../shared/icon-and-text/icon-and-text.component';
import { MOCK_PROPERTIES, Property } from '../property.data';

@Component({
  selector: 'app-property-detail',
  standalone: true,
  imports: [RouterLink, IconAndTextComponent],
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.scss'],
})
export class PropertyDetailComponent {
  property = signal<Property | undefined>(undefined);
  private route = inject(ActivatedRoute);

  constructor() {
    this.route.params.subscribe((params) => {
      this.property.set(
        MOCK_PROPERTIES.find((p) => p.id === Number(params['id'])),
      );
    });
  }
}
