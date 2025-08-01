import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-kitchen-icon',
  standalone: true,
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      [attr.stroke]="color"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="icon icon-tabler icons-tabler-outline icon-tabler-tools-kitchen-3"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M7 4v17m-3 -17v3a3 3 0 1 0 6 0v-3" />
      <path d="M17 8m-3 0a3 4 0 1 0 6 0a3 4 0 1 0 -6 0" />
      <path d="M17 12v9" />
    </svg>
  `,
})
export class KitchenIconComponent {
  @Input() color: string = 'currentColor';
}
