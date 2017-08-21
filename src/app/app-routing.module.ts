import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { ListComponent } from './list.component';
import { ListDetail } from './list-detail.component';

const routes: Routes = [
  { path: '',  component: ListComponent,
    children: [
      { path: ':dataStruct', component: ListDetail }
    ] 
  }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
