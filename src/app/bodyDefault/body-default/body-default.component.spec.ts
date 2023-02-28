import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyDefaultComponent } from './body-default.component';

describe('BodyDefaultComponent', () => {
  let component: BodyDefaultComponent;
  let fixture: ComponentFixture<BodyDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyDefaultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
