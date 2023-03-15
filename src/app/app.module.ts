import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { EditTimeInfoComponent } from './edit-time-info/edit-time-info.component';
import { AdminSummaryViewComponent } from './admin-summary-view/admin-summary-view.component';
import { LoginComponent } from './login/login.component';
import { AvailablePipePipe } from './available-pipe.pipe';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    AppComponent,
    EditTimeInfoComponent,
    AdminSummaryViewComponent,
    LoginComponent,
    AvailablePipePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    PanelModule,
    MatTableModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
