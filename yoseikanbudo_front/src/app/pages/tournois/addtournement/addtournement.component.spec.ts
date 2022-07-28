import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtournementComponent } from './addtournement.component';

describe('AddtournementComponent', () => {
  let component: AddtournementComponent;
  let fixture: ComponentFixture<AddtournementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddtournementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddtournementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
