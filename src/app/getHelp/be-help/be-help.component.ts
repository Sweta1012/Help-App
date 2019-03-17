import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../../shared/product-service.service';

@Component({
  selector: 'app-be-help',
  templateUrl: './be-help.component.html',
  styleUrls: ['./be-help.component.css'],
  providers: [ProductServiceService]
})
export class BeHelpComponent implements OnInit {

  products: any = [];
  showhideImg: boolean = true;
  filterBy: String = '';

  constructor(private _prodService: ProductServiceService) { }

  ngOnInit() {
   this._prodService.getProducts().subscribe((data) => {
    this.products = data;
    });
  }

  toggleImage() {
    this.showhideImg = !this.showhideImg;
  }

  receiveRating(data: string) {
    console.log(data);
  }

}
