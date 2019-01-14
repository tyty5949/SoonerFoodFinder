import {Component, NgModule, OnInit} from '@angular/core';
import {PostFreeTypeService} from '../services/post-free-type.service';
import {PostFreeType} from '../search-metadata/post-free-type';
import {PostTag} from '../search-metadata/post-tag';
import {PostTagService} from '../services/post-tag.service';
import {PostStatus} from '../search-metadata/post-status';
import {PostStatusService} from '../services/post-status.service';
import {PostTypeService} from '../services/post-type.service';
import {PostType} from '../search-metadata/post-type';
import {PostLocation} from '../search-metadata/post-location';
import {PostLocationService} from '../services/post-location.service';

@Component({
  selector: 'app-post-search-form',
  templateUrl: './post-search-form.component.html',
  styleUrls: ['./post-search-form.component.css']
})
export class PostSearchFormComponent implements OnInit {

  private _inputSearchText = '';
  protected _freeTypes: PostFreeType[];
  private _selectedFreeType: PostFreeType;
  protected _tags: PostTag[];
  private _selectedTags: PostTag[] = [];
  protected _statuses: PostStatus[];
  private _selectedStatus: PostStatus;
  protected _types: PostType[];
  private _selectedType: PostType;
  protected _locations: PostLocation[];
  private _selectedLocations: PostLocation[] = [];
  private _advancedOpen: boolean;

  constructor (
    private postFreeTypeService: PostFreeTypeService,
    private postTagService: PostTagService,
    private postStatusService: PostStatusService,
    private postTypeService: PostTypeService,
    private postLocationService: PostLocationService
  ) {}

  ngOnInit(): void {
    this.getPostFreeTypes();
    this.getPostTags();
    this.getPostStatuses();
    this.getPostTypes();
    this.getPostLocations();
    this._advancedOpen = false;
  }

  getPostFreeTypes(): void {
    this.postFreeTypeService.getPostFreeTypes().subscribe(postFreeTypes => this._freeTypes = postFreeTypes);
  }

  getPostTags(): void {
    this.postTagService.getPostTags().subscribe(postTags => this._tags = postTags);
  }

  getPostStatuses(): void {
    this.postStatusService.getPostStatuses().subscribe(postStatuses => this._statuses = postStatuses);
  }

  getPostTypes(): void {
    this.postTypeService.getPostTypes().subscribe(postTypes => this._types = postTypes);
  }

  getPostLocations(): void {
    this.postLocationService.getPostLocations().subscribe(postLocations => this._locations = postLocations);
  }

  onSearchBarKeyUp(): void {
    this._inputSearchText = (<HTMLInputElement> document.querySelector('.search input')).value;
    console.log(this._inputSearchText);
  }

  selectedFreeTypeChange(event): void {
    this._selectedFreeType = event;
  }

  selectedTagsChange(event): void {
    this._selectedTags = event;
  }

  selectedStatusChange(event): void {
    this._selectedStatus = event;
  }

  selectedTypeChange(event): void {
    this._selectedType = event;
  }

  selectedLocationsChange(event): void {
    this._selectedLocations = event;
  }

  onAdvancedSearchButtonClick(): void {
    if (this._advancedOpen) {
      this.closeAdvancedSearch();
    } else {
      this.openAdvancedSearch();
    }
  }

  private openAdvancedSearch(): void {
    this.flipAdvancedArrowUp();
    this.setAdvancedText('Basic Search');
    this.setAdvancedSearchTermsDisplay('inline');
    this._advancedOpen = true;
  }

  private closeAdvancedSearch(): void {
    this.flipAdvancedArrowDown();
    this.setAdvancedText('Advanced Search');
    this.setAdvancedSearchTermsDisplay('none');
    this._advancedOpen = false;
  }

  private flipAdvancedArrowUp(): void {
    document.getElementById('advanced-arrow').style.transform = 'scale(.6) translateY(.2em) rotate(180deg)';
  }

  private flipAdvancedArrowDown(): void {
    document.getElementById('advanced-arrow').style.transform = 'scale(.6) translateY(.25em)';
  }

  private setAdvancedText(text: string): void {
    document.getElementById('advanced-search-text').innerText = text;
  }

  private setAdvancedSearchTermsDisplay(visibility: string): void {
    document.getElementById('advanced-search-terms').style.display = visibility;
  }
}
