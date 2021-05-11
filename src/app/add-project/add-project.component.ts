import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project.model';
import { ProjectService } from 'src/app/services/project.service';


@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  project: Project = {
    title: '',
    generated: [],
    notes: ''
  };
  submitted = false;

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
  }

  saveProject(): void {
    const data = {
      title: this.project.title,
      generated: this.project.generated,
      notes: this.project.notes
    };

    this.projectService.create(data)
    .subscribe(
      response => {
        console.log(response);
        this.submitted = true;
      },
      error => {
        console.log(error);
      });
  
  }

  newProject(): void {
    this.submitted = false;
    this.project = {
      title: '',
      generated: [],
      notes: ''
    };
  }

}
