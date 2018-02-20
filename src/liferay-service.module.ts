import { NgModule } from '@angular/core';
import { LiferayService } from './liferay-service.service';

NgModule({
    exports: [LiferayService]
});

export class LiferayServiceModule { }

export * from './liferay-service.service';