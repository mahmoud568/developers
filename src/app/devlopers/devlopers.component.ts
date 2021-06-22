import { Component, OnInit } from '@angular/core';
import { developer } from './developer.model';
import { DeveloperService } from './developer.service';

@Component({
  selector: 'app-devlopers',
  templateUrl: './devlopers.component.html',
  styleUrls: ['./devlopers.component.scss']
})
export class DevlopersComponent implements OnInit {
  developers : developer[];

  filterNTClickedName: boolean;
  filterToggleName: boolean;
  filterNTClickedAge: boolean;
  filterToggleAge: boolean;
  filterNTClickedSkills: boolean;
  filterToggleSkills: boolean;
  filterNTClickedDesignation: boolean;
  filterToggleDesignation: boolean;
  filterNTClickedAddress: boolean;
  filterToggleAddress: boolean;

  constructor(private developerService: DeveloperService) { }

  ngOnInit(): void {
    this.getDevlopers();
  }

  getDevlopers() {
    this.developerService.getDevelopers().subscribe(developers => this.developers = developers);
  }

  sort(sortBy: string) {
    if(sortBy == 'name'){
      this.filterNTClickedName = true;
      this.filterToggleName= !this.filterToggleName;
      if(this.filterToggleName){
        this.developers.sort((a, b) => (a.name > b.name) ? 1 : -1);
      }
      else {
        this.developers.sort((b, a) => (a.name > b.name) ? 1 : -1);
      }
      
    } else if (sortBy == 'age') {
      this.filterNTClickedAge = true;
      this.filterToggleAge= !this.filterToggleAge;
      if(this.filterToggleAge){
        this.developers.sort((a, b) => (a.age > b.age) ? 1 : -1);
      }
      else {
        this.developers.sort((b, a) => (a.age > b.age) ? 1 : -1);
      }
    } else if (sortBy == 'skills') {
      this.filterNTClickedSkills = true;
      this.filterToggleSkills= !this.filterToggleSkills;
      if(this.filterToggleSkills){
        this.developers.sort((a, b) => (a.skills.length > b.skills.length) ? 1 : -1);
      }
      else {
        this.developers.sort((b, a) => (a.skills.length > b.skills.length) ? 1 : -1);
      }
    } else if (sortBy == 'designation') {
      this.filterNTClickedDesignation = true;
      this.filterToggleDesignation= !this.filterToggleDesignation;
      if(this.filterToggleDesignation){
        this.developers.sort((a, b) => (a.designation > b.designation) ? 1 : -1);
      }
      else {
        this.developers.sort((b, a) => (a.designation > b.designation) ? 1 : -1);
      }
    } else if (sortBy == 'address') {
      this.filterNTClickedAddress = true;
      this.filterToggleAddress= !this.filterToggleAddress;
      if(this.filterToggleAddress){
        this.developers.sort((a, b) => (a.address > b.address) ? 1 : -1);
      }
      else {
        this.developers.sort((b, a) => (a.address > b.address) ? 1 : -1);
      }
    }
  }

  // edit(dvlpr: developer) {
  //   this.developerService.edit(dvlpr);
  // }

  deleteDeveloper(msg: developer){
    const index: number = this.developers.indexOf(msg);
    if(confirm("are u sure you want to delete this profile!")) {
      this.developers.splice(index, 1);
    }
    
  }
}
