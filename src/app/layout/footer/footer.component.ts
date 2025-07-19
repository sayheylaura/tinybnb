import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `<footer class="footer">
    <p>&copy; {{ currentYear }} Tinybnb</p>
    <div>|</div>
    <p>Your home away from home</p>
  </footer>`,
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
