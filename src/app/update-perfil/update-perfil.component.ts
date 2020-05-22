import { Component, OnInit } from '@angular/core';
import { Perfil } from '../models/Perfil';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PerfilService } from '../perfil.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-update-perfil',
  templateUrl: './update-perfil.component.html',
  styleUrls: ['./update-perfil.component.css']
})
export class UpdatePerfilComponent implements OnInit {
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
    if (this.user) {
      this.perfil$.perfilLogado()
        .subscribe(
          dados => this.perfil = dados,
          erro => this.temPerfil = false
        );
    } else {
      this.router.navigate(['/login']);
    }
  }
  updatePerfil(){
    console.log("------")
    this.perfil$.updatePerfil(this.perfil,this.perfil.id)
      .subscribe(
        user => {
          this.router.navigate(['/perfil']);
        },
        err => this.error = err.error
      );

  }

}
