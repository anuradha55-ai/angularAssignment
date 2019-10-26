import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { MyNavComponent } from '../my-nav/my-nav.component';
import { HomeComponent } from '../home/home.component';
import { CommmentDialog } from '../home/commentDialog.component';
import { ActivityComponent } from '../activity/activity.component';
import { DemoMaterialModule } from '../material-module';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';  
import { DataService } from './data.service';
import { BlogService } from './blog.service';


@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    HomeComponent,
    CommmentDialog,
    ActivityComponent,
  ],
  entryComponents: [CommmentDialog],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    DemoMaterialModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(DataService),
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
