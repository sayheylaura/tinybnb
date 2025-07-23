import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { routes } from '../../../app.routes';
import { MOCK_PROPERTIES } from '../property.data';
import { PropertyListComponent } from './property-list.component';

describe('PropertyListComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertyListComponent],
      providers: [provideRouter(routes)],
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(PropertyListComponent);
    const component = fixture.componentInstance;

    expect(component).toBeTruthy();
  });

  it('should display the title', () => {
    const fixture = TestBed.createComponent(PropertyListComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(
      compiled.querySelector('[data-testid="property-list-title"]')
        ?.textContent,
    ).toContain('Find your perfect stay');
  });

  it('should render a card for each property', () => {
    const fixture = TestBed.createComponent(PropertyListComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const cards = compiled
      .querySelector('[data-testid="property-list-grid"]')
      .querySelectorAll('app-property-card');
    expect(cards.length).toBe(MOCK_PROPERTIES.length);
  });
});
