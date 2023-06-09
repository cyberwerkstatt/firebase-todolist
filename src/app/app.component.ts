import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  todos$: Observable<any[]>;
  todos:Array<any>;
  
  firestore: Firestore = inject(Firestore);

  constructor() {
    const coll = collection(this.firestore, 'todos');
    this.todos$ = collectionData(coll);
    this.todos$.subscribe( (newTodos) => {
      console.log("neue todos:", newTodos)
      this.todos = newTodos;
    });
  }



}
