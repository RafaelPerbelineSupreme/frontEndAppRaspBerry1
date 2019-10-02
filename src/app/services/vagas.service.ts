import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface vagas{
  nomeLocal: string;
  preco: string;
  localizacao: string;
  disponibilidade: string;
  horarioFuncionamento: string;
  tipoVaga: string;
}

@Injectable({
  providedIn: 'root'
})
export class VagasService {

  private vagasCollection: AngularFirestoreCollection<vagas>;

  private vagas: Observable<vagas[]>;
  
  constructor(db: AngularFirestore) { 
    this.vagasCollection = db.collection<vagas>('vagas');

    this.vagas = this.vagasCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  getVagas() {
    return this.vagas;
  }
 
  getVagasId(id) {
    return this.vagasCollection.doc<vagas>(id).valueChanges();
  }
 
  updateVagas(vagas: vagas, id: string) {
    return this.vagasCollection.doc(id).update(vagas);
  }
 
  addVagas(vagas: vagas) {
    return this.vagasCollection.add(vagas);
  }
 
  removeVagas(id) {
    return this.vagasCollection.doc(id).delete();
  }
}
