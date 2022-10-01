import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateSurveyComponent } from './components/create-survey/create-survey.component';
import { CsatModuleComponent } from './components/csat-module/csat-module.component';
import { LaunchSurveyComponent } from './components/launch-survey/launch-survey.component';
import { LoginComponent } from './components/login/login.component';
import { ProgramsComponent } from './components/programs/programs.component';
import { QuestionBankComponent } from './components/question-bank/question-bank.component';
import { SurveyExclusionsComponent } from './components/survey-exclusions/survey-exclusions.component';
import { SurveyFormsComponent } from './components/survey-forms/survey-forms.component';
import { SurveyResultsComponent } from './components/survey-results/survey-results.component';
import { UserRoleComponent } from './components/user-role/user-role.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'programs', component: ProgramsComponent },
  { path: 'csat', component: CsatModuleComponent },
  { path: 'question', component: QuestionBankComponent },
  { path: 'survey-exclusion', component: SurveyExclusionsComponent },
  { path: 'survey-forms', component: SurveyFormsComponent },
  { path: 'survey-reults', component: SurveyResultsComponent },
  { path: 'user-role', component: UserRoleComponent },
  { path: 'launch-survey', component: LaunchSurveyComponent },


  { path: '**', component: CreateSurveyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
