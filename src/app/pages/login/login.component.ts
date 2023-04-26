import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/models/LoginModel';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @ViewChild('emailLabel') emailLabel: ElementRef | undefined;
  @ViewChild('passLabel') passLabel: ElementRef | undefined;
  loginForm!: FormGroup<LoginModel>;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService
  ) {}

  onFocusInput(nameLabel: string) {
    if (nameLabel === 'emailLabel') {
      this.emailLabel?.nativeElement.classList.add('label-focus');
    } else if (nameLabel === 'passLabel') {
      this.passLabel?.nativeElement.classList.add('label-focus');
    }
    return;
  }

  onBlurInput(nameLabel: string) {
    if (nameLabel === 'emailLabel') {
      this.emailLabel?.nativeElement.classList.remove('label-focus');
    } else if (nameLabel === 'passLabel') {
      this.passLabel?.nativeElement.classList.remove('label-focus');
    }
    return;
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    const dadosLogin = this.loginForm.getRawValue();

    this.loading = true;
    this.loginService
      .login(dadosLogin.email as string, dadosLogin.password as string)
      .subscribe({
        next: (response) => {
          this.loading = false;
          localStorage.setItem(
            'currentUser',
            JSON.stringify({
              token: response.access_token,
              user: response.firstname,
            })
          );
          this.router.navigate(['/abertura']);
          console.log(response);
        },
        error: () => {
          this.loading = false;
        },
      });
  }
}
