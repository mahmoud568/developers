import { Injectable } from '@angular/core';

import {  BehaviorSubject, Observable, of,  } from 'rxjs';
import { developer } from './developer.model';
import { developers } from './mock-developers';

@Injectable({
  providedIn: 'root'
})
export class DeveloperService {
    Developers: developer[] = developers;
    slctdDeveloper: any;
    // dvlpredt = new BehaviorSubject<developer[]>(this.Developers);

    constructor() { }

  
    getDevelopers():Observable<developer[]> {
      return of(this.Developers);
    }

    getdvlpr(id: number){
      this.Developers = developers;
      this.slctdDeveloper =  this.Developers.find(x => x.id ==id);
      return this.slctdDeveloper;
    }

    addItem(added: any) {
      this.Developers.push(added.value);
      console.log(this.Developers);
    }

    editItem(edited: any) {
      const index: number = this.Developers.indexOf(edited);
      this.Developers.splice(index, 1);
      this.Developers.push(edited.value);
    }
    
}
