import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriaV1Component } from './galeria-v1.component';

describe('GaleriaV1Component', () => {
  let component: GaleriaV1Component;
  let fixture: ComponentFixture<GaleriaV1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GaleriaV1Component]
    });
    fixture = TestBed.createComponent(GaleriaV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
