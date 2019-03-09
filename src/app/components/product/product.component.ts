import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private itemService: ItemsService) { }
  public Products: any;
  ngOnInit() {
    this.itemService.getItems()
    .subscribe(data => {
      console.log('data------>', data);
      this.Products = data.products;
    })
  }

  addProduct(){
    
  }

}
