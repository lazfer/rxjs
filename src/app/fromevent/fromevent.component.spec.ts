import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FromeventComponent } from './fromevent.component';

describe('FromeventComponent', () => {
  let component: FromeventComponent;
  let fixture: ComponentFixture<FromeventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FromeventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FromeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
