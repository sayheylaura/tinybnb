import { Component, inject, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { ArrowLeftIconComponent } from '../../../assets/icons/arrow-left.icon';
import { FormItemComponent } from '../../shared/form-item/form-item.component';
import { MOCK_PROPERTIES, Property } from '../properties/property.data';

export const bookingFormFields: {
  id: string;
  type: string;
  label: string;
}[] = [
  {
    id: 'firstName',
    type: 'text',
    label: 'First Name',
  },
  {
    id: 'lastName',
    type: 'text',
    label: 'Last Name',
  },
  {
    id: 'email',
    type: 'email',
    label: 'Email',
  },
  {
    id: 'phone',
    type: 'tel',
    label: 'Phone',
  },
  {
    id: 'address',
    type: 'text',
    label: 'Address',
  },
  {
    id: 'city',
    type: 'text',
    label: 'City',
  },
  {
    id: 'zip',
    type: 'text',
    label: 'Zip',
  },
  {
    id: 'country',
    type: 'text',
    label: 'Country',
  },
];

@Component({
  selector: 'app-booking-form',
  standalone: true,
  imports: [
    ArrowLeftIconComponent,
    FormItemComponent,
    ReactiveFormsModule,
    RouterLink,
  ],
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss'],
})
export class BookingFormComponent {
  property = signal<Property | undefined>(undefined);
  bookingFormFields = bookingFormFields;
  private route = inject(ActivatedRoute);

  bookingForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\d+$/),
    ]),
    address: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    zip: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
  });

  constructor() {
    this.route.params.subscribe((params) => {
      this.property.set(
        MOCK_PROPERTIES.find((p) => p.id === Number(params['id'])),
      );
    });
  }

  getControl(fieldName: string): FormControl<string> {
    return this.bookingForm.get(fieldName) as FormControl<string>;
  }

  onSubmit() {
    console.log('onSubmit', this.bookingForm.value);
    this.bookingForm.reset({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      zip: '',
      country: '',
    });
  }
}
