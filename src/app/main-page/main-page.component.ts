import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  goBack(){}
  openMenu(){}

  rooms = [

    { id: 1, name: 'Drawing Room', description: 'Description for Room 1', temp: "12", light_time: "24s", imageUrl:"a" },
    { id: 2, name: 'Kitchen', description: 'Description for Room 2',  temp: "12", light_time: "24s", imageUrl: "a"},
    { id: 3, name: 'Bedroom', description: 'Description for Room 2',  temp: "12", light_time: "24s", imageUrl: "a"},
    { id: 4, name: 'Living Room', description: 'Description for Room 2',  temp: "12", light_time: "24s", imageUrl: "a"},
    { id: 5, name: 'Rest Room', description: 'Description for Room 2',  temp: "12", light_time: "24s", imageUrl: "a"},
    { id: 6, name: 'Room 2', description: 'Description for Room 2',  temp: "12", light_time: "24s", imageUrl: "a"},
  ];

  constructor(private router: Router) {}

  navigateToRoomPage(roomId: number): void {
    this.router.navigate(['/room', roomId]);
  }
}
