import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BelowCarouselComponent } from './below-carousel.component';

describe('BelowCarouselComponent', () => {
  let component: BelowCarouselComponent;
  let fixture: ComponentFixture<BelowCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BelowCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BelowCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
