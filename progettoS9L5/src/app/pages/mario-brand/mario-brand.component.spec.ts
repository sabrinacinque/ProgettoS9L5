import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarioBrandComponent } from './mario-brand.component';

describe('MarioBrandComponent', () => {
  let component: MarioBrandComponent;
  let fixture: ComponentFixture<MarioBrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MarioBrandComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MarioBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
