import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { SharedService } from '../_shared/shared.service';
import { Storage } from '../_storage/storage.service';
import * as manifest from '../../manifest.json';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'nav',
  template:
  `
    <h1 class="optHeader">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
        <rect x="24" y="80" width="16" height="16" />
        <rect x="40" y="64" width="16" height="16" />
        <rect x="72" y="64" width="16" height="16" />
        <rect x="56" y="48" width="16" height="16" />
        <rect x="88" y="80" width="16" height="16" />
        <path d="M123 20V0H88v20h-9V0H44v20h-9V10 0H25 10 0v10 10 10 20 78h128V20H123zM118 118H10V10h15v20h19 35 9 30V118z" />
      </svg>
      CaretTab
    </h1>
    <ul>
      <li>
        <button #dashboardLink type="button" (click)="goToPage('Dashboard')" [ngClass]="{'active': shared.optionsPage === 'Dashboard'}">
          <div class="icon" aria-hidden="true">info</div>{{'options.dashboard.whatsNew' | translate}}
        </button>
      </li>
      <li>
        <button
          type="button" (click)="goToPage('Design')" [ngClass]="{'active': shared.optionsPage === 'Design'}">
          <div class="icon" aria-hidden="true">format_paint</div>{{'options.design.design' | translate}}
        </button>
      </li>
      <li>
        <button
          type="button" (click)="goToPage('Time')" [ngClass]="{'active': shared.optionsPage === 'Time'}">
          <div class="icon" aria-hidden="true">access_time</div>{{'options.time.time' | translate}}
        </button>
      </li>
      <li>
        <button
          type="button" (click)="goToPage('Date')" [ngClass]="{'active': shared.optionsPage === 'Date'}">
          <div class="icon" aria-hidden="true">insert_invitation</div>{{'options.date.date' | translate}}
        </button>
      </li>
      <li>
        <button
          type="button" (click)="goToPage('Bookmarks')" [ngClass]="{'active': shared.optionsPage === 'Bookmarks'}">
          <div class="icon" aria-hidden="true">star</div>{{'options.bookmarks.headingBar' | translate}}
        </button>
      </li>
      <li>
        <button
          type="button" (click)="goToPage('Weather')" [ngClass]="{'active': shared.optionsPage === 'Weather'}">
          <div class="icon" aria-hidden="true">wb_sunny</div>{{'options.weather.weather' | translate}}
        </button>
      </li>
      <li>
        <button
          type="button" (click)="goToPage('Search')" [ngClass]="{'active': shared.optionsPage === 'Search'}">
          <div class="icon" aria-hidden="true">search</div>{{'options.search.search' | translate}}
        </button>
      </li>
      <li>
        <button
          type="button" (click)="goToPage('Message')" [ngClass]="{'active': shared.optionsPage === 'Message'}">
          <div class="icon" aria-hidden="true">textsms</div>{{'options.message.msg' | translate}}
        </button>
      </li>
      <li>
        <button
          type="button" (click)="goToPage('Covid')" [ngClass]="{'active': shared.optionsPage === 'Covid'}">
          <div class="icon" aria-hidden="true">coronavirus</div>{{'options.covidData.covidData' | translate}}
        </button>
      </li>
      <li>
        <button
          type="button" (click)="goToPage('Extra')" [ngClass]="{'active': shared.optionsPage === 'Extra'}">
          <div class="icon" aria-hidden="true">settings</div>{{'options.extra.extra' | translate}}
        </button>
      </li>
    </ul>
    <div class="preview" (mouseenter)="togglePreview(true)" (mouseleave)="togglePreview(false)">
      {{'options.common.preview' | translate}}
    </div>
    <div class="version">
      {{'options.common.version' | translate}} {{ver}}
    </div>
  `,
})
export class NavComponent implements AfterViewInit {
  @ViewChild('dashboardLink', {static: false}) dashboardLink: ElementRef;

  ver = manifest.version;

  constructor(
    public shared: SharedService,
    public settings: Storage,
  ) {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      // Set focus on dashboard nav when settings opens
      this.dashboardLink.nativeElement.focus()
    }, 0);
  }

  goToPage(page: string) {
    this.shared.optionsPage = page;
    this.shared.echo('Opened settings page:', page);
    let path = encodeURI(page).toLowerCase();
  }

  togglePreview(enable: boolean) {
    this.shared.optionsPreview = enable;
  }

}
