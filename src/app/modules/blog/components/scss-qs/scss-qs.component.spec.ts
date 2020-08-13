import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScssQSComponent } from './scss-qs.component';

describe('ScssQSComponent', () => {
  let component: ScssQSComponent;
  let fixture: ComponentFixture<ScssQSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScssQSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScssQSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
