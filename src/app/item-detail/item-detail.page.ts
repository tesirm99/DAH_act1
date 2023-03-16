import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServiceService } from '../services/data-service.service';
@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.page.html',
  styleUrls: ['./item-detail.page.scss'],
})
export class ItemDetailPage implements OnInit {

  id: number = -1;
  item: any = null;
  constructor(
    private activatedRoute: ActivatedRoute, 
    private dataService: DataServiceService,
    private router: Router
  ) { }

  ngOnInit() {
    
    let n = this.activatedRoute.snapshot.paramMap.get('id');
    if(n != null) {
      this.id = parseInt(n);
    }
    
    this.item = this.dataService.getClientById(this.id);
  }

  goHome(){
    this.router.navigate(['/']);
  }
}
