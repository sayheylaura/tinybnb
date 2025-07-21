import { Routes } from '@angular/router';

import { PropertyListComponent } from './features/properties/property-list/property-list.component';
import { PropertyDetailComponent } from './features/properties/property-detail/property-detail.component';

export const routes: Routes = [
  { path: '', component: PropertyListComponent },
  { path: 'property/:id', component: PropertyDetailComponent },
];
