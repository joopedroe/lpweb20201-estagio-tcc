import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { AuthService } from './auth.service';
import { interval } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PerfilService {
  results: any;

  constructor(private http: HttpClient, private auth$: AuthService) { }

  perfilLogado() {
    return this.http.get(environment.API_URL.concat('perfil-logado/'), this.auth$.httpOptions());
  }

  criarPerfil(perfil) {
    return this.http.post(environment.API_URL.concat('perfis/'),perfil, this.auth$.httpOptions());
  }

  updatePerfil(perfil,id) {
    return this.http.put(environment.API_URL.concat(`perfis/${id}/`),perfil, this.auth$.httpOptions());
  }

  
  
  getPerfil(): Promise<any> {
    return this.http.get(environment.API_URL.concat('perfil-logado/'), this.auth$.httpOptions()).toPromise();
  }
  
}
