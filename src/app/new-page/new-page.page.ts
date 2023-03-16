import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServiceService } from '../services/data-service.service';
@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.page.html',
  styleUrls: ['./new-page.page.scss'],
})
export class NewPagePage implements OnInit {

  content: any[] = [];
  tab: string|null = "";
  constructor(
    private activatedRoute: ActivatedRoute, 
    private dataService: DataServiceService,
    private router: Router
    ) { }

  ngOnInit() {
    this.tab = this.activatedRoute.snapshot.paramMap.get('tab');

    if(this.tab !== null) {
      this.tab = this.tab?.charAt(0).toUpperCase() + this.tab?.slice(1);
    }

    switch(this.tab) {
      case 'Clients':
        console.log('clients');
        this.content = this.dataService.getClients();
        break;
      case 'Products':
        console.log('products');
        this.content = this.dataService.getProducts();
        break;
      case 'Reservations':
        console.log('reservations');
        this.content = this.dataService.getReservations();
        break;
      default:
        console.log('default');
        break;
    }

    console.log(this.content);
    
  }

  goToDetail(id: number) {
    this.router.navigate(['item-detail', id]);
  }

}
