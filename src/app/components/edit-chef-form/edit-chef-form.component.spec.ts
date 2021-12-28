import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditChefFormComponent } from './edit-chef-form.component';

describe('EditChefFormComponent', () => {
  let component: EditChefFormComponent;
  let fixture: ComponentFixture<EditChefFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditChefFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditChefFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
