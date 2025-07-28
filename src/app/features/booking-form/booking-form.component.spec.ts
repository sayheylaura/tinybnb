import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Location } from '@angular/common';

import { routes } from '../../app.routes';
import { MOCK_PROPERTIES } from '../properties/property.data';
import { BookingFormComponent } from './booking-form.component';
import { bookingFormFields } from './booking-form.component';

describe('BookingFormComponent', () => {
  let component: BookingFormComponent;
  let fixture: ComponentFixture<BookingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingFormComponent],
      providers: [provideRouter(routes)],
    }).compileComponents();

    fixture = TestBed.createComponent(BookingFormComponent);
    component = fixture.componentInstance;
    component.property.set(MOCK_PROPERTIES[0]);
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the arrow left icon', () => {
    const compiled = fixture.nativeElement;

    const icon = compiled.querySelector('app-arrow-left-icon');

    expect(icon).toBeTruthy();
  });

  it('should display the go back link with the correct text', () => {
    const compiled = fixture.nativeElement;

    const link = compiled.querySelector(
      '[data-testid="booking-form-back-link"]',
    );

    expect(link.textContent.trim()).toBe('Back to property');
  });

  it('should navigate to the property page when the back link is clicked', async () => {
    const location = TestBed.inject(Location);
    const compiled = fixture.nativeElement;
    fixture.detectChanges();

    const link = compiled.querySelector(
      '[data-testid="booking-form-back-link"]',
    );
    link?.click();
    await fixture.whenStable();

    expect(location.path()).toBe(MOCK_PROPERTIES[0].url);
  });

  it('should display the property title', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;

    const title = compiled.querySelector('[data-testid="booking-form-title"]');

    expect(title.textContent.trim()).toBe(`Book ${MOCK_PROPERTIES[0].title}`);
  });

  it('should display the property location and price', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;

    const details = compiled.querySelector(
      '[data-testid="booking-form-details"]',
    );

    expect(details.textContent.trim()).toBe(
      `${MOCK_PROPERTIES[0].location} · ${MOCK_PROPERTIES[0].price} € / night`,
    );
  });

  it('should display all form fields', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;

    const labelElements: Element[] = Array.from(
      compiled.querySelectorAll('[data-testid="form-item-label"]'),
    );
    const labels = labelElements.map((el) => el.textContent);

    expect(labels).toEqual(bookingFormFields.map((field) => field.label));
  });

  it('should disable the submit button when the form is invalid', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;

    const button = compiled.querySelector(
      '[data-testid="booking-form-button"]',
    );
    expect(button.disabled).toBe(true);
  });

  it('should enable the submit button when the form is valid', () => {
    component.bookingForm.get('firstName')?.setValue('Test');
    component.bookingForm.get('lastName')?.setValue('Test');
    component.bookingForm.get('email')?.setValue('test@test.com');
    component.bookingForm.get('phone')?.setValue('1234567890');
    component.bookingForm.get('address')?.setValue('Test');
    component.bookingForm.get('city')?.setValue('Test');
    component.bookingForm.get('zip')?.setValue('12345');
    component.bookingForm.get('country')?.setValue('Test');

    const compiled = fixture.nativeElement;

    const submitButton = compiled.querySelector(
      '[data-testid="booking-form-button"]',
    );

    expect(submitButton.disabled).toBe(false);
  });

  it('should reset the form on submit', () => {
    fixture.detectChanges();

    component.bookingForm.get('firstName')?.setValue('Test');
    component.bookingForm.get('lastName')?.setValue('Test');
    component.bookingForm.get('email')?.setValue('test@test.com');
    component.bookingForm.get('phone')?.setValue('1234567890');
    component.bookingForm.get('address')?.setValue('Test');
    component.bookingForm.get('city')?.setValue('Test');
    component.bookingForm.get('zip')?.setValue('12345');
    component.bookingForm.get('country')?.setValue('Test');

    const compiled = fixture.nativeElement;

    const form = compiled.querySelector('[data-testid="booking-form-form"]');
    form.dispatchEvent(new Event('submit'));

    expect(component.bookingForm.get('firstName')?.value).toBe('');
  });
});
