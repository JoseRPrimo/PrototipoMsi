import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SktComponent } from './skt.component';

describe('SktComponent', () => {
  let component: SktComponent;
  let fixture: ComponentFixture<SktComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SktComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SktComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
