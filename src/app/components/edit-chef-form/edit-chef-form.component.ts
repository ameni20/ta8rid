import { ChefService } from './../../services/chef.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-chef-form',
  templateUrl: './edit-chef-form.component.html',
  styleUrls: ['./edit-chef-form.component.css']
})
export class EditChefFormComponent implements OnInit {

  editChefForm: FormGroup;
  findedChef:any= {};
  id:any;
  constructor(
    private formBuilder: FormBuilder,
    private chefService: ChefService,
    private router: Router,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.chefService.sendRequestToGetChefById(this.id).subscribe(
      (data)=> {
        this.findedChef = data;
      }
    )
    this.editChefForm = this.formBuilder.group({
      name: [''],
      speciality: [''],
      experience: ['']
    });
  }

  editChef() {
    this.chefService.sendRequestToEditChef(this.findedChef).subscribe(
      () => {
        console.log('Chef Edited with success');
        this.router.navigate(['admin']);
      }
    )
  }

}
