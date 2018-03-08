declare module "src/liferay-service.service" {
    export class LiferayService {
        getUserLiferay(): string;
    }
}
declare module "index" {
    export * from "src/liferay-service.service";
}
