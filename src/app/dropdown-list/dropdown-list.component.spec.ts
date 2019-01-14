import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownListComponent } from './dropdown-list.component';
import {IdNamePair} from '../search-metadata/id-name-pair';

describe('DropdownListComponent', () => {
  let component: DropdownListComponent;
  let fixture: ComponentFixture<DropdownListComponent>;
  const TEST_DROPDOWN_ITEMS: IdNamePair[] = [
    new IdNamePair(1, 'Item 1'),
    new IdNamePair(2, 'Item 2'),
    new IdNamePair(3, 'Item 3')
  ];
  let nativeElement: HTMLElement;
  let dropdownList: HTMLElement;
  let dropdownButton: HTMLElement;
  let dropdownButtonText: HTMLElement;
  let dropdownListItems: HTMLCollection;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownListComponent);
    component = fixture.componentInstance;
    component.id = 1;
    component.dropdownItems = TEST_DROPDOWN_ITEMS;
    component.defaultSelected = 0;
    fixture.detectChanges();

    nativeElement = fixture.nativeElement;
    dropdownList = nativeElement.querySelector('.dropdown-list');
    dropdownButton = nativeElement.querySelector('.dropdown-button');
    dropdownButtonText = nativeElement.querySelector('.dropdown-button-text');
    dropdownListItems = dropdownList.children;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct default selected item', () => {
    for (let i = 0; i < TEST_DROPDOWN_ITEMS.length; i++) {
      component.defaultSelected = i;
      fixture.detectChanges();

      // @ts-ignore
      expect(component._selectedItem.id).toEqual(TEST_DROPDOWN_ITEMS[i].id);
      // @ts-ignore
      expect(component._selectedItem.name).toEqual(TEST_DROPDOWN_ITEMS[i].name);
    }
  });

  it('should show correct default selected item name', () => {
    for (let i = 0; i < TEST_DROPDOWN_ITEMS.length; i++) {
      component.defaultSelected = i;
      fixture.detectChanges();

      expect(dropdownButtonText.textContent).toEqual(TEST_DROPDOWN_ITEMS[i].name);
    }
  });

  it('should show all items in dropdown list', () => {
    expect(dropdownListItems.length).toEqual(TEST_DROPDOWN_ITEMS.length);
    for (let i = 0; i < TEST_DROPDOWN_ITEMS.length; i++) {
      expect(dropdownListItems[i].textContent).toEqual(TEST_DROPDOWN_ITEMS[i].name);
    }
  });

  it('should have dropdown list hidden by default', () => {
    expect(dropdownList.style.display).toEqual('none');
  });

  it('should have dropdown list shown if clicked', () => {
    dropdownButton.click();

    expect(dropdownList.style.display).toEqual('inline');
  });

  it('should hide dropdown list if clicked off', () => {
    dropdownButton.click();
    const container = <HTMLElement> document.getElementsByClassName('container').item(0);
    container.click();

    expect(dropdownList.style.display).toEqual('none');
  });

  it('should change to clicked dropdown list item', () => {
    for (let i = 0; i < TEST_DROPDOWN_ITEMS.length; i++) {
      dropdownButton.click();
      (<HTMLElement> dropdownListItems.item(i)).click();

      expect(dropdownButtonText.textContent).toEqual(TEST_DROPDOWN_ITEMS[i].name);
    }
  });

  it('should hide dropdown list when list item is clicked', () => {
    for (let i = 0; i < TEST_DROPDOWN_ITEMS.length; i++) {
      dropdownButton.click();
      (<HTMLElement> dropdownListItems.item(i)).click();

      expect(dropdownList.style.display).toEqual('none');
    }
  });
});
