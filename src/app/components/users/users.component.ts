import { Component, OnInit } from '@angular/core';
import { UsersService } from "src/app/services/users.service"; 


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: any ;
  // username : any;
  title = "Users List From API"

  constructor(private usersSerive : UsersService) { }

  ngOnInit(): void {
    this.usersSerive.getAllusers().subscribe((data => {
      this.users = data;
    }
    ))
  }

}
