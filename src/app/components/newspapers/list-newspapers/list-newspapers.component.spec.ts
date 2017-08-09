import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNewspapersComponent } from './list-newspapers.component';

describe('ListNewspapersComponent', () => {
  let component: ListNewspapersComponent;
  let fixture: ComponentFixture<ListNewspapersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListNewspapersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNewspapersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
