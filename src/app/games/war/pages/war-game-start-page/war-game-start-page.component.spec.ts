import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarGameStartPageComponent } from './war-game-start-page.component';

describe('WarGameStartPageComponent', () => {
  let component: WarGameStartPageComponent;
  let fixture: ComponentFixture<WarGameStartPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarGameStartPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarGameStartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
