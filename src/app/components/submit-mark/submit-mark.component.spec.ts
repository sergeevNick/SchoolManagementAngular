import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitMarkComponent } from './submit-mark.component';

describe('SubmitMarkComponent', () => {
  let component: SubmitMarkComponent;
  let fixture: ComponentFixture<SubmitMarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitMarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitMarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
