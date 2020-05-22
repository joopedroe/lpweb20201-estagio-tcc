import { Component, OnInit } from '@angular/core';
import { Perfil } from '../models/Perfil';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PerfilService } from '../perfil.service';
import { AuthService } from '../auth.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-cadastro-perfil',
  templateUrl: './cadastro-perfil.component.html',
  styleUrls: ['./cadastro-perfil.component.css']
})
export class CadastroPerfilComponent implements OnInit {
  user: any;
  perfil:any;
  error: any;
  perfilCadastrado: any;
  temPerfil = true;

  constructor(public auth$: AuthService, private perfil$: PerfilService, private router: Router) { 
    

  }
  

  ngOnInit(): void {
    this.user = this.auth$.user();
    this.perfil=new Perfil(this.user.id,null,null,null,null,null,null,null,null);
  }
  
  salvar(){
    this.cadastrarPerfil()
  }



  
  cadastrarPerfil(){
    if (this.user) {
      console.log("------")
      this.perfil$.criarPerfil(this.perfil)
        .subscribe(
          user => {
            this.router.navigate(['/perfil']);
          },
          err => this.error = err.error
        );
    } else {
      this.router.navigate(['/login']);
    }
  }

}
