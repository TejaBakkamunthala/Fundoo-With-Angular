import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { AddNotesComponent } from './Components/add-notes/add-notes.component';
import { IconsComponent } from './Components/icons/icons.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { GetnotesComponent } from './Components/getnotes/getnotes.component';
import { TrashComponent } from './Components/trash/trash.component';
import { ArchiveComponent } from './Components/archive/archive.component';
import { AuthService } from './Services/auth/auth.service';
import { authguardGuard } from './AuthGuard/authguard.guard';
import { DirectivesDemoComponent } from './Components/directives-demo/directives-demo.component';
import { EventHandlingDemoComponent } from './Components/event-handling-demo/event-handling-demo.component';

const routes: Routes = [
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'forgot',component:ForgotPasswordComponent},
  {path:'reset',component:ResetPasswordComponent},
  {path:'icons',component:IconsComponent},
  {path:'directives',component:DirectivesDemoComponent},
  {path:'event',component:EventHandlingDemoComponent},
  {path:'home', component:DashboardComponent,
  canActivate:[authguardGuard],
  children:[
    {path:'',redirectTo:'/home',pathMatch:'full'},
    {path:'getnotes',component:GetnotesComponent},
    {path:'trash',component:TrashComponent},
    {path:'archive',component:ArchiveComponent}
    
]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
