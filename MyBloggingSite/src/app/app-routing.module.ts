import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ActivityComponent } from '../activity/activity.component';

const routes: Routes = [
  { path: 'app-home', component: HomeComponent },
  { path: 'app-activity', component: ActivityComponent},
  { path: '', redirectTo: '/app-home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
