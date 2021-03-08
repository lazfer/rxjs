import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuffertimeComponent } from './buffertime.component';

describe('BuffertimeComponent', () => {
  let component: BuffertimeComponent;
  let fixture: ComponentFixture<BuffertimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuffertimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuffertimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
