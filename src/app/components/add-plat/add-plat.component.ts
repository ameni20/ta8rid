import { PlatService } from './../../services/plat.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-plat',
  templateUrl: './add-plat.component.html',
  styleUrls: ['./add-plat.component.css']
})
export class AddPlatComponent implements OnInit {

  id: any;
  title: string = "Add Plat";
  plat: any = {};
  addPlatForm: FormGroup;
  imagePreview:any;
  constructor(
    private formBuilder: FormBuilder,
    private platService: PlatService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id) {
      this.title = "Edit Plat";
      this.platService.sendRequestToGetPlatById(this.id).subscribe(
        (data) => {
          this.plat = data.plat;
        }
      )
    }
    this.addPlatForm = this.formBuilder.group({
      name: [''],
      description: [''],
      price: [''],
      note: [''],
      img: ['']
    });
  }

  addOrEditPlat() {
    console.log('Here to add Plat', this.plat);
    if (this.id) {
      // send request to edit Plat
      this.platService.sendRequestToEditPlat(this.plat).subscribe(
        (data) => {
          console.log('Message from BE', data.message);
          this.router.navigate(['admin']);
        }
      )
    } else {
      // send request to add Plat
      this.platService.sendRequestToAddPlat(this.plat, this.addPlatForm.value.img).subscribe(
        (data) => {
          console.log('Message from BE', data.message);
          this.router.navigate(['admin']);
        }
      )
    }
  }

  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    console.log('Here selected file', file);
    this.addPlatForm.patchValue({ img: file });
    this.addPlatForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
  }

}
