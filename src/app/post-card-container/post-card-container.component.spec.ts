import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCardContainerComponent } from './post-card-container.component';
import {MOCK_POSTS_ACTIVE} from '../mocks/mock-posts';
import {PostCardComponent} from '../post-card/post-card.component';

describe('PostCardContainerComponent', () => {
  let component: PostCardContainerComponent;
  let fixture: ComponentFixture<PostCardContainerComponent>;
  let nativeElement: HTMLElement;
  let cardGrid: NodeListOf<Element>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PostCardContainerComponent,
        PostCardComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    nativeElement = fixture.nativeElement;
    cardGrid = nativeElement.getElementsByClassName('post-card');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show all active cards by default', () => {
    expect(cardGrid.length).toEqual(MOCK_POSTS_ACTIVE.length);
  });
});
