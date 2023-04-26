import { FormControl } from '@angular/forms';

export class LoginModel {
  email!: FormControl<string | null>;
  password!: FormControl<string | null>;
}
