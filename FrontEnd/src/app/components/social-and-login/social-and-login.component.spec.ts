import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialAndLoginComponent } from './social-and-login.component';

describe('SocialAndLoginComponent', () => {
  let component: SocialAndLoginComponent;
  let fixture: ComponentFixture<SocialAndLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialAndLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialAndLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
