import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.css'
})
export class AddproductComponent {
  isEditMode: boolean | undefined;
  constructor(private http:HttpClient)
  {
    let url=this.baseurl+'read';
    this.http.get(url).subscribe((data:any)=>
    {
      this.list=data;
    });
  }

  baseurl="http://localhost:8080/";
  list:any[]=[];
  id:number=0;
  code:number=0;
  name:String='';
  price:number=0;
  qnt:number=0;

  add1()
  {
    let url=this.baseurl+'add12'+this.id+'and'+this.code+'and'+this.name+'and'+this.price+'and'+this.qnt;
    this.http.get(url).subscribe((data:any)=>
    {
      this.list.push(data);
      this.id=0;
      this.code=0;
      this.name='';
      this.price=0;
      this.qnt=0;
    });
  }
  delete(obj:any)
  {
    let url=this.baseurl+'delete'+obj.id;
    this.http.get(url).subscribe((data:any)=>
    {
    if(data==true)
    {
     let index=this.list.indexOf(obj);
     this.list.splice(index,1);
    }
    else{
      window.alert('Something is wrong');
    }
    });
  }


  //update
  // update(obj: any) {
  //   let url = this.baseurl + 'update' + obj.id;
  //   this.http.get(url).subscribe((data: any) => {
  //     if (data == 1) {
  //       window.alert('Product updated successfully!');
  //       // Optionally, update the local list if necessary
  //     } else {
  //       window.alert('Update failed. Product not found.');
  //     }
  //   });
  // }

  edit(obj: any) {
    this.isEditMode = true;
    this.id = obj.id;
    this.code = obj.code;
    this.name = obj.name;
    this.price = obj.price;
    this.qnt = obj.qnt;
  }

  // Clear the form after adding or updating
  clearForm() {
    this.id = 0;
    this.code = 0;
    this.name = '';
    this.price = 0;
    this.qnt = 0;
    this.isEditMode = false;
  }

  // Refresh the list after updating
  refreshList() {
    let url = this.baseurl + 'read';
    this.http.get(url).subscribe((data: any) => {
      this.list = data;
      this.clearForm();
    });
  }

}
