import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsResolver } from './news.resolver';

import { TopComponent } from './top/top.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
    resolve: { message: NewsResolver }
  },
  {
    path: 'top',
    component: TopComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }