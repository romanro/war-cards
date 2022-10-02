import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerPlayerComponent } from './computer-player.component';

describe('ComputerPlayerComponent', () => {
  let component: ComputerPlayerComponent;
  let fixture: ComponentFixture<ComputerPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComputerPlayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputerPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
