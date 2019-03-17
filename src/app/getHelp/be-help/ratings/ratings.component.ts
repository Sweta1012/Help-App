import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.css']
})
export class RatingsComponent implements OnInit {

  @Input() rating: number;
  rating_arr: any = [];
  @Output() childToParent: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.rating_arr = Array(Math.round(this.rating)).fill(Math.round(this.rating));
    console.log(this.rating_arr);
  }

  sendRatings() {
    this.childToParent.emit('rating value: ' + this.rating);
  }

}
