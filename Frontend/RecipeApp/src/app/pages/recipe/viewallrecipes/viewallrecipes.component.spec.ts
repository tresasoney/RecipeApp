import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallrecipesComponent } from './viewallrecipes.component';

describe('ViewallrecipesComponent', () => {
  let component: ViewallrecipesComponent;
  let fixture: ComponentFixture<ViewallrecipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewallrecipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewallrecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
