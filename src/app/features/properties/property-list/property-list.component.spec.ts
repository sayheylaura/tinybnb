import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { routes } from '../../../app.routes';
import { PropertyListComponent } from './property-list.component';

describe('PropertyListComponent', () => {
  let fixture: ComponentFixture<PropertyListComponent>;
  let component: PropertyListComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertyListComponent],
      providers: [provideRouter(routes)],
    }).compileComponents();

    fixture = TestBed.createComponent(PropertyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the title', () => {
    const compiled = fixture.nativeElement;

    const title = compiled.querySelector('[data-testid="property-list-title"]');

    expect(title.textContent.trim()).toBe('Find your perfect stay');
  });

  it('should render a card for each property', () => {
    const compiled = fixture.nativeElement;

    const cards = compiled
      .querySelector('[data-testid="property-list-grid"]')
      .querySelectorAll('app-property-card');

    expect(cards.length).toBe(component.properties.length);
  });
});
