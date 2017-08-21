import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'data-structure-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent {
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
