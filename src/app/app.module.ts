import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import{MatToolbarModule} from '@angular/material/toolbar';
import{MatSidenavModule} from '@angular/material/sidenav';
import{MatListModule} from '@angular/material/list';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { AddNotesComponent } from './Components/add-notes/add-notes.component';
import { IconsComponent } from './Components/icons/icons.component';
import { DisplayNotesComponent } from './Components/display-notes/display-notes.component';
import { GetnotesComponent } from './Components/getnotes/getnotes.component';
import {MatCardModule} from '@angular/material/card';
import { TrashComponent } from './Components/trash/trash.component';
import { ArchiveComponent } from './Components/archive/archive.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import { UpdatenotesComponent } from './Components/updatenotes/updatenotes.component';

import { AuthService } from './Services/auth/auth.service';
import { FilterPipe } from './Pipes/filter.pipe';
import { DirectivesDemoComponent } from './Components/directives-demo/directives-demo.component';
import { EventHandlingDemoComponent } from './Components/event-handling-demo/event-handling-demo.component';








@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    DashboardComponent,
    AddNotesComponent,
    IconsComponent,
    DisplayNotesComponent,
    GetnotesComponent,
    TrashComponent,
    ArchiveComponent,
    UpdatenotesComponent,
    FilterPipe,
    DirectivesDemoComponent,
    EventHandlingDemoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatMenuModule,
    MatDialogModule

  ],
  providers: [
    provideClientHydration(),
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
