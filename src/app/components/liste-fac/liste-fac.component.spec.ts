import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeFacComponent } from './liste-fac.component';

describe('ListeFacComponent', () => {
  let component: ListeFacComponent;
  let fixture: ComponentFixture<ListeFacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeFacComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeFacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
