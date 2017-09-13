import { Component, OnInit } from '@angular/core';
import { PracticePlannerService } from './../services/practice-planner.service';
import {FroalaEditorComponent} from 'ng2-froala-editor/ng2-froala-editor';
import { QuillModule } from 'ngx-quill';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-practice-planner',
  templateUrl: './practice-planner.component.html',
  styleUrls: ['./practice-planner.component.css'],
  providers: [PracticePlannerService]
})
export class PracticePlannerComponent implements OnInit {
  testData: any;
  showEditor = false;
  showPlanDetails = false;
  planName: {name: any}= {name: 'test'};
  response: any;
  data = [];

  editor: any;
  dataToSave = [];
  text = [];   //  = '<div *ngFor="let data of dataToSave">{{data.title}}</div>';
  froalaOptions: any = {
    height: 250
  };
  title: {data: any} = {data: 'testdata'};
  options: any;
  titles = [];
  controls = '?autoplay=0&showinfo=0&controls=0';
  constructor(private srvc: PracticePlannerService, public sanitizer: DomSanitizer) {

  }
  ngOnInit() {
     this.srvc.createPlan().subscribe(data => {
     this.testData = data;
     console.log('data from api__', this.testData);
    });
    // this.testData = [1, 2, 3, 4];
  }
  createPlan() {
    this.showEditor = true;
    this.showPlanDetails = false;
  }
  addToPlan() {

   console.log('Function AddToPlan Called');
  }

  onFroalaModelChanged(event: any) {
    setTimeout(() => {
      this.text = event;
    });
  }

  planClicked(index) {
    console.log('id of clicked data', index);
    const dataFromArray  = this.testData[0].description[index];
    console.log('dataFromArray', dataFromArray);
    this.dataToSave.push(dataFromArray);
    console.log('data to show on editor', this.dataToSave);

    //     setTimeout( function(){
    //       for (let i = 0; i <= this.dataToSave.length; i++) {
    //       this. titles = this.dataToSave[i].title;
    //       this.text.push(this.titles);
    //       }}, 3000);

  // console.log('text data', this.text);
  }
  removeData(indx) {
   console.log('item to remove at index', indx);
    this.dataToSave.splice(indx, 1);
   console.log('data after delete', this.dataToSave);
   console.log('plan name', this.planName);
  }

  onEditorInitialized(event?: any) {
    this.editor = FroalaEditorComponent.getFroalaInstance();
    this.editor.on('froalaEditor.focus', (e, editor) => {
      console.log('editor is focused');
    });
  }

  savePlan() {

   this.data.push(this.dataToSave, this.planName);
   console.log('saved data on save plan click', this.data);
   this.showEditor = false;
   this.showPlanDetails = true;
   this.srvc.savePlanInfo(this.data).subscribe(resp => {
     console.log('response from api', resp);
   });
  }

  logChange(event) {
   console.log('log change function called', event);
  }

  logSelection(event) {
   console.log('log Selection function called', event);

  }

}
