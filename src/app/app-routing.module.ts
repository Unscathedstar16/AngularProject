import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstCompComponent } from './first-comp/first-comp.component';
import { SecondcompComponent } from './secondcomp/secondcomp.component';

const routes: Routes = [
  {path:'firstcomp',component:FirstCompComponent},
  {path:'secondcomp',component:SecondcompComponent},
  {path:'',redirectTo:'firstcomp', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
