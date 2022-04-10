import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Ec2Service {

  images:any = [];
  processes:any = [];

  constructor(private http:HttpClient,private router: Router) { }

  computeDockerImages() {
    let url = environment.backend+"/getDockerImages";
    let me = this;
    this.http.get(url, {responseType: 'text'})
    .subscribe((resp:any)=>{
      me.images = JSON.parse(resp);
    });
  }

  computeDockerProcesses() {
    let url = environment.backend+"/getDockerProcesses";
    let me = this;
    this.http.get(url, {responseType: 'text'})
    .subscribe((resp:any)=>{
      me.processes = JSON.parse(resp);
    });
  }

  createDockerImage(imageName:String) {
    let url = environment.backend+"/createDockerImage?imageName="+imageName;
    let me = this;
    this.http.get(url, {responseType: 'text'})
    .subscribe((resp:any)=>{
      alert(resp);
      //this.router.navigate(['/ec2images']);
      window.location.reload();
    });
  }
  
  removeDockerImage(imageName:String) {
    let url = environment.backend+"/removeDockerImage?imageName="+imageName;
    let me = this;
    this.http.get(url, {responseType: 'text'})
    .subscribe((resp:any)=>{
      alert(resp);
      //this.router.navigate(['/ec2images']);
      window.location.reload();
    });
  }

  getDockerImages() {
    return this.images;
  }

  getDockerProcesses() {
    return this.processes;
  }

}
