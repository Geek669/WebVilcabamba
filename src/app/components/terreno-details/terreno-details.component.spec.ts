import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerrenoDetailsComponent } from './terreno-details.component';

describe('TerrenoDetailsComponent', () => {
  let component: TerrenoDetailsComponent;
  let fixture: ComponentFixture<TerrenoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerrenoDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerrenoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
