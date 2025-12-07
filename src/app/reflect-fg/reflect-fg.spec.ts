import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReflectFg } from './reflect-fg';

describe('ReflectFg', () => {
  let component: ReflectFg;
  let fixture: ComponentFixture<ReflectFg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReflectFg]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReflectFg);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
