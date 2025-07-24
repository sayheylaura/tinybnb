import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Location } from '@angular/common';

import { routes } from '../../../app.routes';
import { MOCK_PROPERTIES } from '../property.data';
import { PropertyCardComponent } from './property-card.component';

describe('PropertyCardComponent', () => {
  let component: PropertyCardComponent;
  let fixture: ComponentFixture<PropertyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertyCardComponent],
      providers: [provideRouter(routes)],
    }).compileComponents();

    fixture = TestBed.createComponent(PropertyCardComponent);
    component = fixture.componentInstance;
    component.property = MOCK_PROPERTIES[0];
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the property title', () => {
    const compiled = fixture.nativeElement;

    const title = compiled.querySelector('[data-testid="property-card-title"]');

    expect(title?.textContent.trim()).toBe(MOCK_PROPERTIES[0].title);
  });

  it('should display the property image', () => {
    const compiled = fixture.nativeElement;

    const image = compiled.querySelector('[data-testid="property-card-image"]');

    expect(image?.src).toBe(MOCK_PROPERTIES[0].imageUrl);
  });

  it('should display the property location', () => {
    const compiled = fixture.nativeElement;

    const location = compiled.querySelector(
      '[data-testid="property-card-location"]',
    );

    expect(location?.textContent.trim()).toBe(MOCK_PROPERTIES[0].location);
  });

  it('should display the property price', () => {
    const compiled = fixture.nativeElement;

    const price = compiled.querySelector('[data-testid="property-card-price"]');

    expect(price?.textContent.trim()).toBe(
      `${MOCK_PROPERTIES[0].price} € / night`,
    );
  });

  it('should navigate to the property detail page when clicked', async () => {
    const location = TestBed.inject(Location);

    const compiled = fixture.nativeElement;

    const link = compiled.querySelector('[data-testid="property-card-link"]');
    link?.click();

    await fixture.whenStable();

    expect(location.path()).toBe(MOCK_PROPERTIES[0].url);
  });
});
