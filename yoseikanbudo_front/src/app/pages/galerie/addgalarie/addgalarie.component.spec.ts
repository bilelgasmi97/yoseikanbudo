import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddgalarieComponent } from './addgalarie.component';

describe('AddgalarieComponent', () => {
  let component: AddgalarieComponent;
  let fixture: ComponentFixture<AddgalarieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddgalarieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddgalarieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
