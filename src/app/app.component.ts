import { Component } from '@angular/core';

@Component({
  selector: 'data-structures',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  linearStructs = [
    "array",
    "linked list",
    "queue",
    "stack"
  ];

  trees = [
    "binary tree",
    "red-black tree",
    "binary heap",
    "fibonacci heap",
    "d-ary heap"
  ];

  hashes = [
    "hash table",
    "hash list",
    "hash tree",
    "bloom filter",
  ];

  graphs = [
    "graph",
    "adjacency list",
    "adjacency matrix",
    "directed graph",
    "directed acyclic graph"
  ];

  selectedStruct = "array";
  onSelect (struct: string): void {
    this.selectedStruct = struct;
  }
}
