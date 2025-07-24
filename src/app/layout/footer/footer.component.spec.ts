import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Location } from '@angular/common';

import { routes } from '../../app.routes';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent],
      providers: [provideRouter(routes)],
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(FooterComponent);
    const component = fixture.componentInstance;

    expect(component).toBeTruthy();
  });

  it('should display the current year in the copyright text', () => {
    const fixture = TestBed.createComponent(FooterComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const currentYear = new Date().getFullYear();

    const copyright = compiled.querySelector(
      '[data-testid="footer-copyright"]',
    );

    expect(copyright?.textContent.trim()).toBe(`© ${currentYear} Tinybnb`);
  });

  it('should navigate to the home page when the copyright text is clicked', async () => {
    const location = TestBed.inject(Location);
    const fixture = TestBed.createComponent(FooterComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;

    const link = compiled.querySelector('[data-testid="footer-link"]');
    link?.click();
    await fixture.whenStable();

    expect(location.path()).toBe('');
  });

  it('should have an aria-label on the copyright link', () => {
    const fixture = TestBed.createComponent(FooterComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;

    const link = compiled.querySelector('[data-testid="footer-link"]');

    expect(link?.getAttribute('aria-label')).toBe('Go to homepage');
  });

  it('should display the description text', () => {
    const fixture = TestBed.createComponent(FooterComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;

    const description = compiled.querySelector(
      '[data-testid="footer-description"]',
    );

    expect(description?.textContent.trim()).toBe('Your home away from home');
  });

  it('should display a github icon', () => {
    const fixture = TestBed.createComponent(FooterComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;

    expect(compiled.querySelector('app-github-icon')).toBeTruthy();
  });
});
