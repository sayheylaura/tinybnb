import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Location } from '@angular/common';

import { routes } from '../../app.routes';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
      providers: [provideRouter(routes)],
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const component = fixture.componentInstance;

    expect(component).toBeTruthy();
  });

  it('should display the title', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;

    expect(compiled.querySelector('a')?.textContent).toContain('tinybnb');
  });

  it('should navigate to the home page when the title is clicked', async () => {
    const location = TestBed.inject(Location);
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;

    const link = compiled.querySelector('a');
    link?.click();
    await fixture.whenStable();

    expect(location.path()).toBe('');
  });

  it('should have an aria-label on the title link', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const link = compiled.querySelector('a');

    expect(link?.getAttribute('aria-label')).toBe('Go to homepage');
  });
});
