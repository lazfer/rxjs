import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareobsComponent } from './shareobs.component';

describe('ShareobsComponent', () => {
  let component: ShareobsComponent;
  let fixture: ComponentFixture<ShareobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
