import { Component, OnInit } from '@angular/core';
import { LoginService} from '../login.service';
import { TestService} from '../test.service'
 

@Component({
  selector: 'app-carrers',
  templateUrl:'./carrers.component.html',
  styleUrls: ['./carrers.component.css']
})
export class CarrersComponent implements OnInit {
  title : "Pratice" ;
  
  
  searchTerm :string;

  userName:string;
  MyData:object[]=[];
 
  constructor(public ls:LoginService , public ts:TestService) { }

  ngOnInit(): void {
     this.userName=this.ls.username;

  //  getting the data from url
    this.ts.getData().subscribe(
      (data)=>{this.MyData=data},
      (err)=>{console.log(err)}
    )
  }

}
