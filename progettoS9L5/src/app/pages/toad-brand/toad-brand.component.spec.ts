import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToadBrandComponent } from './toad-brand.component';

describe('ToadBrandComponent', () => {
  let component: ToadBrandComponent;
  let fixture: ComponentFixture<ToadBrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToadBrandComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToadBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
