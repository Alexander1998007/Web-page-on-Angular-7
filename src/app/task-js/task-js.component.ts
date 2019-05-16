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

  Categories: TestData[] = [];
  Items: TestData[] = [];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getData()
      .subscribe((data: any) => {
        this.Categories = data.categories;
        this.Items = data.items;
      });
  }
}
