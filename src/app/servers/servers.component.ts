import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-servers',
//  template: `
//      <app-server></app-server>
//      <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
 allowServer = false;
 serverCreationStatus = 'No server caration done';
 serverName = 'teat';

  constructor() {
      setTimeout(() => {
          this.allowServer = true; }, 2000);
  }

  ngOnInit() {
  }

  onCreatServer(){
      this.serverCreationStatus = 'Server crated'+ this.serverName;
  }

  onUpdateServer(event: any){

      this.serverName = (<HTMLInputElement>event.target).value;

  }

}
