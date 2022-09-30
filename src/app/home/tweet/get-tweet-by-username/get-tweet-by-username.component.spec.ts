import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTweetByUsernameComponent } from './get-tweet-by-username.component';

describe('GetTweetByUsernameComponent', () => {
  let component: GetTweetByUsernameComponent;
  let fixture: ComponentFixture<GetTweetByUsernameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetTweetByUsernameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetTweetByUsernameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
