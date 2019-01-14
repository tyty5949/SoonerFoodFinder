import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule, MatNativeDateModule } from '@angular/material';

import { AppComponent } from './app.component';
import { PostSearchFormComponent } from './post-search-form/post-search-form.component';
import { DropdownListComponent } from './dropdown-list/dropdown-list.component';
import { SelectionBarComponent } from './selection-bar/selection-bar.component';
import { PostCardComponent } from './post-card/post-card.component';
import { PostCardContainerComponent } from './post-card-container/post-card-container.component';

@NgModule({
  declarations: [
    AppComponent,
    PostSearchFormComponent,
    DropdownListComponent,
    SelectionBarComponent,
    PostCardComponent,
    PostCardContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
