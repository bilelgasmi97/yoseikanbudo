import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddarbitratorComponent } from './addarbitrator.component';

describe('AddarbitratorComponent', () => {
  let component: AddarbitratorComponent;
  let fixture: ComponentFixture<AddarbitratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddarbitratorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddarbitratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
