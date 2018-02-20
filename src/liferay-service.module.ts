import { NgModule } from '@angular/core';
import { LiferayService } from './liferay-service.service';


@NgModule({
  imports: [],
  providers: [LiferayService],
  exports: [LiferayService]
})
export class LiferayServiceModule { }
