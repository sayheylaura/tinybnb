import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { ArrowLeftIconComponent } from '../../../assets/icons/arrow-left.icon';
import { MOCK_PROPERTIES, Property } from '../properties/property.data';

@Component({
  selector: 'app-booking-form',
  standalone: true,
  imports: [ArrowLeftIconComponent, ReactiveFormsModule, RouterLink],
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss'],
})
export class BookingFormComponent {
  property = signal<Property | undefined>(undefined);
  private route = inject(ActivatedRoute);

  bookingForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    address: new FormControl(''),
    city: new FormControl(''),
    zip: new FormControl(''),
    country: new FormControl(''),
  });

  constructor() {
    this.route.params.subscribe((params) => {
      this.property.set(
        MOCK_PROPERTIES.find((p) => p.id === Number(params['id'])),
      );
    });
  }

  onSubmit() {
    console.log(this.bookingForm.value);
  }
}
