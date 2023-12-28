import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from 'src/app/service/product.service';
@Component({
  selector: 'app-add-product-component',
  templateUrl: './add-product-component.component.html',
  styleUrls: ['./add-product-component.component.css']
})
export class AddProductComponentComponent {
  constructor(private formBuilder: FormBuilder, private service : ProductService) { }


  fg !: FormGroup;

  ngOnInit() {
    this.fg = this.formBuilder.group({
      id: [0],
      name: ['', Validators.required],
      price: ['', [Validators.required, Validators.pattern('^[0-9]+')]],
      description: ['', [Validators.required , Validators.minLength(10)]],
    });
  }
  onSubmit() {
    if (this.fg.valid) {
      // Form is valid, perform necessary actions
      console.log(this.fg.value);
      this.service.addProduct(this.fg.value).subscribe((data)=>{
        console.log(data);
        alert("product added succefully")
      })
    } else {
      // Form is invalid, display error messages or take appropriate action
    }
  }
}
