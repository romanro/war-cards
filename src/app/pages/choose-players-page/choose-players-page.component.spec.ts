import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosePlayersPageComponent } from './choose-players-page.component';

describe('ChoosePlayersPageComponent', () => {
  let component: ChoosePlayersPageComponent;
  let fixture: ComponentFixture<ChoosePlayersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoosePlayersPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoosePlayersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
