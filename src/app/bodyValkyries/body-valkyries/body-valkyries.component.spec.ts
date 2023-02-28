import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyValkyriesComponent } from './body-valkyries.component';

describe('BodyValkyriesComponent', () => {
  let component: BodyValkyriesComponent;
  let fixture: ComponentFixture<BodyValkyriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyValkyriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyValkyriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
