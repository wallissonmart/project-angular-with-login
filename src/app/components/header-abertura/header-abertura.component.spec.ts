import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAberturaComponent } from './header-abertura.component';

describe('HeaderAberturaComponent', () => {
  let component: HeaderAberturaComponent;
  let fixture: ComponentFixture<HeaderAberturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderAberturaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderAberturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
