import { Component, OnInit } from '@angular/core';
import { StorageService } from "../storage.service";

@Component({
  selector: 'app-profilo',
  templateUrl: './profilo.component.html',
  styleUrls: ['./profilo.component.css']
})
export class ProfiloComponent implements OnInit {

  constructor(public StorageService: StorageService) {}
  obj: any;

  ngOnInit() {
    this.StorageService.getUser().subscribe(
      result => {
        this.obj = result;
         console.log(this.obj.body);
      },
      error => {}
    );
  }

}
