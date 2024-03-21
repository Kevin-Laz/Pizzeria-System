import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorariorComponent } from './horarior.component';

describe('HorariorComponent', () => {
  let component: HorariorComponent;
  let fixture: ComponentFixture<HorariorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HorariorComponent]
    });
    fixture = TestBed.createComponent(HorariorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
