import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialAudioButtonsComponent } from './special-audio-buttons.component';

describe('SpecialAudioButtonsComponent', () => {
  let component: SpecialAudioButtonsComponent;
  let fixture: ComponentFixture<SpecialAudioButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialAudioButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialAudioButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
