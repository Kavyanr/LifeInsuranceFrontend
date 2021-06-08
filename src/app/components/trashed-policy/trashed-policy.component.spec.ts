import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrashedPolicyComponent } from './trashed-policy.component';

describe('TrashedPolicyComponent', () => {
  let component: TrashedPolicyComponent;
  let fixture: ComponentFixture<TrashedPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrashedPolicyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrashedPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
