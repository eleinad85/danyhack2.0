import { Component, OnInit } from "@angular/core";
import { StorageService } from "../storage.service";
import { ViewContainerRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ColorPickerService, Cmyk } from 'ngx-color-picker';
import { AngularFirestore } from "@angular/fire/firestore";
@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  color = '#ff00ff';
  message = 'Empty';
  fg: FormGroup;

  constructor(private fb: FormBuilder,public StorageService: StorageService,   public firestore: AngularFirestore) {
    console.log(this.message);
    this.fg = this.fb.group({
      color: [this.color, Validators.required]
    });
  }
  public onSubmit(color:string) {
    this.message = 'OK';
console.log(color)
      let data = Object.assign({}, color);

       this.firestore.collection("colori").add(color);


  }

  obj: any;

  ngOnInit() {

  }


}
