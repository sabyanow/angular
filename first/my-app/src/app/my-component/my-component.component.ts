import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {
 message ="my message for ";
  user: User = {
    "id": 111,
    "name": "sabya",
    "email": "sabya@gmail.com",
    "mobile": 98098789

  }
  products :any
  constructor() { 
    this.products=[{"id" : 344,"name":"HP laptop"},
    {"id" : 345,"name":"DELL laptop"}
  ]
  }

  ngOnInit(): void {
  }

}
