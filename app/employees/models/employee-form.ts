//ModelDrivenReactiveForm with Validations
import { FormGroup, FormControl, Validators } from '@angular/forms';

export class EmployeeForm {
    employeeForm = new FormGroup({
        employeeId: new FormControl("0", Validators.required),
        email: new FormControl(),
        employeeName: new FormControl('No Event', [Validators.required, Validators.maxLength(50)]),
        city: new FormControl(),
        address: new FormControl(),
        phone: new FormControl('No Event', [Validators.required, Validators.maxLength(10)]),        
        avatar:new FormControl("images/noimage.png")
    });
}
