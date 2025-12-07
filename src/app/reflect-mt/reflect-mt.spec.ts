import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReflectMt } from './reflect-mt';

describe('ReflectMt', () => {
  let component: ReflectMt;
  let fixture: ComponentFixture<ReflectMt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReflectMt]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReflectMt);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
