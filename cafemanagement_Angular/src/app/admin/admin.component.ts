import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'] // Corrected styleUrls
})
export class AdminComponent {
  constructor(private http:HttpClient, private router:Router)
  {
    let url=this.baseurl+'read';
    this.http.get(url).subscribe((data:any)=>
    {
      this.list=data;
    });
  }
 
  baseurl="http://localhost:8080/";

  list:any[]=[];

  loginStatus:number=0;
  username:String='';
  password:String='';

  Login()
  {
    let url=this.baseurl+'alogin'+this.username+'and'+this.password;
    this.http.get(url).subscribe((data:any)=>
    {
      if(data==1)
      {
        this.loginStatus=1;
        window.alert('Login Successfull!!');
        this.router.navigate(['/dashboard']);
      }
      else if(data==2)
      {
        window.alert('Username is wrong..');
      }
      else if(data==3)
      {
        window.alert('Password is wrong..');
      }
      else
      {
        window.alert('Something is wrong..');
      }
    });
  }

  logout()
  {
    this. loginStatus=0;
  }
}