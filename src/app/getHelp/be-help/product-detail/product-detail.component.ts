import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe((data) => {
      console.log(data);
    });
  }

  goBack() {
    this._router.navigate(['/behelp']);
  }

}
