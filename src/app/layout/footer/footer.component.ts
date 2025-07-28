import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { GitHubIconComponent } from '../../../assets/icons/github.icon';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, GitHubIconComponent],
  template: `<footer class="footer">
    <div class="footer-content">
      <p data-testid="footer-copyright">
        &copy; {{ currentYear }}
        <a
          routerLink="/"
          class="footer-link"
          aria-label="Go to homepage"
          data-testid="footer-link"
          >Tinybnb</a
        >
      </p>
      <div class="footer-divider">|</div>
      <div class="footer-social-links">
        <a
          href="https://github.com/sayheylaura/tinybnb"
          target="_blank"
          rel="noopener noreferrer"
        >
          <app-github-icon color="rebeccapurple" />
        </a>
      </div>
    </div>
    <p data-testid="footer-description">Your home away from home</p>
  </footer>`,
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
