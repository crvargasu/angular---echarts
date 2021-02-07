import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetropolitanaComponent } from './metropolitana.component';

describe('MetropolitanaComponent', () => {
  let component: MetropolitanaComponent;
  let fixture: ComponentFixture<MetropolitanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetropolitanaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetropolitanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
