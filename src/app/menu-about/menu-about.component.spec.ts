import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAboutComponent } from './menu-about.component';

describe('MenuAboutComponent', () => {
  let component: MenuAboutComponent;
  let fixture: ComponentFixture<MenuAboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuAboutComponent]
    });
    fixture = TestBed.createComponent(MenuAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
