import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateactivitesComponent } from './updateactivites.component';

describe('UpdateactivitesComponent', () => {
  let component: UpdateactivitesComponent;
  let fixture: ComponentFixture<UpdateactivitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateactivitesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateactivitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
