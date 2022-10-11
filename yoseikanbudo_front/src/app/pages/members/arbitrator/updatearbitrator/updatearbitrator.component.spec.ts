import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatearbitratorComponent } from './updatearbitrator.component';

describe('UpdatearbitratorComponent', () => {
  let component: UpdatearbitratorComponent;
  let fixture: ComponentFixture<UpdatearbitratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatearbitratorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatearbitratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
