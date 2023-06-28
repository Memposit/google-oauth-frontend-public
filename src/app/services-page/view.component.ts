import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Services} from './services';
import {ServicesService} from '../services/services.service';

@Component({templateUrl: './view.component.html'})
export class ServicesViewComponent implements OnInit {

  id: number;
  services: Services;

  constructor(
    public servicesService: ServicesService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;

    this.servicesService.find(this.id).subscribe((data: Services) => {
      this.services = data;
    });
  }

}
