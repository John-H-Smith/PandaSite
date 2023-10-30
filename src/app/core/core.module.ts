import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import {EndpointsModule} from "./endpoints/endpoints.module";
import {ServicesModule} from "./services/service.module";
import {BrowserModule} from "@angular/platform-browser";


@NgModule({
  imports: [
    HttpClientModule,
    EndpointsModule,
    ServicesModule,
    BrowserModule
  ]
})
export class CoreModule {

}
