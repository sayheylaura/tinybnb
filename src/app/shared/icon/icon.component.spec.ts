import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconComponent } from './icon.component';

describe('IconComponent', () => {
  let component: IconComponent;
  let fixture: ComponentFixture<IconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IconComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    component.icon = 'ac';
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  it('should display the correct icon', () => {
    component.icon = 'ac';
    fixture.detectChanges();

    const compiled = fixture.nativeElement;

    expect(compiled.querySelector('app-ac-icon')).toBeTruthy();
  });

  it('should display fallback message when icon is not found', () => {
    component.icon = 'unknown-icon';
    fixture.detectChanges();

    const compiled = fixture.nativeElement;

    const iconNotFound = compiled.querySelector(
      '[data-testid="icon-not-found"]',
    );

    expect(iconNotFound?.textContent.trim()).toContain('Icon not found');
  });
});
