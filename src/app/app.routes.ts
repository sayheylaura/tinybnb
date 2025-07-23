import { Routes } from '@angular/router';

import { PropertyListComponent } from './features/properties/property-list/property-list.component';
import { PropertyDetailComponent } from './features/properties/property-detail/property-detail.component';
import { BookingFormComponent } from './features/booking-form/booking-form.component';

export const routes: Routes = [
  { path: '', component: PropertyListComponent },
  { path: 'property/:id', component: PropertyDetailComponent },
  { path: 'property/:id/book', component: BookingFormComponent },
];
