import{FormControl} from '@angular/forms'

export class confirmPasswordValidator{

    static isValid(control: FormControl,password: String): any{
        if(control.value != password){
            return {"Please enter the same password again": true}
        }

    }

}