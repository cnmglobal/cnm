import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeWorkWithUsComponent } from './home-work-with-us.component';

describe('HomeWorkWithUsComponent', () => {
  let component: HomeWorkWithUsComponent;
  let fixture: ComponentFixture<HomeWorkWithUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeWorkWithUsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeWorkWithUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
