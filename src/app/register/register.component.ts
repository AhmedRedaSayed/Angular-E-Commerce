import { Component, OnInit } from '@angular/core';
import {FormGroup , FormControl,Validators} from '@angular/forms'
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private _AuthService:AuthService,private _Router:Router){

  }
  ngOnInit(): void {
    if(localStorage.getItem('userToken')!==null)

    {
      this._Router.navigate(['/home'])
    }
  }

isLoading:boolean=false;
apiError:string='';
  registerForm:FormGroup = new FormGroup({
    name: new FormControl(null,[Validators.required , Validators.minLength(3)]),
    email: new FormControl(null,[Validators.required , Validators.email]),
    password: new FormControl(null,[Validators.required , Validators.pattern(/^[A-Z][a-z0-9]{8,10}$/)]),
    rePassword: new FormControl(null,[Validators.required , Validators.pattern(/^[A-Z][a-z0-9]{8,10}$/)]),
    phone: new FormControl(null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]),
  },{validators: this.rePasswordValidation});



  rePasswordValidation(registerForm:any){

    let passwordControl = registerForm.get('password')
    let rePasswordControl = registerForm.get('rePassword')

    if(passwordControl?.value === rePasswordControl?.value)
    {
      return null;
    }
    else
    {
      rePasswordControl?.setErrors({passwordMatch:'Password Not Match'})
      return {passwordMatch:'Password Not Match'}
    }

  }


  hanldeRegister (registerForm:FormGroup){
    this.isLoading=true;

    if(registerForm.valid)
    {

      this._AuthService.register(registerForm.value).subscribe({
        next:(response)=>{
          if(response.message === 'success')
          {
            this.isLoading=false;

            this._Router.navigate(['/login'])

          }
        },
        error:(err)=>{
          this.isLoading=false;
          console.log(err)
          this.apiError=err.error.message;


        }
      })

    }

  }
}
