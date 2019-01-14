import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostSearchFormComponent } from './post-search-form.component';
import {DropdownListComponent} from '../dropdown-list/dropdown-list.component';
import {SelectionBarComponent} from '../selection-bar/selection-bar.component';
import {MatDatepickerModule, MatNativeDateModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('PostSearchFormComponent', () => {
  let component: PostSearchFormComponent;
  let fixture: ComponentFixture<PostSearchFormComponent>;
  let nativeElement: HTMLElement;
  let advancedSearchTerms: HTMLElement;
  let advancedButton: HTMLElement;
  let advancedArrow: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PostSearchFormComponent,
        DropdownListComponent,
        SelectionBarComponent
      ],
      imports: [
        MatDatepickerModule,
        MatNativeDateModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    spyOn(component, 'getPostFreeTypes');
    spyOn(component, 'getPostTags');
    spyOn(component, 'getPostStatuses');

    nativeElement = fixture.nativeElement;
    advancedSearchTerms = nativeElement.querySelector('#advanced-search-terms');
    advancedButton = nativeElement.querySelector('#advanced-button');
    advancedArrow = nativeElement.querySelector('#advanced-button img');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should hide advanced search by default', () => {
    expect(advancedSearchTerms.style.display).toEqual('none');
  });

  it('should show advanced search when advanced button is clicked', () => {
    advancedButton.click();

    expect(advancedSearchTerms.style.display).toEqual('inline');
  });

  it('should close advanced search when advanced button is clicked after advanced search is open', () => {
    advancedButton.click();
    advancedButton.click();

    expect(advancedSearchTerms.style.display).toEqual('none');
  });

  it('should display \'Advanced Search\' by default', () => {
    expect(advancedButton.innerText).toEqual('Advanced Search');
  });

  it('should display \'Basic Search\' after advanced button is clicked', () => {
    advancedButton.click();

    expect(advancedButton.innerText).toEqual('Basic Search');
  });

  it('should display \'Advanced Search\' after advanced button is clicked after being clicked', () => {
    advancedButton.click();
    advancedButton.click();

    expect(advancedButton.innerText).toEqual('Advanced Search');
  });

  it('should display arrow pointing down by default', () => {
    expect(advancedArrow.style.transform).not.toContain('rotate(180deg)');
  });

  it('should display arrow pointing up after advanced button is clicked', () => {
    advancedButton.click();

    expect(advancedArrow.style.transform).toContain('rotate(180deg)');
  });

  it('should display arrow pointing up after advanced button is clicked after being clicked', () => {
    advancedButton.click();
    advancedButton.click();

    expect(advancedArrow.style.transform).not.toContain('rotate(180deg)');
  });

  it('should call getPostFreeTypes at start', () => {
    component.ngOnInit();

    expect(component.getPostFreeTypes).toHaveBeenCalled();
  });

  it('should call getPostTags at start', () => {
    component.ngOnInit();

    expect(component.getPostTags).toHaveBeenCalled();
  });

  it('should call getPostStatuses at start', () => {
    component.ngOnInit();

    expect(component.getPostStatuses).toHaveBeenCalled();
  });
});
