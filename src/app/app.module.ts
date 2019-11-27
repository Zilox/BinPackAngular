import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MethodeComponent } from './methode/methode.component';
import { MethodeNamePipe } from './Pipe/methode-name.pipe';
import { HttpClientModule } from '@angular/common/http';

import { PostService } from './Service/post.service';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CovalentFileModule, TdFileService, IUploadOptions } from '@covalent/core/file';
import { ResultatComponent } from './resultat/resultat.component';


@NgModule({
  declarations: [
    AppComponent,
    MethodeComponent,
    MethodeNamePipe,
    ResultatComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    CovalentFileModule
  ],
  providers: [
    PostService,
    TdFileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
