import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefInfoComponent } from './chef-info.component';

describe('ChefInfoComponent', () => {
  let component: ChefInfoComponent;
  let fixture: ComponentFixture<ChefInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChefInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
