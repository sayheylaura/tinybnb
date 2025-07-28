import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Location } from '@angular/common';

import { routes } from '../../app.routes';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let fixture: ComponentFixture<HeaderComponent>;
  let component: HeaderComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
      providers: [provideRouter(routes)],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the title', () => {
    const compiled = fixture.nativeElement;

    const title = compiled.querySelector('[data-testid="header-title-link"]');

    expect(title.textContent.trim()).toBe('tinybnb');
  });

  it('should navigate to the home page when the title is clicked', async () => {
    const location = TestBed.inject(Location);
    const compiled = fixture.nativeElement;

    const link = compiled.querySelector('[data-testid="header-title-link"]');
    link?.click();
    await fixture.whenStable();

    expect(location.path()).toBe('');
  });

  it('should have an aria-label on the title link', () => {
    const compiled = fixture.nativeElement;
    const link = compiled.querySelector('[data-testid="header-title-link"]');

    expect(link.getAttribute('aria-label')).toBe('Go to homepage');
  });
});
