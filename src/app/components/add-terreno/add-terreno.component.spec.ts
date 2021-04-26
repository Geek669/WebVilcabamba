import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTerrenoComponent } from './add-terreno.component';

describe('AddTerrenoComponent', () => {
  let component: AddTerrenoComponent;
  let fixture: ComponentFixture<AddTerrenoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTerrenoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTerrenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
