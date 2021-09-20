import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: "root"
})
export class StorageService {
  constructor(
    public firestore: AngularFirestore,
    public HttpClient:HttpClient
  ) {}
  getUtenti() {
    return this.firestore.collection("employees").snapshotChanges();
  }
  getUser(): Observable<any> {
    return this.HttpClient.get<any>('https://jsonplaceholder.typicode.com/posts/1');
  }

}
