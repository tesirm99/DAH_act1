import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent {

  @Input() name?: string;
  @Input() url?: string;

  constructor(private router: Router) { }

  ngOnInit() {
    if(this.name !== undefined) {
      this.name = this.name?.charAt(0).toUpperCase() + this.name?.slice(1);
    }
  }

  navigateToURL() {
    this.router.navigate(['new-page/' + this.url]);
  }

}
