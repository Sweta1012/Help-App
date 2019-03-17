import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeHelpComponent } from './be-help.component';

describe('BeHelpComponent', () => {
  let component: BeHelpComponent;
  let fixture: ComponentFixture<BeHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeHelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
