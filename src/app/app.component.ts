import { Component } from '@angular/core';
import { PracticePlannerService } from './services/practice-planner.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  testData: any;

  constructor(private srvc: PracticePlannerService) {
    this.srvc.createPlan().subscribe(data => {this.testData = data; });
  }
}

