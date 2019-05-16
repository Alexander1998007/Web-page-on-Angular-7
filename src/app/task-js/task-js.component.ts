import { Component, OnInit } from '@angular/core';
import data from '../../assets/data/test.json';

@Component({
  selector: 'app-task-js',
  templateUrl: './task-js.component.html',
  styleUrls: ['./task-js.component.scss']
})
export class TaskJSComponent implements OnInit {

  word: string;

  constructor() { }

  ngOnInit() {
  }

  somedatafromjson($event): void {
    this.word = (data as any).name;
    console.log(this.word);
  }
}
