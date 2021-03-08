import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltermapComponent } from './filtermap.component';

describe('FiltermapComponent', () => {
  let component: FiltermapComponent;
  let fixture: ComponentFixture<FiltermapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltermapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltermapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
