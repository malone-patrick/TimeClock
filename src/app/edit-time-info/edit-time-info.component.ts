import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { actionType, activeActions, hours, startEnd } from '../interfaces/hourInfo';
import { accessLevels, UserInfo } from '../interfaces/userInfo';
import { ServiceService } from '../service.service';

let ELEMENT_DATA: hours[] = [];

@Component({
  selector: 'app-edit-time-info',
  templateUrl: './edit-time-info.component.html',
  styleUrls: ['./edit-time-info.component.scss']
})
export class EditTimeInfoComponent implements OnInit {

  @ViewChild(MatTable) timeTable: MatTable<any> | undefined;

  constructor(private service: ServiceService, private router: Router, private route: ActivatedRoute) {}

  displayedColumns: string[] = ['type', 'action', 'time'];
  dataSource: hours[] = [];

  latestActions: activeActions = {
    shiftActive: false,
    breakActive: false,
    lunchActive: false
  };

  userInfo: UserInfo = {name: "Becky Bobo", userId: 67890, access: accessLevels.USER}
  currentStatus = "Clocked Out";

  ngOnInit() {
    const userId = Number(this.route.snapshot.paramMap.get('id'));
    this.dataSource = this.service.getUserClockTimes(userId);
    this.latestActions = this.service.getLatestActions(userId);
    this.userInfo = this.service.getUserInfo(userId);
    
    if(history.state.accessLevel === accessLevels.ADMIN) {
      this.userInfo.access = accessLevels.ADMIN;
    }
  }

  logout() {
    this.router.navigate(['/login']);
  }

  back() {
    this.router.navigate(['/summary']);
  }

  updateTime(type: actionType, punch: startEnd) {
    const saveTime = Date.now();
    this.service.AddClockTime(this.userInfo.userId, type, punch, saveTime);
    this.dataSource.unshift({type: type, action: punch, time: new Date(saveTime)});
    if(this.timeTable) this.timeTable.renderRows();
    this.updateLatestActions(type, punch);
    this.updateStatus();
  }

  private updateLatestActions(type: actionType, punch: startEnd) {
    const activeStatus = punch === startEnd.START ? true: false;
    
    switch(type) {
      case actionType.SHIFT: {
        this.latestActions.shiftActive = activeStatus;
        break;
      }
      case actionType.LUNCH: {
        this.latestActions.lunchActive = activeStatus;
        break;
      }
      case actionType.BREAK: {
        this.latestActions.breakActive = activeStatus;
        break;
      }
      default: {
        console.log("Unknown action type!")
        break;
      }
    }
  }

  private updateStatus() {
    if(this.latestActions.breakActive) {
      this.currentStatus = "On Break";
    } else if(this.latestActions.lunchActive) {
      this.currentStatus = "At Lunch";
    } else if(this.latestActions.shiftActive) {
      this.currentStatus = "Clocked In";
    } else {
      this.currentStatus = "Clocked Out";
    }
  }

  public get actionType(): typeof actionType {
    return actionType; 
  }

  public get startEnd(): typeof startEnd {
    return startEnd; 
  }

  public get accessLevels(): typeof accessLevels {
    return accessLevels; 
  }
}
