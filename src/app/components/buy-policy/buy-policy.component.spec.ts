import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyPolicyComponent } from './buy-policy.component';

describe('BuyPolicyComponent', () => {
  let component: BuyPolicyComponent;
  let fixture: ComponentFixture<BuyPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyPolicyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
