import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashwolvesComponent } from './flashwolves.component';

describe('FlashwolvesComponent', () => {
  let component: FlashwolvesComponent;
  let fixture: ComponentFixture<FlashwolvesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlashwolvesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashwolvesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
