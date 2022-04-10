import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  data:any = {};

  constructor() { 
  this.data["ec2"] = [{"serviceName":"EC2","description":"Virtual Servers in the Cloud","href":"ec2images"}]
  this.data["ec2"].push({"serviceName":"EC2 Image Builder","description":"A managed service to automate build, customize and deploy OS images.","href":"ec2imagebuilder"});

  }

  search(text:String) {
    return this.data[text.toLowerCase()];
  }
}
