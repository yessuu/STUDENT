import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formularioUsuario: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private router: Router,
    private _UsuariosService: UsuariosService) {
    this.formularioUsuario = fb.group({
      user: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
    });
  }

  ngOnInit(): void {
  }

  agregarUsuario() {
    const usuario = this.formularioUsuario.value.user;
    const password = this.formularioUsuario.value.password

    if (usuario == 'Yesica' && password == 'prueba123') {
      //REDIRECCIONA A INICIO
      this.fakeLoad();

      console.log(usuario)
      console.log(password)
    }
    else {
      this.error();
      this.formularioUsuario.reset();
    }

  }

  error() {
    this._snackBar.open('Usuario o contraseña incorrectos!!', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }

  fakeLoad() {
    this.loading = true;
    setTimeout(() => {
      this.router.navigate(['dashbord'])
    }, 1500);
  }
  
}
