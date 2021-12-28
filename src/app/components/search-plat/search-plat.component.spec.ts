import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPlatComponent } from './search-plat.component';

describe('SearchPlatComponent', () => {
  let component: SearchPlatComponent;
  let fixture: ComponentFixture<SearchPlatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPlatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
