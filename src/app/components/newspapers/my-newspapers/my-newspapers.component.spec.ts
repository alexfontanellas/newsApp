import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNewspapersComponent } from './my-newspapers.component';

describe('MyNewspapersComponent', () => {
  let component: MyNewspapersComponent;
  let fixture: ComponentFixture<MyNewspapersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyNewspapersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyNewspapersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
