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
  clientsRes: any[] = [];
  productsRes: any[] = [];
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
        this.content = this.dataService.getClients();
        break;
      case 'Products':
        this.content = this.dataService.getProducts();
        break;
      case 'Reservations':
        this.content = this.dataService.getReservations();
        this.clientsRes = this.dataService.getClients();
        this.productsRes = this.dataService.getProducts();
        break;
      default:
        console.log('default');
        break;
    }
    
  }

  goToDetail(id: number) {
    this.router.navigate(['item-detail', id]);
  }

  getClientName(id: number) {
    let client = this.clientsRes.find(client => client.id === id);
    return client?.nombre;
  }
  
  getProductName(id: number) {
    let product = this.productsRes.find(product => product.id === id);
    return product?.nombre;
  }
}
