import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TerminalService } from '../terminal.service';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css']
})
export class TerminalComponent implements OnInit {

  constructor(private router: Router,private terminalService: TerminalService) { }
  cmnd:String = "";

  ngOnInit(): void {
  }

  checkKey(evt:any) {
    if("Enter"==evt.key) {
      this.runCommand(this.cmnd);
      this.cmnd = "";
    }
  }

  getTerminalOut() {
    return this.terminalService.getTerminalOut();
  }

  runCommand(command:String) {
    var distro = (this.router.url).replace("/term?image=","");
    this.terminalService.runOnLinux(command,distro);
  }

}
