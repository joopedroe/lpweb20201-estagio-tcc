import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePerfilComponent } from './update-perfil.component';

describe('UpdatePerfilComponent', () => {
  let component: UpdatePerfilComponent;
  let fixture: ComponentFixture<UpdatePerfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePerfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
