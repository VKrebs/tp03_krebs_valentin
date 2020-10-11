import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecapitulatifCompteComponent } from './recapitulatif-compte.component';

describe('RecapitulatifCompteComponent', () => {
  let component: RecapitulatifCompteComponent;
  let fixture: ComponentFixture<RecapitulatifCompteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecapitulatifCompteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecapitulatifCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
