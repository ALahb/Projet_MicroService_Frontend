import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudinatsComponent } from './etudinats.component';

describe('EtudinatsComponent', () => {
  let component: EtudinatsComponent;
  let fixture: ComponentFixture<EtudinatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtudinatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EtudinatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
