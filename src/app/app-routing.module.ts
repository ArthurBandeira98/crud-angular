import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'courses', pathMatch: 'full' }, //pathMatch = analisa o roteamento para validar se esta tudo ok na url]
  { path: 'courses', loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule) } //lazy loading
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
