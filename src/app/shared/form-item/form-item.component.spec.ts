import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, Validators } from '@angular/forms';

import { FormItemComponent } from './form-item.component';

describe('FormItem', () => {
  let component: FormItemComponent;
  let fixture: ComponentFixture<FormItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormItemComponent);
    component = fixture.componentInstance;

    component.id = 'firstName';
    component.type = 'text';
    component.label = 'First Name';
    component.control = new FormControl('', [Validators.required]);

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the label', () => {
    const compiled = fixture.nativeElement;

    expect(
      compiled.querySelector('[data-testid="form-item-label"]')?.textContent,
    ).toContain('First Name');
  });

  it('should display the input', () => {
    const compiled = fixture.nativeElement;

    expect(
      compiled.querySelector('[data-testid="form-item-input"]')?.value,
    ).toBe('');
  });

  it('should update the input value', () => {
    const compiled = fixture.nativeElement;

    component.control.setValue('test');

    expect(
      compiled.querySelector('[data-testid="form-item-input"]')?.value,
    ).toBe('test');
  });

  it('should associate the label with the input', () => {
    const compiled = fixture.nativeElement;
    const label = compiled.querySelector('[data-testid="form-item-label"]');
    const input = compiled.querySelector('[data-testid="form-item-input"]');

    expect(label.getAttribute('for')).toBe(input.getAttribute('id'));
  });

  it('should show an error message when the input is required and empty', () => {
    component.id = 'firstName';
    component.type = 'text';
    component.label = 'First Name';
    component.control = new FormControl('', [Validators.required]);
    component.control.markAsTouched();
    fixture.detectChanges();

    const errorMessage = fixture.nativeElement.querySelector(
      '[data-testid="form-item-error"]',
    );

    expect(errorMessage.textContent.trim()).toBe('First Name is required.');
  });

  it('should show an error message when the input is of type tel and contains non-numeric characters', () => {
    component.id = 'phone';
    component.type = 'tel';
    component.label = 'Phone';
    component.control = new FormControl('', [
      Validators.required,
      Validators.pattern(/^\d+$/),
    ]);
    component.control.markAsTouched();
    component.control.setValue('1234567890a');
    fixture.detectChanges();

    const errorMessage = fixture.nativeElement.querySelector(
      '[data-testid="form-item-error"]',
    );

    expect(errorMessage.textContent.trim()).toBe(
      'Phone must contain only numbers.',
    );
  });

  it('should show an error message when the input is of type email and content is not a valid email address', () => {
    component.id = 'email';
    component.type = 'email';
    component.label = 'Email';
    component.control = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);
    component.control.markAsTouched();
    component.control.setValue('invalid-email');
    fixture.detectChanges();

    const errorMessage = fixture.nativeElement.querySelector(
      '[data-testid="form-item-error"]',
    );

    expect(errorMessage.textContent.trim()).toBe(
      'Enter a valid email address.',
    );
  });

  it('should not show an error message when the input content is valid', () => {
    component.control.setValue('test@test.com');
    fixture.detectChanges();

    const errorMessage = fixture.nativeElement.querySelector(
      '[data-testid="form-item-error"]',
    );

    expect(errorMessage).toBeNull();
  });

  it('has aria-invalid attribute when the input content is invalid', () => {
    component.control.markAsTouched();
    fixture.detectChanges();

    const input = fixture.nativeElement.querySelector(
      '[data-testid="form-item-input"]',
    );

    expect(input.getAttribute('aria-invalid')).toBe('true');
  });
});
