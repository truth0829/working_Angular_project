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
];

@Component({
  selector: 'app-relations-freelancers',
  templateUrl: './freelancers.component.html',
  styleUrls: ['./freelancers.component.scss'],
})

export class FreelancersComponent implements OnInit {
  number = number;
  paginator: PaginatorState;
  isLoading: boolean;

  constructor() { }

  ngOnInit() {
  }

  // pagination
  paginate(paginator: PaginatorState) {
    console.log(paginator)
  }

}
