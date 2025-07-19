import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `<header class="header">
    <h1 class="header-title">tinybnb</h1>
  </header>`,
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {}
