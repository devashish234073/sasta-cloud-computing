import { Component, OnInit } from '@angular/core';
import { Ec2Service } from '../ec2.service';
import { Router,NavigationEnd  } from '@angular/router';

@Component({
  selector: 'app-ec2',
  templateUrl: './ec2.component.html',
  styleUrls: ['./ec2.component.css']
})
export class Ec2Component implements OnInit {

  images:any[] = [];
  imageNames = new Map<String, boolean>();
  containerChooserHidden = true;

  constructor(private ec2Service:Ec2Service,private router:Router) { }

  menu = [{"name":"EC2 Dashboard","path":"ec2images"},
     {"name":"EC2 Global View","path":"ec2processes"},
     {"name":"Events","path":"ec2images"},
     {"name":"Tags","path":"ec2processes"},
     {"name":"Images","path":"ec2images"},
     {"name":"Processes","path":"ec2processes"}
  ];

  ngOnInit(): void {
    if(this.router.url=="/ec2images") {
      this.ec2Service.computeDockerImages();
    }
    if(this.router.url=="/ec2processes") {
      this.ec2Service.computeDockerProcesses();
    }
    this.imageNames.set("debian",false);
    this.imageNames.set("ubuntu",false);
    this.imageNames.set("fedora",false);
  }

  getDockerImages() {
    this.images = this.ec2Service.getDockerImages();
    for(var i=1;i<this.images.length;i++) {
      this.imageNames.set(this.images[i][0],true);
    }
    return this.images;
  }

  getImageNames() {
    return this.imageNames;
  }

  getDockerProcesses() {
    return this.ec2Service.getDockerProcesses();
  }

  getUrl() {
    return this.router.url;
  }

  launchContainer() {
    this.containerChooserHidden = !this.containerChooserHidden;
  }

  createDockerImage(evt:any) {
    this.ec2Service.createDockerImage(evt.target.innerText);
    this.containerChooserHidden = true;
  }

  removeDockerImage(evt:any) {
    this.ec2Service.removeDockerImage(evt.target.title);
    this.containerChooserHidden = true;
  }

}
