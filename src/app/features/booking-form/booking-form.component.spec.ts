import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingFormComponent } from './booking-form.component';
import { bookingFormFields } from './booking-form.component';

describe('BookingFormComponent', () => {
  let component: BookingFormComponent;
  let fixture: ComponentFixture<BookingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BookingFormComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display all form fields', () => {
    const compiled = fixture.nativeElement;

    const labelElements: Element[] = Array.from(
      compiled.querySelectorAll('[data-testid="form-item-label"]'),
    );
    const labels = labelElements.map((el) => el.textContent);

    expect(labels).toEqual(bookingFormFields.map((field) => field.label));
  });

  it('should reset the form on submit', () => {
    component.bookingForm.get('firstName')?.setValue('Test');

    const form = fixture.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('submit'));

    expect(component.bookingForm.get('firstName')?.value).toBe('');
  });
});
