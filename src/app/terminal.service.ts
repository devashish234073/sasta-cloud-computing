import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TerminalService {

  constructor(private http:HttpClient) { }

  terminalout:String = "";
  cdCommands:String = "";

  saveCdCommands(cmnd:String) {
    if(cmnd.startsWith("cd ")) {
      if(this.cdCommands == "") {
        this.cdCommands = cmnd;
      } else {
        this.cdCommands += ";"+cmnd;
      }
    }
  }

  runOnLinux(cmnd:String,distro:String) {
    if(cmnd=="clear") {
      this.terminalout = "";
      return;
    }
    var cmndSplit = cmnd.split(";");
    var modifiedCmnd = ""+this.cdCommands;
    if(cmndSplit.length>1) {
      for(var i=0;i<cmndSplit.length;i++) {
        if(modifiedCmnd=="") {
          modifiedCmnd+="echo ----- Output of ["+cmndSplit[i]+"] -----------;"+cmndSplit[i];
          this.saveCdCommands(cmndSplit[i]);
        } else {
          modifiedCmnd+=";echo ----- Output of ["+cmndSplit[i]+"] -----------;"+cmndSplit[i];
          this.saveCdCommands(cmndSplit[i]);
        }
      }
    } else {
      if(modifiedCmnd=="") {
        modifiedCmnd+="echo ----- Output of ["+cmnd+"] -----------;"+cmnd;
        this.saveCdCommands(cmnd);
      } else {
        modifiedCmnd+=";echo ----- Output of ["+cmnd+"] -----------;"+cmnd;
        this.saveCdCommands(cmnd);
      }
    }
    let url = environment.backend+"/runOnLinux?cmnd="+modifiedCmnd+"&distro="+distro;
    let me = this;
    this.http.get(url, {responseType: 'text'})
    .subscribe((resp:any)=>{
      this.terminalout+=resp+"\r\n";
    });
  }

  getTerminalOut() {
    return this.terminalout;
  }
}
