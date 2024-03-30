import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit{
  @Input() imagen:string = '';
  @Input() name:string = '';
  @Input() price:number = 0;
  priceTemp:number = 0;
  constructor() {
  }
  ngOnInit(): void {
    this.priceTemp = this.price;
  }
  mediana(){
    this.priceTemp = Math.round(this.price);
  }
  grande(){
    this.priceTemp = Math.round(this.price*1.25);
  }
  familiar(){
    this.priceTemp = Math.round(this.price*1.35);
  }
}
