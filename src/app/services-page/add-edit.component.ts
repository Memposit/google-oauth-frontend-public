import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {ServicesService} from '../services/services.service';

export const APP_DATE_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  },
};

@Component({
  templateUrl: './add-edit.component.html',
  providers: [
    {provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS},
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]},
    {provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: {useUtc: true}}
  ]
})
export class ServicesAddEditComponent implements OnInit {

  id: any;
  form: FormGroup;
  errorMessage;

  constructor(private servicesService: ServicesService, private router: Router, private fb: FormBuilder, private route: ActivatedRoute) {
    this.createForm();
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    if (this.id) {
      this.servicesService.find(this.id).subscribe(x => this.form.patchValue(x));
    }
  }

  createForm() {
    this.form = this.fb.group({
      name: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ]],
      price: ['', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(100),
      ]],
      validFrom: ['', Validators.required]
    });
  }

  onSubmit() {
    var response = this.id ? this.servicesService.update(this.id, this.form.value) : this.servicesService.create(this.form.value);

    response.subscribe(
      data => {
        console.log('Services created / updated successfully!');
        this.router.navigateByUrl('services/list');
      }
      ,
      err => {
        this.errorMessage = err.error.message;
      }
    );
  }
}
