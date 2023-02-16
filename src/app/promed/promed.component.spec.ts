import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromedComponent } from './promed.component';

describe('PromedComponent', () => {
  let component: PromedComponent;
  let fixture: ComponentFixture<PromedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
