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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HeaderBarComponent } from './lib-components/header-bar/header-bar.component';
import { CardsComponent } from './lib-components/cards/cards.component';
import { LaunchSurveyComponent } from './components/launch-survey/launch-survey.component';
import { SurveyExclusionsComponent } from './components/survey-exclusions/survey-exclusions.component';
import { SurveyResultsComponent } from './components/survey-results/survey-results.component';
import { UserRoleComponent } from './components/user-role/user-role.component';
import { QuestionBankComponent } from './components/question-bank/question-bank.component';
import { SurveyFormsComponent } from './components/survey-forms/survey-forms.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AdvfilterComponent } from './popups/advfilter/advfilter.component';
import { ProgramDetailsComponent } from './popups/program-details/program-details.component';
import {MatTabsModule} from '@angular/material/tabs';
import { NgToastModule } from 'ng-angular-popup'
import {MatSidenavModule} from '@angular/material/sidenav';
//import { ToastrModule } from 'ngx-toastr';
// import {MatPaginatorModule} from '@angular/material/paginator';
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
    CreateSurveyComponent,
    HeaderBarComponent,
    CardsComponent,
    LaunchSurveyComponent,
    SurveyExclusionsComponent,
    SurveyResultsComponent,
    UserRoleComponent,
    QuestionBankComponent,
    SurveyFormsComponent,
    AdvfilterComponent,
    ProgramDetailsComponent,
    //MatTabsModule,
    //MatPaginatorModule
    // MatBudulettonModule,
    // MatIconMo
    //FlexLayoutModule

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    MatTabsModule,
    BrowserAnimationsModule,
    //ToastrModule.forRoot(),
    NgToastModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
