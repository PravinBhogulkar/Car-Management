import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatecardataComponent } from './createcardata.component';

describe('CreatecardataComponent', () => {
  let component: CreatecardataComponent;
  let fixture: ComponentFixture<CreatecardataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatecardataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatecardataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
