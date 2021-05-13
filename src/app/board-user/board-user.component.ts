import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Project } from 'src/app/models/project.model';
import { ProjectService } from 'src/app/services/project.service';
import { ProjectListComponent } from 'src/app/project-list/project-list.component';

@Component({ 
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})
export class BoardUserComponent implements OnInit {
  content?: string;
 

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUserBoard().subscribe(
      data => {
      this.content = data;
    
  },
  err => {
    this.content = JSON.parse(err.error).message;
  }
    );
}
}
