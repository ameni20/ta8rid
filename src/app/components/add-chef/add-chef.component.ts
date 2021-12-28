import { ChefService } from './../../services/chef.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-chef',
  templateUrl: './add-chef.component.html',
  styleUrls: ['./add-chef.component.css']
})
export class AddChefComponent implements OnInit {

  addChefForm: FormGroup;
  imagePreview: any;
  constructor(
    private formBuilder: FormBuilder,
    private chefService: ChefService,
    private router: Router) { }

  ngOnInit() {
    this.addChefForm = this.formBuilder.group({
      name: [''],
      speciality: [''],
      experience: [''],
      img: ['']
    });
  }

  addChef() {
    console.log('Here chef object', this.addChefForm.value);
    this.chefService.sendRequestToAddChef(this.addChefForm.value, this.addChefForm.value.img).subscribe(
      () => {
        console.log('Chef added with success');
        this.router.navigate(['admin']);
      }
    )
  }

  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    console.log('Here selected file', file);
    this.addChefForm.patchValue({ img: file });
    this.addChefForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
  }

}
