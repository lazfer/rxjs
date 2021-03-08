import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakecontacComponent } from './takecontac.component';

describe('TakecontacComponent', () => {
  let component: TakecontacComponent;
  let fixture: ComponentFixture<TakecontacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakecontacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakecontacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
