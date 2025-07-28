import { Component, Input } from '@angular/core';

import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-icon-and-text',
  imports: [IconComponent],
  templateUrl: './icon-and-text.component.html',
  styleUrl: './icon-and-text.component.scss',
})
export class IconAndTextComponent {
  @Input() icon!: string;
  @Input() text!: string;
}
