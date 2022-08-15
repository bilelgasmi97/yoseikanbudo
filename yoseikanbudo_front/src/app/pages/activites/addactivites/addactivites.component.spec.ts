import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddactivitesComponent } from './addactivites.component';

describe('AddactivitesComponent', () => {
  let component: AddactivitesComponent;
  let fixture: ComponentFixture<AddactivitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddactivitesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddactivitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
