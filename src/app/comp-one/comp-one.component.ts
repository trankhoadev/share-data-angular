import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service'

@Component({
  selector: 'app-comp-one',
  templateUrl: './comp-one.component.html',
  styleUrls: ['./comp-one.component.css']
})
export class CompOneComponent implements OnInit {

  constructor(private data: DataService) { }

  input:string = 'Hello world';

  ngOnInit() {
  }

  createMessage(message:any) {
    this.data.changeMessage(message);
  }

}
