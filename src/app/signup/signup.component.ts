import { Component } from '@angular/core';
import { Registration } from '../models/registration';
import { RegistrationService } from '../services/registration.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  student:Registration=new Registration
constructor(private service:RegistrationService){}
ngOnInit():void{}
  submitting():void{
    this.service.submit(this.student).subscribe(
      response=>{
        console.log("data is successfully inserted",response)
        Swal.fire("successfully inserted")
      },
      error=>{
        console.log("error dected",error)
        Swal.fire("unsuccessfully inserted")
      }

    )
  }

}
