import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerTodosMDidaticoComponent } from './ver-todos-m-didatico.component';

describe('VerTodosMDidaticoComponent', () => {
  let component: VerTodosMDidaticoComponent;
  let fixture: ComponentFixture<VerTodosMDidaticoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VerTodosMDidaticoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VerTodosMDidaticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
