import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReflectFinal } from './reflect-final';

describe('ReflectFinal', () => {
  let component: ReflectFinal;
  let fixture: ComponentFixture<ReflectFinal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReflectFinal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReflectFinal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
