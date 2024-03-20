import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilecontactComponent } from './mobilecontact.component';

describe('MobilecontactComponent', () => {
  let component: MobilecontactComponent;
  let fixture: ComponentFixture<MobilecontactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobilecontactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MobilecontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
