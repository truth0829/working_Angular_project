// import { Component, ModuleWithComponentFactories, OnInit } from '@angular/core';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PaginatorState } from '../../../../_metronic/shared/crud-table';

const number = [
  {
    id: 1
  },
  {
    id: 2
  },
  {
    id: 3
  },
  {
    id: 4
  },
  {
    id: 5
  },
  {
    id: 6
  },
  {
    id: 7
  },
  {
    id: 8
  },
  {
    id: 9
  },
  {
    id: 10
  },
];

@Component({
  selector: 'app-media-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss'],
})

export class PublicationsComponent implements OnInit {
  number = number;
  paginator: PaginatorState;
  isLoading: boolean;
  pageSize = 10;
  numberOfPage = number.length;

  constructor() { }

  ngOnInit() {
  }

  // pagination
  paginate(paginator: PaginatorState) {
    console.log(paginator)
  }

}
