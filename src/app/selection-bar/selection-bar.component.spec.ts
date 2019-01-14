import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionBarComponent } from './selection-bar.component';
import {IdNamePair} from '../search-metadata/id-name-pair';

describe('SelectionBarComponent', () => {
  let component: SelectionBarComponent;
  let fixture: ComponentFixture<SelectionBarComponent>;
  const TEST_ITEMS: IdNamePair[] = [
    new IdNamePair(1, 'Test'),
    new IdNamePair(2, 'Item 1'),
    new IdNamePair(3, 'Item 3'),
    new IdNamePair(4, 'Item 2')
  ];
  const TEST_ITEMS_SORTED: IdNamePair[] = [
    new IdNamePair(2, 'Item 1'),
    new IdNamePair(4, 'Item 2'),
    new IdNamePair(3, 'Item 3'),
    new IdNamePair(1, 'Test')
  ];
  let nativeElement: HTMLElement;
  let addButton: HTMLElement;
  let dropdownList: HTMLElement;
  let dropdownListItems: HTMLCollection;
  let input: HTMLInputElement;
  let selectedItems: NodeListOf<Element>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectionBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionBarComponent);
    component = fixture.componentInstance;
    component.id = 1;
    component.items = TEST_ITEMS;
    fixture.detectChanges();

    nativeElement = fixture.nativeElement;
    addButton = nativeElement.querySelector('.add-button');
    dropdownList = nativeElement.querySelector('.dropdown-list');
    dropdownListItems = dropdownList.children;
    input = nativeElement.querySelector('input');
    selectedItems = nativeElement.getElementsByClassName('selected-item');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not show dropdown list by default', () => {
    expect(dropdownList.style.display).toEqual('none');
  });

  it('should show dropdown list when add button is clicked', () => {
    addButton.click();

    expect(dropdownList.style.display).toEqual('inline');
  });

  it('should show all dropdown items sorted when none are selected', () => {
    expect(dropdownListItems.length).toEqual(TEST_ITEMS.length);

    for (let i = 0; i < TEST_ITEMS.length; i++) {
      expect(dropdownListItems.item(i).textContent).toEqual(TEST_ITEMS_SORTED[i].name);
    }
  });

  it('should hide dropdown list if clicked off', () => {
    addButton.click();
    const container = <HTMLElement> document.getElementsByClassName('container').item(0);
    container.click();

    expect(dropdownList.style.display).toEqual('none');
  });

  it('should hide dropdown list when item is selected', () => {
    addButton.click();
    (<HTMLElement> dropdownListItems.item(0)).click();

    expect(dropdownList.style.display).toEqual('none');
  });

  it('should show dropdown list when a key is typed in the bar', () => {
    input.dispatchEvent(new KeyboardEvent('keydown', {'key': 'i'}));
    fixture.detectChanges();

    expect(dropdownList.style.display).toEqual('inline');
  });

  it('should hide dropdown list when no text is in the bar', () => {
    input.dispatchEvent(new KeyboardEvent('keydown', {'key': 'i'}));
    input.dispatchEvent(new KeyboardEvent('keydown', {'key': 'Backspace'}));
    fixture.detectChanges();

    expect(dropdownList.style.display).toEqual('none');
  });

  it('should only show items whos names start with the entered text', () => {
    const expected: IdNamePair[] = [
      new IdNamePair(2, 'Item 1'),
      new IdNamePair(4, 'Item 2'),
      new IdNamePair(3, 'Item 3')
    ];

    input.dispatchEvent(new KeyboardEvent('keydown', {'key': 'i'}));
    fixture.detectChanges();

    expect(dropdownListItems.length).toEqual(expected.length);
    for (let i = 0; i < expected.length; i++) {
      expect(dropdownListItems.item(i).textContent).toEqual(expected[i].name);
    }
  });

  it('should show all items when text is entered then removed', () => {
    input.dispatchEvent(new KeyboardEvent('keydown', {'key': 'i'}));
    fixture.detectChanges();
    input.dispatchEvent(new KeyboardEvent('keydown', {'key': 'Backspace'}));
    fixture.detectChanges();

    expect(dropdownListItems.length).toEqual(TEST_ITEMS_SORTED.length);
    for (let i = 0; i < TEST_ITEMS_SORTED.length; i++) {
      expect(dropdownListItems.item(i).textContent).toEqual(TEST_ITEMS_SORTED[i].name);
    }
  });

  it ('should show item as selected when it is clicked in the dropdown list', () => {
    const expected: IdNamePair[] = [];
    for (let i = 0; i < TEST_ITEMS.length; i++) {
      expected.push(TEST_ITEMS_SORTED[i]);

      addButton.click();
      (<HTMLElement> dropdownListItems.item(0)).click();
      fixture.detectChanges();

      expect(selectedItems.length).toEqual(expected.length);
      for (let j = 0; j < expected.length; j++) {
        const h2 = selectedItems.item(j).getElementsByTagName('h2').item(0);
        expect(h2.textContent).toEqual(expected[j].name);
      }
    }
  });

  it('should not show item in dropdown menu when it is selected', () => {
    const expected: IdNamePair[] = TEST_ITEMS_SORTED.slice(0);

    for (let i = 0; i < TEST_ITEMS.length; i++) {
      expected.splice(0, 1);

      addButton.click();
      (<HTMLElement> dropdownListItems.item(0)).click();
      fixture.detectChanges();

      expect(dropdownListItems.length).toEqual(expected.length);
      for (let j = 0; j < expected.length; j++) {
        expect(dropdownListItems.item(j).textContent).toEqual(expected[j].name);
      }
    }
  });

  it('should remove item from selected when its close button is clicked', () => {
    addButton.click();
    (<HTMLElement> dropdownListItems.item(0)).click();
    fixture.detectChanges();

    (<HTMLElement> selectedItems.item(0).querySelector('button')).click();
    fixture.detectChanges();

    expect(selectedItems.length).toEqual(0);
  });

  it('should show an item which has been deselected in the dropdown list', () => {
    addButton.click();
    (<HTMLElement> dropdownListItems.item(0)).click();
    fixture.detectChanges();
    (<HTMLElement> selectedItems.item(0).querySelector('button')).click();
    fixture.detectChanges();

    expect(dropdownListItems.length).toEqual(TEST_ITEMS.length);
    for (let i = 0; i < TEST_ITEMS_SORTED.length; i++) {
      expect(dropdownListItems.item(i).textContent).toEqual(TEST_ITEMS_SORTED[i].name);
    }
  });

  it('should select top dropdown list item when typing and enter is pressed', () => {
    input.dispatchEvent(new KeyboardEvent('keydown', {'key': 'i'}));
    input.dispatchEvent(new KeyboardEvent('keydown', {'key': 'Enter'}));
    fixture.detectChanges();

    expect(selectedItems.length).toEqual(1);
    const h2 = selectedItems.item(0).querySelector('h2');
    expect(h2.textContent).toEqual(TEST_ITEMS_SORTED[0].name);
  });

  it('should clear typed text when an item from the dropdown list is selected', () => {
    input.dispatchEvent(new KeyboardEvent('keydown', {'key': 'i'}));
    addButton.click();
    (<HTMLElement> dropdownListItems.item(0)).click();
    fixture.detectChanges();

    // @ts-ignore
    expect(component._inputText).toEqual('');
    expect(input.textContent).toEqual('');
  });

  it('should remove last character when backspace is pressed', () => {
    input.dispatchEvent(new KeyboardEvent('keydown', {'key': 'i'}));
    input.dispatchEvent(new KeyboardEvent('keydown', {'key': 't'}));
    input.dispatchEvent(new KeyboardEvent('keydown', {'key': 'Backspace'}));
    fixture.detectChanges();

    // @ts-ignore
    expect(component._inputText).toEqual('i');
  });

  it('should keep dropdown list filtered when text is inputted and a selected item is deselected', () => {
    const expected: IdNamePair[] = [
      new IdNamePair(2, 'Item 1'),
      new IdNamePair(4, 'Item 2'),
      new IdNamePair(3, 'Item 3')
    ];

    addButton.click();
    (<HTMLElement> dropdownListItems.item(0)).click();
    fixture.detectChanges();
    input.dispatchEvent(new KeyboardEvent('keydown', {'key': 'i'}));
    (<HTMLElement> selectedItems.item(0).querySelector('button')).click();
    fixture.detectChanges();

    expect(dropdownListItems.length).toEqual(expected.length);
    for (let i = 0; i < expected.length; i++) {
      expect(dropdownListItems.item(i).textContent).toEqual(expected[i].name);
    }
  });
});
