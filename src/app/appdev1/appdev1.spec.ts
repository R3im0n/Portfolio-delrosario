import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Appdev1 } from './appdev1';

describe('Appdev1', () => {
  let component: Appdev1;
  let fixture: ComponentFixture<Appdev1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Appdev1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Appdev1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
