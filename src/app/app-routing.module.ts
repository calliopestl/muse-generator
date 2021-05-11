import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'projects', component: ProjectListComponent},
  { path: 'projects/:id', component: ProjectDetailsComponent},
  { path: 'add', component: AddProjectComponent }
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: 
    [RouterModule]
})
export class AppRoutingModule { }
