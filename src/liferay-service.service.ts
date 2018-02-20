import { Injectable } from '@angular/core';

/* Liferay instance */
declare const Liferay: any;

@Injectable()
export class LiferayService {

  getUserLiferay(): string {
    if (Liferay) {
      return <string>Liferay.ThemeDisplay.getUserName();
    } else {
      return 'Unexpected User';
    }
  }
  
}
