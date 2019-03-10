import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private itemService: ItemsService, private router: Router) { }
  public Products: any;
  public AddProductFlag: boolean;
  ngOnInit() {
    this.Products = this.itemService.GetProductList();
  }

  AddProduct() {
    this.AddProductFlag = true;
  }

  onSelect(product) {
    this.router.navigate(['/detail', product.id])
  }

  public UpdateList(data) {
    this.itemService.SetProduct(data);
    this.AddProductFlag = false;
  }

}
