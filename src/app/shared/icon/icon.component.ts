import { Component, Input } from '@angular/core';

import { AcIconComponent } from '../../../assets/icons/ac.icon';
import { ArrowLeftIconComponent } from '../../../assets/icons/arrow-left.icon';
import { BreakfastIconComponent } from '../../../assets/icons/breakfast.icon';
import { GitHubIconComponent } from '../../../assets/icons/github.icon';
import { KitchenIconComponent } from '../../../assets/icons/kitchen.icon';
import { LocationPinIconComponent } from '../../../assets/icons/location-pin.icon';
import { ParkingIconComponent } from '../../../assets/icons/parking.icon';
import { StarIconComponent } from '../../../assets/icons/star.icon';
import { TvIconComponent } from '../../../assets/icons/tv.icon';
import { WifiIconComponent } from '../../../assets/icons/wifi.icon';

@Component({
  selector: 'app-icon',
  imports: [
    AcIconComponent,
    ArrowLeftIconComponent,
    BreakfastIconComponent,
    GitHubIconComponent,
    KitchenIconComponent,
    LocationPinIconComponent,
    ParkingIconComponent,
    StarIconComponent,
    TvIconComponent,
    WifiIconComponent,
  ],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss',
})
export class IconComponent {
  @Input() icon!: string;
}
