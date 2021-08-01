import { CompanyData } from 'src/app/_fake/fake-db/company.Data';
import { OnInit, Component, ChangeDetectionStrategy } from '@angular/core';
import { NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';

const demo = {
  beforeCodeTitle: 'Demo',
  htmlCode: `
<div class="example-preview">
  <div>
    <button type="button"
      class="btn btn-primary"
      (click)="isCollapsed = !isCollapsed"
      [attr.aria-expanded]="!isCollapsed"
      aria-controls="collapseExample">
      Toggle
    </button>
  </div>
  <div id="collapseExample" [ngbCollapse]="isCollapsed">
    <div class="card">
      <div class="card-body">
        You can collapse this card by clicking Toggle
      </div>
    </div>
  </div>
</div>
`,
  tsCode: `
import { Component } from '@angular/core';\n
@Component({
    selector: 'ngbd-collapse-basic',
    templateUrl: './collapse-basic.html'
})
export class NgbdCollapseBasic {
    public isCollapsed = false;
}
`,
  isCodeVisible: false,
  isExampleExpanded: true,
};

const personalInfo = [
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
  }
]

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.scss']
})

export class CampaignsComponent implements OnInit {
  companies = CompanyData.companies;
  exampleDemo: any;
  isCollapsed = [];
  personalInfo = personalInfo;

  constructor() {}

  ngOnInit() {
    this.exampleDemo = demo;
    // for(var i=0; i<this.companies.length; i++) {
    //   this.isCollapsed
    // }
    for(var i=0;i<this.personalInfo.length;i++){
      this.isCollapsed.push(true)
    }
  }

}
