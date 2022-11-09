import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { Router } from '@angular/router';
import { LoginServiceService} from '../login-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public customer:Customer=new Customer();    

  constructor(private router:Router) { }

  
  

  ngOnInit(): void {
    console.log("here");
  }

  onSubmit(){
      this.router.navigate(['login']);
  }

}
