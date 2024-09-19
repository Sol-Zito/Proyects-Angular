import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormcalComponent } from './formcal.component';

describe('FormcalComponent', () => {
  let component: FormcalComponent;
  let fixture: ComponentFixture<FormcalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormcalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormcalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
