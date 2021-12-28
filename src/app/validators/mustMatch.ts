import { FormGroup } from '@angular/forms';

export function MustMatch(formControl: string, confirmedFormControl: string) {
    return (formGroup:FormGroup)=> {
        const formControlInput = formGroup.controls[formControl];
        const confirmedFormControlInput = formGroup.controls[confirmedFormControl];

        if (formControlInput.value !== confirmedFormControlInput.value ) {
            confirmedFormControlInput.setErrors({mustMatchError:true})
        } else {
            confirmedFormControlInput.setErrors(null);
        }
    }
}