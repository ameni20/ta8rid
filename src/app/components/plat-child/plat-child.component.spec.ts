import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatChildComponent } from './plat-child.component';

describe('PlatChildComponent', () => {
  let component: PlatChildComponent;
  let fixture: ComponentFixture<PlatChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
