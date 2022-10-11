import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatetournementComponent } from './updatetournement.component';

describe('UpdatetournementComponent', () => {
  let component: UpdatetournementComponent;
  let fixture: ComponentFixture<UpdatetournementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatetournementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatetournementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
