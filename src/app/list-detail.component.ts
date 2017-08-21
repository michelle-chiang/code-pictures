import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.scss']
})

export class ListDetail implements OnInit {
  
  constructor(private activatedRoute: ActivatedRoute) {};
  dataStruct = "array";

  ngOnInit() {
    // subscribe to router event
    this.activatedRoute.params.subscribe((params: Params) => {
      let dataStruct = params['dataStruct'];
      // console.log(dataStruct)
      this.dataStruct = dataStruct;
    })
  }
}
