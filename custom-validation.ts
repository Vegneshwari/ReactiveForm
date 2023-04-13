import { AbstractControl, FormGroup } from "@angular/forms";

export class CustomValidation{

  static createPassword(control: AbstractControl)
  {
      if((/^(?=.*[a-z]?)(?=.[A-Z]*?)(?=.[0-9]*?)(?=.[!@#\$%\^&\*\+]*?)(?=.[0-9a-zA-Z!@#\$%\^&\*\+\.]*).{8,}$/).test(control.value))
      {
        return null;
      }
        return {'InvalidPassword': true};
 
}

  static matchPassword(control: AbstractControl)
  {
    const pass = control.get('address')?.get('password')?.value;
    const conf = control.get('address')?.get('confirmPassword')?.value;
  
    if (CustomValidation.emptyPassword(pass) && CustomValidation.emptyPassword(conf)) {
      return null;
    }
  
    return pass === conf ? null : { 'InvalidMatchPassword': true };
  }
  
  static emptyPassword(value: any){
    return value === null || value === ''; 

  }

/*   if(pass === conf ){
    return null;
  }
  return (pass===null && conf===null) ? null : {'InvalidMatchPassword': true};

} */

/* try with with after
if(){

}
then(){ 

}
else(){

} */



   static phoneNumber(control: AbstractControl)
   {
      if((/^[0-9]{2}\+[789]{1}[0-9]{9}$/).test(control.value))
      {
          return null;
      }
      return {'PhoneNumberInvalid': true};
  
    }

   static email(control: AbstractControl){

    if((/^[a-z0-9]+@[a-z0-9]+\.[a-z]{2,}$/).test(control.value)){  

      return null;
    }
    return { 'InvalidEmail': true };
   }

}



