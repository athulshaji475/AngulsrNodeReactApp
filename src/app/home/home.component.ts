import { Component, OnInit } from '@angular/core';
import { Users } from 'src/Service/class/Users';
import { UsersServiceService } from 'src/Service/users-service.service';
import { Router } from '@angular/router';
import { Route } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
public  user=new Users()

  constructor( public  userservice:UsersServiceService,public route:Router ) { }

  ngOnInit(): void {
  }




  //------------------------------------------------------------------------------------
  CheckData()
  {
    try {
  console.log(this.user)
    this.userservice.CheckData(this.user).subscribe((data:any)=>{
     
if(data.length > 0)
{
  
  console.log(data)

this.route.navigate(['/list'])

}
else
{
  alert("User Does not Exists...")
}
    },(error)=>{console.log(error)})
    } catch (error) {
      console.log("Error=>"+error)
    }
    
  }

  //----------------------------------------------------------------------------
}
