import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecieReadComponent } from './specie-read.component';

describe('SpecieReadComponent', () => {
  let component: SpecieReadComponent;
  let fixture: ComponentFixture<SpecieReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecieReadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecieReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
