import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewByTypeComponent } from './view-by-type.component';

describe('ViewByTypeComponent', () => {
  let component: ViewByTypeComponent;
  let fixture: ComponentFixture<ViewByTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewByTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewByTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
