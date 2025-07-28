import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Location } from '@angular/common';
import { ActivatedRoute, provideRouter } from '@angular/router';
import { of } from 'rxjs';

import { routes } from '../../../app.routes';
import { MOCK_PROPERTIES } from '../property.data';
import { PropertyDetailComponent } from './property-detail.component';

describe('PropertyDetailComponent', () => {
  let component: PropertyDetailComponent;
  let fixture: ComponentFixture<PropertyDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertyDetailComponent],
      providers: [
        provideRouter(routes),
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: '1' }),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PropertyDetailComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the property title', () => {
    const compiled = fixture.nativeElement;

    const title = compiled
      .querySelector('[data-testid="property-detail-title"]')
      ?.textContent.trim();

    expect(title).toBe(MOCK_PROPERTIES[0].title);
  });

  it('should display the location pin icon', () => {
    const compiled = fixture.nativeElement;

    const locationPinIcon = compiled.querySelector('app-location-pin-icon');

    expect(locationPinIcon).toBeTruthy();
  });

  it('should display the star icon', () => {
    const compiled = fixture.nativeElement;

    const starIcon = compiled.querySelector('app-star-icon');

    expect(starIcon).toBeTruthy();
  });

  it('should display the property data', () => {
    const compiled = fixture.nativeElement;

    const propertyData = compiled
      .querySelector('[data-testid="property-detail-data-container"]')
      ?.textContent.trim();

    expect(propertyData).toBe(
      `${MOCK_PROPERTIES[0].location}  ${MOCK_PROPERTIES[0].rating} (${MOCK_PROPERTIES[0].numberOfReviews} reviews)`,
    );
  });

  it('should display the property image', () => {
    const compiled = fixture.nativeElement;

    const image = compiled.querySelector(
      '[data-testid="property-detail-image"]',
    );

    expect(image?.src).toBe(MOCK_PROPERTIES[0].imageUrl);
  });

  it('should set the correct alt text on the image', () => {
    const compiled = fixture.nativeElement;

    const image = compiled.querySelector(
      '[data-testid="property-detail-image"]',
    );

    expect(image?.alt).toBe(MOCK_PROPERTIES[0].title);
  });

  it('should display the property description', () => {
    const compiled = fixture.nativeElement;

    const description = compiled
      .querySelector('[data-testid="property-detail-description-text"]')
      ?.textContent.trim();

    expect(description).toBe(MOCK_PROPERTIES[0].description);
  });

  it('should display the property amenities', () => {
    const compiled = fixture.nativeElement;

    const amenities = compiled.querySelectorAll(
      '[data-testid="property-detail-amenity-item"]',
    );

    expect(amenities.length).toBe(MOCK_PROPERTIES[0].amenities.length);
  });

  it('should display the property price', () => {
    const compiled = fixture.nativeElement;

    const price = compiled
      .querySelector('[data-testid="property-detail-booking-price"]')
      ?.textContent.trim();

    expect(price).toBe(`${MOCK_PROPERTIES[0].price} € / night`);
  });

  it('should display the booking button', () => {
    const compiled = fixture.nativeElement;

    const bookingButton = compiled.querySelector(
      '[data-testid="property-detail-booking-button"]',
    );

    expect(bookingButton?.textContent).toBe('Book now');
  });

  it('should display the property host', () => {
    const compiled = fixture.nativeElement;

    const host = compiled.querySelector(
      '[data-testid="property-detail-booking-host"]',
    );

    expect(host?.textContent).toContain(`Hosted by ${MOCK_PROPERTIES[0].host}`);
  });

  it('should navigate to the booking page when the booking button is clicked', async () => {
    const location = TestBed.inject(Location);
    const compiled = fixture.nativeElement;

    const link = compiled.querySelector(
      '[data-testid="property-detail-booking-button"]',
    );
    link?.click();
    await fixture.whenStable();

    expect(location.path()).toBe('/property/1/book');
  });
});

describe('PropertyDetailComponent > when the property is not found', () => {
  let fixture: ComponentFixture<PropertyDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertyDetailComponent],
      providers: [
        provideRouter(routes),
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: '999' }),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PropertyDetailComponent);
    fixture.detectChanges();
  });

  it('should display a message', () => {
    const compiled = fixture.nativeElement;

    const notFoundText = compiled.querySelector(
      '[data-testid="property-detail-not-found"]',
    )?.textContent;

    expect(notFoundText).toContain('Property not found');
  });
});
