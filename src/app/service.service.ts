import { Injectable } from '@angular/core';
import { isSuccess } from 'angular-in-memory-web-api';
import { actionType, activeActions, hours, startEnd } from './interfaces/hourInfo';
import { accessLevels, UserInfo } from './interfaces/userInfo';

@Injectable({
  providedIn: 'root'
})

//I wish I had had enough time to set up an in memory database to more properly mock backed interactions
//In a more completed application these would be calling a backend for this info
export class ServiceService {

  constructor() { }

  varifyUser(username: string, password: string) {
    if(username.toLowerCase() === "admin")
      return {employeeId: 12345, accessLevel: accessLevels.ADMIN};
    else 
      return {employeeId: 67890, accessLevel: accessLevels.USER};
  }

  getUserClockTimes(userId: number): hours[] {
    return [
      {type: actionType.SHIFT, action: startEnd.END, time: new Date(2018, 0O5, 0O5, 17, 30, 42, 11)},
      {type: actionType.LUNCH, action: startEnd.END, time: new Date(2018, 0O5, 0O5, 1, 8, 42, 11)},
      {type: actionType.LUNCH, action: startEnd.START, time: new Date(2018, 0O5, 0O5, 12, 5, 42, 11)},
      {type: actionType.SHIFT, action: startEnd.START, time: new Date(2018, 0O5, 0O5, 8, 23, 42, 11)},
    ];
  }

  getLatestActions(userId: number): activeActions {
    return {
      shiftActive: false,
      breakActive: false,
      lunchActive: false
    }
  }

  getUserInfo(userId: number): UserInfo {
    return {name: "John Smith", userId: 12345, access: accessLevels.USER}
  } 

  AddClockTime(userId: number, type: actionType, action: startEnd, time: number): boolean {
    //save action with userId
    const success = true;
    return success
  }

  getSummaryInfo() {
    return [
      {name: "John Smith", userId: 12345, type: actionType.SHIFT, action: startEnd.END, time: new Date(2018, 0O5, 0O5, 17, 30, 42, 11)},
      {name: "Becky Bobo", userId: 54635, type: actionType.LUNCH, action: startEnd.END, time: new Date(2018, 0O5, 0O5, 1, 8, 42, 11)},
      {name: "Pay Chex", userId: 84653, type: actionType.LUNCH, action: startEnd.START, time: new Date(2018, 0O5, 0O5, 12, 5, 42, 11)},
      {name: "Type Script", userId: 41984, type: actionType.SHIFT, action: startEnd.START, time: new Date(2018, 0O5, 0O5, 8, 23, 42, 11)},
    ]
  }
}
