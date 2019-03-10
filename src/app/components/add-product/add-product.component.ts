import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { ItemsService } from 'src/app/services/items.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  addProductForm: FormGroup;
  products: any = [];
  @Output() public sendData = new EventEmitter();
  constructor(private formbuilder: FormBuilder, private router: Router, private itemService: ItemsService) { }

  ngOnInit() {
    this.createFormAddProduct();
  }

  createFormAddProduct() {
    this.addProductForm = this.formbuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      category: ['', [Validators.required]],
      amount: ['', [Validators.required]]
    })
  }

  addProduct() {
    let product = {
      "id": 23,
      "imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/M63H24W7JF0-L302-ALTGHOST?wid=1500&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0",
      "name": this.addProductForm.get('name').value,
      "description": this.addProductForm.get('description').value,
      "category": this.addProductForm.get('category').value,
      "price": this.addProductForm.get('amount').value,
    };
    this.sendData.emit(product);
  }
}
