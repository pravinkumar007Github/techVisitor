import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingbatchComponent } from './upcomingbatch.component';

describe('UpcomingbatchComponent', () => {
  let component: UpcomingbatchComponent;
  let fixture: ComponentFixture<UpcomingbatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcomingbatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingbatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
