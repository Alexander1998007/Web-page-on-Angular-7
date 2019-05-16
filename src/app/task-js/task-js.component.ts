import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { TestData } from '../models/test-data';
@Component({
  selector: 'app-task-js',
  templateUrl: './task-js.component.html',
  styleUrls: ['./task-js.component.scss'],
  providers: [HttpService]
})
export class TaskJSComponent implements OnInit {

  categoriestestdata: TestData[] = [];
  itemstestdata: TestData[] = [];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getData().subscribe(data => this.categoriestestdata = data["categories"]);
    this.httpService.getData().subscribe(data => this.itemstestdata = data["items"]);

  }
}
