import { Component, ModuleWithComponentFactories, OnInit, Input } from '@angular/core';
import { CompanyData } from 'src/app/_fake/fake-db/company.Data';

const pageSizeData = [
  10,
  20,
  30,
  50,
  100
]

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss']
})
export class ProfilesComponent implements OnInit {
  companies = CompanyData.companies;
  pageSizeData = pageSizeData;
  numberOfPage = 0;
  currentPage = 0;
  pageSize = 10;

  constructor() { }
  setPageSize(result: number) {
    console.log('here');
    this.pageSize = 10;
  }

  ngOnInit(): void {
    this.numberOfPage = this.companies.length;
  }

}
