import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project.model';
import { ProjectService } from 'src/app/services/project.service';



@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  projects?: Project[];
  currentProject?: Project;
  currentIndex = -1;
  title='';

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.retrieveProjects();
  }

  retrieveProjects(): void {
    this.projectService.getAll()
    .subscribe(
      data => {
        this.projects = data;
        console.log(data);
      },
      error=> {
        console.log(error);
      });
  
  }

  refreshList(): void {
    this.retrieveProjects();
    this.currentProject = undefined;
    this.currentIndex = -1;
  }

  setActiveProject(project: Project, index: number): void {
    this.currentProject = project;
    this.currentIndex = index;
  }

  removeAllProjects(): void {
    this.projectService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  searchTitle(): void {
    this.projectService.findByTitle(this.title)
    .subscribe( 
      data => {
        this.projects = data;
        console.log(data);
      },
        error => {
        console.log(error);
      }
    );
  }


}
