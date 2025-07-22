import { TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { MOCK_PROPERTIES } from '../property.data';
import { PropertyDetailComponent } from './property-detail.component';

describe('PropertyDetailComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertyDetailComponent],
      providers: [
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

  it('should display the property image', () => {
    const fixture = TestBed.createComponent(PropertyDetailComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;

    expect(compiled.querySelector('img')?.src).toContain(
      MOCK_PROPERTIES[0].imageUrl,
    );
  });

  it('should display the property location', () => {
    const fixture = TestBed.createComponent(PropertyDetailComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;

    expect(
      compiled.querySelector('[data-testid="property-location"]')?.textContent,
    ).toContain(MOCK_PROPERTIES[0].location);
  });

  it('should display the property price', () => {
    const fixture = TestBed.createComponent(PropertyDetailComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;

    expect(
      compiled.querySelector('[data-testid="property-price"]')?.textContent,
    ).toContain(`${MOCK_PROPERTIES[0].price} € / night`);
  });
});
