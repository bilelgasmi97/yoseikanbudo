import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailappComponent } from './emailapp.component';

describe('EmailappComponent', () => {
  let component: EmailappComponent;
  let fixture: ComponentFixture<EmailappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailappComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
