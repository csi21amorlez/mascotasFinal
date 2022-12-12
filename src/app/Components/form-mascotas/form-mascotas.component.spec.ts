import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMascotasComponent } from './form-mascotas.component';

describe('FormMascotasComponent', () => {
  let component: FormMascotasComponent;
  let fixture: ComponentFixture<FormMascotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormMascotasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormMascotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
