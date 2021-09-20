import { Component, OnInit } from '@angular/core';
import { StorageService } from './storage.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  list: any
  constructor(private StorageService: StorageService) { }
  ngOnInit() {

    /*     this.StorageService.getUtenti().subscribe(actionArray => {
         this.list = actionArray.map(item => {

           return {
             id: item.payload.doc.id,
             ...item.payload.doc.data()
           } as any;
         })
         console.log(this.list)
       }); */

  }


  title = 'danycarf.hack2.0Management';
}
