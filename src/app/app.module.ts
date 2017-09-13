import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PracticePlannerService } from './services/practice-planner.service';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PracticePlannerComponent } from './practice-planner/practice-planner.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import {FroalaEditorModule} from 'ng2-froala-editor/ng2-froala-editor';
import { QuillModule } from 'ngx-quill';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'summernote/dist/summernote.min.js';
import {FormControl} from '@angular/forms';

import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';


const appRoutes: Routes = [
  { path: '', component: PracticePlannerComponent },
  { path: 'practicePlanner',      component: PracticePlannerComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    PracticePlannerComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    FroalaEditorModule,
    QuillModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PracticePlannerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
