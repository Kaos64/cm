import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { MainComponent } from './screen/main.component';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatInputModule, MatFormFieldModule, MatGridListModule, MatCardModule, MatPaginatorModule } from '@angular/material';

import { RouterModule } from '@angular/router';
import { LayoutModule } from '@angular/cdk/layout';
import { AppRoutingModule } from './app-routing.module';
import { SearchComponent } from './screen/search/search.component';
import { QueryComponent } from './screen/search/query.component';
import { ResultComponent } from './screen/search/result.component';
import { HttpClientModule } from '@angular/common/http';
import { ExploreComponent } from './screen/search/explore.component';
import { AlbumComponent } from './screen/search/album.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SearchComponent,
    QueryComponent,
    ResultComponent,
    ExploreComponent,
    AlbumComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatPaginatorModule,
    FlexLayoutModule,


    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
