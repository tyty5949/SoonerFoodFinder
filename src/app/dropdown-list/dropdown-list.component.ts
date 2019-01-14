import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IdNamePair} from '../search-metadata/id-name-pair';

@Component({
  selector: 'app-dropdown-list',
  templateUrl: './dropdown-list.component.html',
  styleUrls: ['./dropdown-list.component.css']
})
export class DropdownListComponent implements OnInit {

  protected _id: number;
  protected _dropdownItems: IdNamePair[];
  protected _selectedItem: IdNamePair;
  @Output() selectedItemEmitter: EventEmitter<IdNamePair> = new EventEmitter();

  @Input() set dropdownItems(value: IdNamePair[]) {
    this._dropdownItems = value;
  }

  @Input() set id(id: number) {
    this._id = id;
  }

  @Input() set defaultSelected(index: number) {
    this._selectedItem = this._dropdownItems[index];
  }

  ngOnInit() {
    window.addEventListener('click', (event) => {
      const target = <Element>event.target;

      if (target.classList.contains('dropdown-button-' + this._id)) {
        this.onClick();
      } else {
        this.onFocusOut();
      }
    });
  }

  private onClick(): void {
    this.showList();
  }

  private onFocusOut(): void {
    this.hideList();
  }

  onListItemClick(e: Event): void {
    const clickedId = Number(e.srcElement.id);
    this._selectedItem = this._dropdownItems.find(item => item.id === clickedId);
    this.updateSelectedItem();
    this.hideList();
  }

  hideList(): void {
    this.setListDisplay('none');
  }

  showList(): void {
    this.setListDisplay('inline');
  }

  private setListDisplay(display: string) {
    document.getElementById('dropdown-list-' + this._id).style.display = display;
  }

  updateSelectedItem(): void {
    const element = document.getElementById('dropdown-button-' + this._id);
    element.children.item(0).innerHTML = this._selectedItem.name;
    this.selectedItemEmitter.emit(this._selectedItem);
  }
}
