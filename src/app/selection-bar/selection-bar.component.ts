import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IdNamePair} from '../search-metadata/id-name-pair';

@Component({
  selector: 'app-selection-bar',
  templateUrl: './selection-bar.component.html',
  styleUrls: ['./selection-bar.component.css']
})
export class SelectionBarComponent implements OnInit {

  protected _id: number;
  protected _items: IdNamePair[];
  protected _displayList: IdNamePair[];
  protected _selectedItems: IdNamePair[] = [];
  private _inputText = '';
  @Output() selectedItemsEmitter: EventEmitter<IdNamePair[]> = new EventEmitter();

  @Input()
  set id(id: number) {
    this._id = id;
  }

  @Input()
  set items(items: IdNamePair[]) {
    this._items = items;
  }

  ngOnInit() {
    this.resetDisplayList();

    window.addEventListener('click', (event) => {
      const target = <Element>event.target;

      if (target.id === ('add-button-' + this._id)) {
        this.onAddClick();
      } else {
        this.onAddFocusOut();
      }
    });
  }

  protected onAddClick(): void {
    this.resetDisplayList();
    this.showList();
  }

  protected onAddFocusOut(): void {
    this.hideList();
  }

  protected onListItemClick(event: Event): void {
    const clickedItem = this.getClickedItem(event);
    this.addItemToSelected(clickedItem);
    this.hideList();
  }

  protected onSelectedItemRemove(event: Event): void {
    const clickedItem = this.getClickedItem(event);
    this.removeItemFromSelected(clickedItem);
    if (this._inputText.length > 0) {
      this.filterDisplayList(this._inputText);
    }
  }

  protected onInputKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Backspace') {
      this.processInputBackspace();
    } else if (event.key === 'Enter') {
      this.processInputEnter();
    } else {
      this.processInputKeyDown(event.key);
    }
  }

  private getClickedItem(event: Event) {
    const clickedId = Number(event.srcElement.id);
    return this._items.find(item => item.id === clickedId);
  }

  private addItemToSelected(item: IdNamePair) {
    this._selectedItems.push(item);
    this.selectedItemsEmitter.emit(this._selectedItems);
    this.resetDisplayList();
    this.clearInputText();
  }

  private removeItemFromSelected(item: IdNamePair) {
    this._selectedItems.splice(this._selectedItems.indexOf(item), 1);
    this.selectedItemsEmitter.emit(this._selectedItems);
    this.resetDisplayList();
  }

  private showList(): void {
    if (this._displayList.length > 0) {
      this.setListDisplay('inline');
    }
  }

  private hideList(): void {
    this.setListDisplay('none');
  }

  private setListDisplay(display: string) {
    document.getElementById('dropdown-list-' + this._id).style.display = display;
  }

  private processInputBackspace() {
    if (this._inputText.length > 0) {
      this._inputText = this._inputText.substr(0, this._inputText.length - 1);
    }

    this.resetDisplayList();

    if (this._inputText.length === 0) {
      this.hideList();
    } else {
      this.filterDisplayList(this._inputText);
    }
  }

  private processInputEnter() {
    if (this._displayList.length > 0) {
      this.addItemToSelected(this._displayList[0]);
      this.hideList();
    }
  }

  private processInputKeyDown(key: string) {
    this._inputText += key;
    this.filterDisplayList(this._inputText);
    this.showList();
  }

  private clearInputText(): void {
    this._inputText = '';
    const element = (<HTMLInputElement>document.getElementById('input-' + this._id));
    element.value = '';
  }

  private resetDisplayList(): void {
    this._displayList = this._items.slice(0);
    this.removeSelectedFromDisplayList();
    this.sortDisplayList();
  }

  private sortDisplayList(): void {
    this._displayList.sort((o1, o2) => o1.name.localeCompare(o2.name));
  }

  private removeItemFromDisplayList(item: IdNamePair) {
    const indexInDisplayList = this._displayList.indexOf(item);
    this.removeIndexFromDisplayList(indexInDisplayList);
  }

  private removeIndexFromDisplayList(index: number) {
    this._displayList.splice(index, 1);
  }

  private filterDisplayList(filter: string) {
    const originalDisplayList = this._displayList.slice(0);
    const filterLowercase = filter.toLowerCase();
    for (const item of originalDisplayList) {
      const itemNameLowercase = item.name.toLowerCase();
      if (!itemNameLowercase.startsWith(filterLowercase)) {
        this.removeItemFromDisplayList(item);
      }
    }
  }

  private removeSelectedFromDisplayList() {
    const originalDisplayList = this._displayList.slice(0);
    for (const item of originalDisplayList) {
      if (this._selectedItems.indexOf(item) > -1) {
        this.removeItemFromDisplayList(item);
      }
    }
  }
}
