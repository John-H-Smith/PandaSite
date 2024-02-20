import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './pages/navbar/navbar.component';
import {CoreModule} from "./core/core.module";
import { ClickOutsideDirective } from './core/directives/clickOutside.directive';
import {MAT_RIPPLE_GLOBAL_OPTIONS, RippleGlobalOptions} from "@angular/material/core";
const globalRippleConfig: RippleGlobalOptions = {
  disabled: true,
  animation: {
    enterDuration: 300,
    exitDuration: 300,
  }
};
@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    ClickOutsideDirective,
    AppComponent,
    NavbarComponent
  ],
  imports: [
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule
  ],
  providers: [{provide: MAT_RIPPLE_GLOBAL_OPTIONS, useValue: globalRippleConfig}]
})
export class AppModule { }
