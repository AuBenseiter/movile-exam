import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ForgotCredentialsPage } from './forgot-credentials.page';

describe('ForgotCredentialsPage', () => {
  let component: ForgotCredentialsPage;
  let fixture: ComponentFixture<ForgotCredentialsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ForgotCredentialsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
