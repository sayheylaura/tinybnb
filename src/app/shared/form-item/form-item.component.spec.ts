import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormItemComponent } from './form-item.component';
import { FormControl } from '@angular/forms';

describe('FormItem', () => {
  let component: FormItemComponent;
  let fixture: ComponentFixture<FormItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormItemComponent);
    component = fixture.componentInstance;

    component.id = 'test-id';
    component.type = 'text';
    component.label = 'Test Label';
    component.control = new FormControl('');

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the label', () => {
    const compiled = fixture.nativeElement;

    expect(
      compiled.querySelector('[data-testid="form-item-label"]')?.textContent,
    ).toContain('Test Label');
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
});
