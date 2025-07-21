import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `<footer class="footer">
    <p>
      &copy; {{ currentYear }} <a routerLink="/" class="footer-link">Tinybnb</a>
    </p>
    <div>|</div>
    <p>Your home away from home</p>
  </footer>`,
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
