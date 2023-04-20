import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from 'src/Service/users-service.service';
import { Users } from 'src/Service/class/Users';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {


  public user=new Users
  constructor(public userservice:UsersServiceService) { 
    

    setTimeout(() => {
      this.GetAllData()
    },2000);
  }

  ngOnInit(): void {
  }

public list:any


GetAllData()
{
  try {
    this.userservice.GetAllUsersData().subscribe((data:any)=>{
      this.list=data
      console.log(this.list)
    })
    
  } catch (error) {
    
  }
}

}
