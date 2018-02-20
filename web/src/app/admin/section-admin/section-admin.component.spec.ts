import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionAdminComponent } from './section-admin.component';

describe('SectionAdminComponent', () => {
  let component: SectionAdminComponent;
  let fixture: ComponentFixture<SectionAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
