import { Component, OnInit } from '@angular/core';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
