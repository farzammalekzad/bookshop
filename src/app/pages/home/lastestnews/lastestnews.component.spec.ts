import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastestnewsComponent } from './lastestnews.component';

describe('LastestnewsComponent', () => {
  let component: LastestnewsComponent;
  let fixture: ComponentFixture<LastestnewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastestnewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastestnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
