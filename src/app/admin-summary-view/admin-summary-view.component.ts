import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { actionType, startEnd } from '../interfaces/hourInfo';
import { accessLevels } from '../interfaces/userInfo';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-admin-summary-view',
  templateUrl: './admin-summary-view.component.html',
  styleUrls: ['./admin-summary-view.component.scss']
})
export class AdminSummaryViewComponent implements OnInit {

  displayedColumns: string[] = ['name', 'userId', 'type', 'action', 'time', 'clockIn'];
  dataSource: {name: string, userId: number, type: actionType, action: startEnd, time: Date}[] = [];

  constructor(private service: ServiceService, private router: Router, private _liveAnnouncer: LiveAnnouncer) {}

  ngOnInit() {
    this.dataSource = this.service.getSummaryInfo();
    console.log(this.dataSource);
  }

  employeePage(userId: number) {
    this.router.navigateByUrl('/time/' + userId, { state: {accessLevel: accessLevels.ADMIN} });
  }

  logout() {
    this.router.navigate(['/login']);
  }

}
