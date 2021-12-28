import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatsAdminComponent } from './plats-admin.component';

describe('PlatsAdminComponent', () => {
  let component: PlatsAdminComponent;
  let fixture: ComponentFixture<PlatsAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatsAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
