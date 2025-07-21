import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  template: `<header class="header">
    <h1 class="header-title">
      <a routerLink="/" class="header-title-link">tinybnb</a>
    </h1>
  </header>`,
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {}
