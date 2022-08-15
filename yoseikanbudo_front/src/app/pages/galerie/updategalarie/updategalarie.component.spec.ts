import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdategalarieComponent } from './updategalarie.component';

describe('UpdategalarieComponent', () => {
  let component: UpdategalarieComponent;
  let fixture: ComponentFixture<UpdategalarieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdategalarieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdategalarieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
