import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefsListComponent } from './chefs-list.component';

describe('ChefsListComponent', () => {
  let component: ChefsListComponent;
  let fixture: ComponentFixture<ChefsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChefsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
