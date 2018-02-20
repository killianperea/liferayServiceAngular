import { Injectable } from '@angular/core';

/* Liferay instance */
declare const Liferay: any;

@Injectable()
export class LiferayService {

  constructor() {
    // nothing to do in here :) 
  }

  getUserLiferay(): string {
    if (Liferay) {
      return <string>Liferay.ThemeDisplay.getUserName();
    } else {
      return 'Unexpected User';
    }
  }
  
}
