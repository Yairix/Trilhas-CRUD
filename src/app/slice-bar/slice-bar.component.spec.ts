import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliceBarComponent } from './slice-bar.component';

describe('SliceBarComponent', () => {
  let component: SliceBarComponent;
  let fixture: ComponentFixture<SliceBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliceBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliceBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
