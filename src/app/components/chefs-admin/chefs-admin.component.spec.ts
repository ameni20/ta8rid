import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefsAdminComponent } from './chefs-admin.component';

describe('ChefsAdminComponent', () => {
  let component: ChefsAdminComponent;
  let fixture: ComponentFixture<ChefsAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChefsAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
