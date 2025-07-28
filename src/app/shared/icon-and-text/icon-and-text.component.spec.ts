import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconAndTextComponent } from './icon-and-text.component';

describe('IconAndTextComponent', () => {
  let component: IconAndTextComponent;
  let fixture: ComponentFixture<IconAndTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconAndTextComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IconAndTextComponent);
    component = fixture.componentInstance;
    component.icon = 'ac';
    component.text = 'AC';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the icon', () => {
    const compiled = fixture.nativeElement;

    const icon = compiled.querySelector('app-ac-icon');

    expect(icon).toBeTruthy();
  });

  it('should display the text', () => {
    const compiled = fixture.nativeElement;

    const text = compiled
      .querySelector('[data-testid="icon-and-text-text"]')
      ?.textContent.trim();

    expect(text).toBe('AC');
  });

  it('should handle empty text', () => {
    component.text = '';
    fixture.detectChanges();

    const compiled = fixture.nativeElement;

    const text = compiled
      .querySelector('[data-testid="icon-and-text-text"]')
      ?.textContent.trim();

    expect(text).toBe(undefined);
  });

  it('should handle unknown icon gracefully', () => {
    component.icon = 'unknown-icon';
    component.text = 'Unknown Feature';
    fixture.detectChanges();

    const compiled = fixture.nativeElement;

    const iconNotFound = compiled.querySelector(
      '[data-testid="icon-not-found"]',
    );

    expect(iconNotFound?.textContent.trim()).toContain('Icon not found');
  });
});
