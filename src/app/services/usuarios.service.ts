import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface usuarios{
  usuario: string;
  senha: string;
  nome: string;
  celular: string;
  email: string;
  cpf: string;
  vgaEspecial: string;
  plano: string;
  tipoUsuario: string;
  placaCarro: string;
  tipoVeiculo: string;
  modelo: string;
  chassi: string;
  proprietario: string;
  marca: string;
  cor: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private usuariosCollection: AngularFirestoreCollection<usuarios>;
  
  private usuarios: Observable<usuarios[]>;

  constructor(db: AngularFirestore) { 
    this.usuariosCollection = db.collection<usuarios>('usuarios');
    
    this.usuarios = this.usuariosCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  getUsuarios() {
    return this.usuarios;
  }
 
  getUsuariosId(id) {
    return this.usuariosCollection.doc<usuarios>(id).valueChanges();
  }
 
  updateUsuarios(usuarios: usuarios, id: string) {
    return this.usuariosCollection.doc(id).update(usuarios);
  }
 
  addUsuarios(usuarios: usuarios) {
    return this.usuariosCollection.add(usuarios);
  }
 
  removeUsuarios(id) {
    return this.usuariosCollection.doc(id).delete();
  }
}
