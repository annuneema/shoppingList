import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validator, FormGroup, Validators } from '@angular/forms'
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  addProductForm: FormGroup;
  constructor(private formbuilder: FormBuilder) { }

  ngOnInit() {
    this.createFormAddProduct();
  }

  createFormAddProduct(){
    this.addProductForm = this.formbuilder.group({
      title:['',[Validators.required]],
      category:['',[Validators.required]],
      
    })
  }
}
