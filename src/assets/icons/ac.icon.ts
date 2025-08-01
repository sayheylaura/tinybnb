import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ac-icon',
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
      class="icon icon-tabler icons-tabler-outline icon-tabler-air-conditioning"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M8 16a3 3 0 0 1 -3 3" />
      <path d="M16 16a3 3 0 0 0 3 3" />
      <path d="M12 16v4" />
      <path
        d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"
      />
      <path d="M7 13v-3a1 1 0 0 1 1 -1h8a1 1 0 0 1 1 1v3" />
    </svg>
  `,
})
export class AcIconComponent {
  @Input() color: string = 'currentColor';
}
