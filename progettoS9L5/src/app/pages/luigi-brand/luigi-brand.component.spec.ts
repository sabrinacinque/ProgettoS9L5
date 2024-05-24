import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuigiBrandComponent } from './luigi-brand.component';

describe('LuigiBrandComponent', () => {
  let component: LuigiBrandComponent;
  let fixture: ComponentFixture<LuigiBrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LuigiBrandComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LuigiBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
