import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute } from '@angular/router';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  public productId;
  public product;
  constructor(private router: ActivatedRoute, private items: ItemsService) { }

  ngOnInit() {
    const products = this.items.GetProductList();
    this.productId = this.router.snapshot.paramMap.get('id');
    this.product =  products.filter(product => product.id == this.productId )[0];
  }

}
