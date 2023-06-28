import {Component, OnInit} from '@angular/core';
import {Services} from './services';
import {PageEvent} from '@angular/material/paginator';
import {ServicesService} from '../services/services.service';

@Component({templateUrl: './list.component.html'})
export class ServicesListComponent implements OnInit {

  services: Services[] = [];
  totalElements: number = 0;
  accountDto: any;

  constructor(public servicesService: ServicesService) {
  }

  ngOnInit(): void {
    this.getServices({page: '0', size: '5'});
  }

  private getServices(request) {
    this.servicesService.getAll(request)
      .subscribe(data => {
          this.services = data['content'];
          this.totalElements = data['totalElements'];
        }
        , error => {
          console.log(error.error.message);
        }
      );
  }

  nextPage(event: PageEvent) {
    const request = {};
    request['page'] = event.pageIndex.toString();
    request['size'] = event.pageSize.toString();
    this.getServices(request);
  }

}
