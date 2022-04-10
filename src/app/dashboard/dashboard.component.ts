import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  title:String = "Search for services like ec2 above..";
  github:string = "https://github.com/devashish234073/sasta-cloud-computing";

  ngOnInit(): void {
  }

}
