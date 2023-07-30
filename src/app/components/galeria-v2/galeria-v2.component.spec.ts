import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriaV2Component } from './galeria-v2.component';

describe('GaleriaV2Component', () => {
  let component: GaleriaV2Component;
  let fixture: ComponentFixture<GaleriaV2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GaleriaV2Component]
    });
    fixture = TestBed.createComponent(GaleriaV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
