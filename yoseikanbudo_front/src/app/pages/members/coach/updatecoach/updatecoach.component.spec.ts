import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecoachComponent } from './updatecoach.component';

describe('UpdatecoachComponent', () => {
  let component: UpdatecoachComponent;
  let fixture: ComponentFixture<UpdatecoachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatecoachComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatecoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
