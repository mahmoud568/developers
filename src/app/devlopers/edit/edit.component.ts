import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { developer } from '../developer.model';
import { DeveloperService } from '../developer.service';
import { developers } from '../mock-developers';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  dvlprs: developer[] = developers;
  dvlpr: developer;
  slctdId: number;

  constructor(private developerService: DeveloperService, private route: ActivatedRoute, private router: Router,) { }

  ngOnInit(): void {
    this.slctdId = this.route.snapshot.params['id'];
    this.route.params.subscribe(
      (params: Params) => {
        this.slctdId = params['id'];
      }
    )
    this.dvlpr = this.developerService.getdvlpr(this.slctdId);
    }

    onAddItem(dvlpr: any) {
      this.developerService.addItem(dvlpr.value);
    }

    onEditItem(dvlpr: any) {
      this.developerService.editItem(dvlpr.value);
    }

  
}
