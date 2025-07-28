import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterOutlet, provideRouter } from '@angular/router';

import { App } from './app';
import { routes } from './app.routes';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';

describe('App', () => {
  let fixture: ComponentFixture<App>;
  let component: App;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App, HeaderComponent, FooterComponent, RouterOutlet],
      providers: [provideRouter(routes)],
    }).compileComponents();

    fixture = TestBed.createComponent(App);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should render header, main content, and footer', () => {
    const compiled = fixture.nativeElement;

    const header = compiled.querySelector('app-header');
    const main = compiled.querySelector('main');
    const routerOutlet = compiled.querySelector('router-outlet');
    const footer = compiled.querySelector('app-footer');

    expect(header).toBeTruthy();
    expect(main).toBeTruthy();
    expect(routerOutlet).toBeTruthy();
    expect(footer).toBeTruthy();
  });
});
