import { TestBed } from '@angular/core/testing';
import { Location } from '@angular/common';
import { ActivatedRoute, provideRouter } from '@angular/router';
import { of } from 'rxjs';

import { routes } from '../../../app.routes';
import { MOCK_PROPERTIES } from '../property.data';
import { PropertyDetailComponent } from './property-detail.component';

describe('PropertyDetailComponent', () => {
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
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(PropertyDetailComponent);
    const component = fixture.componentInstance;

    expect(component).toBeTruthy();
  });

  it('should display the property title', () => {
    const fixture = TestBed.createComponent(PropertyDetailComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;

    expect(compiled.querySelector('h2')?.textContent).toContain(
      MOCK_PROPERTIES[0].title,
    );
  });

  it('should display the location pin icon', () => {
    const fixture = TestBed.createComponent(PropertyDetailComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;

    expect(compiled.querySelector('app-location-pin-icon')).toBeTruthy();
  });

  it('should display the property location', () => {
    const fixture = TestBed.createComponent(PropertyDetailComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;

    expect(
      compiled.querySelector('[data-testid="property-location"]')?.textContent,
    ).toContain(MOCK_PROPERTIES[0].location);
  });

  it('should display the property image', () => {
    const fixture = TestBed.createComponent(PropertyDetailComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;

    expect(compiled.querySelector('img')?.src).toContain(
      MOCK_PROPERTIES[0].imageUrl,
    );
  });

  it('should set the correct alt text on the image', () => {
    const fixture = TestBed.createComponent(PropertyDetailComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;

    expect(compiled.querySelector('img')?.alt).toBe(MOCK_PROPERTIES[0].title);
  });

  it('should display the property description', () => {
    const fixture = TestBed.createComponent(PropertyDetailComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;

    expect(
      compiled.querySelector('[data-testid="property-description"]')
        ?.textContent,
    ).toContain(MOCK_PROPERTIES[0].description);
  });

  it('should display the property price', () => {
    const fixture = TestBed.createComponent(PropertyDetailComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;

    expect(
      compiled.querySelector('[data-testid="property-price"]')?.textContent,
    ).toContain(`${MOCK_PROPERTIES[0].price} € / night`);
  });

  it('should display the booking button', () => {
    const fixture = TestBed.createComponent(PropertyDetailComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;

    expect(
      compiled.querySelector('[data-testid="property-detail-booking-button"]'),
    ).toBeTruthy();
  });

  it('should navigate to the booking page when the booking button is clicked', async () => {
    const location = TestBed.inject(Location);
    const fixture = TestBed.createComponent(PropertyDetailComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;

    const link = compiled.querySelector(
      '[data-testid="property-detail-booking-button"]',
    );
    link?.click();
    await fixture.whenStable();

    expect(location.path()).toBe('/property/1/book');
  });

  it('should display a message when the property is not found', () => {
    TestBed.overrideProvider(ActivatedRoute, {
      useValue: {
        params: of({ id: '999' }),
      },
    });

    const fixture = TestBed.createComponent(PropertyDetailComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;

    expect(
      compiled.querySelector('[data-testid="property-not-found"]')?.textContent,
    ).toContain('Property not found');
  });
});
