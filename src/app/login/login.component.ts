import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router} from '@angular/router';
import {LoginService} from '../login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public rt:Router , public ls:LoginService) { }

  

  ngOnInit(): void {
    this.ls.loginStatus= false;

  }
   
 
  


  doLogin(ref: NgForm)
  { 
   
   let username =""
   let password =""
       console.log();

  let userObj= (ref.value);
   console.log(userObj)


    // verify user credentails

    if(userObj.username !== username)
    {
       alert("invalid username")
      
    }
     else if(userObj.password !== password)
    {
      alert("invalid password")
    

    }
    else
    {


      //update the status
       this.ls.loginStatus= true;
       this.ls.username=username;
       
     
      // alert("credentals are correct")
      //  alert("logged in successfully")
       //navigate to the targeted component
     this.rt.navigate(["/carrers"])
    
    }
    
  }
}
