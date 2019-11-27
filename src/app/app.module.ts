import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MethodeComponent } from './methode/methode.component';
import { MethodeNamePipe } from './Pipe/methode-name.pipe';
import { HttpClientModule } from '@angular/common/http';

import { PostService } from './Service/post.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    MethodeComponent,
    MethodeNamePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
