import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {PostSearchFormComponent} from './post-search-form/post-search-form.component';
import {DropdownListComponent} from './dropdown-list/dropdown-list.component';
import {SelectionBarComponent} from './selection-bar/selection-bar.component';
import {MatDatepickerModule, MatNativeDateModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PostCardContainerComponent} from './post-card-container/post-card-container.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PostSearchFormComponent,
        DropdownListComponent,
        SelectionBarComponent,
        PostCardContainerComponent
      ],
      imports: [
        MatDatepickerModule,
        MatNativeDateModule,
        BrowserAnimationsModule
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
