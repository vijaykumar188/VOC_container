import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RuTableComponent } from './lib-components/ru-table/ru-table.component';
import { RuTabsComponent } from './lib-components/ru-tabs/ru-tabs.component';
import { RuPaginatorComponent } from './lib-components/ru-paginator/ru-paginator.component';
import { RuButtonsComponent } from './lib-components/ru-buttons/ru-buttons.component';
import { RuNotificationsComponent } from './lib-components/ru-notifications/ru-notifications.component';
import { LoginComponent } from './components/login/login.component';
import { CsatModuleComponent } from './components/csat-module/csat-module.component';
import { ProgramsComponent } from './components/programs/programs.component';
import { CreateSurveyComponent } from './components/create-survey/create-survey.component';

@NgModule({
  declarations: [
    AppComponent,
    RuTableComponent,
    RuTabsComponent,
    RuPaginatorComponent,
    RuButtonsComponent,
    RuNotificationsComponent,
    LoginComponent,
    CsatModuleComponent,
    ProgramsComponent,
    CreateSurveyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
