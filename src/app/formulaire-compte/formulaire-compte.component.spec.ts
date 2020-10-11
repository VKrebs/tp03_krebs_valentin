import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireCompteComponent } from './formulaire-compte.component';

describe('FormulaireCompteComponent', () => {
  let component: FormulaireCompteComponent;
  let fixture: ComponentFixture<FormulaireCompteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireCompteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
