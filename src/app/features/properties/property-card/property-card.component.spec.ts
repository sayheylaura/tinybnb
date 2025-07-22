import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Location } from '@angular/common';

import { routes } from '../../../app.routes';
import { MOCK_PROPERTIES } from '../property.data';
import { PropertyCardComponent } from './property-card.component';

describe('PropertyCardComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertyCardComponent],
      providers: [provideRouter(routes)],
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(PropertyCardComponent);
    const component = fixture.componentInstance;

    expect(component).toBeTruthy();
  });

  it('should display the property title', () => {
    const fixture = TestBed.createComponent(PropertyCardComponent);
    const component = fixture.componentInstance;

    component.property = MOCK_PROPERTIES[0];
    fixture.detectChanges();
    const compiled = fixture.nativeElement;

    expect(compiled.querySelector('h3')?.textContent).toContain(
      MOCK_PROPERTIES[0].title,
    );
  });

  it('should display the property image', () => {
    const fixture = TestBed.createComponent(PropertyCardComponent);
    const component = fixture.componentInstance;

    component.property = MOCK_PROPERTIES[0];
    fixture.detectChanges();
    const compiled = fixture.nativeElement;

    expect(compiled.querySelector('img')?.src).toContain(
      MOCK_PROPERTIES[0].imageUrl,
    );
  });

  it('should display the property location', () => {
    const fixture = TestBed.createComponent(PropertyCardComponent);
    const component = fixture.componentInstance;

    component.property = MOCK_PROPERTIES[0];
    fixture.detectChanges();
    const compiled = fixture.nativeElement;

    expect(
      compiled.querySelector('[data-testid="property-location"]')?.textContent,
    ).toContain(MOCK_PROPERTIES[0].location);
  });

  it('should display the property price', () => {
    const fixture = TestBed.createComponent(PropertyCardComponent);
    const component = fixture.componentInstance;

    component.property = MOCK_PROPERTIES[0];
    fixture.detectChanges();
    const compiled = fixture.nativeElement;

    expect(
      compiled.querySelector('[data-testid="property-price"]')?.textContent,
    ).toContain(`${MOCK_PROPERTIES[0].price} €`);
  });

  it('should navigate to the property detail page when clicked', async () => {
    const location = TestBed.inject(Location);
    const fixture = TestBed.createComponent(PropertyCardComponent);

    const component = fixture.componentInstance;
    component.property = MOCK_PROPERTIES[0];
    fixture.detectChanges();
    const compiled = fixture.nativeElement;

    const link = compiled.querySelector('a');
    link?.click();
    await fixture.whenStable();

    expect(location.path()).toBe(MOCK_PROPERTIES[0].url);
  });
});
