import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

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

  it('should display the copyright text', () => {
    const fixture = TestBed.createComponent(FooterComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;

    expect(
      compiled.querySelector('[data-testid="footer-copyright"]')?.textContent,
    ).toContain('© 2025 Tinybnb');
  });

  it('should display the description text', () => {
    const fixture = TestBed.createComponent(FooterComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;

    expect(
      compiled.querySelector('[data-testid="footer-description"]')?.textContent,
    ).toContain('Your home away from home');
  });
});
