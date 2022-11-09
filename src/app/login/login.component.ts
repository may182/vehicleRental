import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';
import { User } from '../model/user';
import { UserSpring } from '../model/user-spring';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user:User=new User();
  public userspr:User=new UserSpring();

  constructor(private router:Router,private loginService:LoginServiceService) { }

  ngOnInit(): void {
    console.log("login1");
  }

  onSubmit(){
    console.log("Logged");
    console.log(this.user);
    this.loginService.loginUser(this.user).subscribe(data=>{
      this.loginService.getUserData(this.user.userId).subscribe(data1=>{
        this.userspr=data1;
        console.log("enteredHere");
        console.log(data1);
        if(data1.role==="User"){
          this.router.navigate(['userArea']);
        }
        else{
          this.router.navigate(['adminMonopoly']);
        }
      })
    },error=>alert("wrong Id password"));
    
  }

  booking(){
    console.log("Login");
    this.router.navigate(['register']);
  }

}
