import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface conta{
  usuario: string,
  senha: string,
  nome: string,
  celular: string,
  email: string,
  cpf: string,
  tipoConta: string
}

@Injectable({
  providedIn: 'root'
})
export class ContaMestreService {

  private contaMestreCollection: AngularFirestoreCollection<conta>;

  private contaMestre: Observable<conta[]>;

  constructor(db: AngularFirestore) {
    this.contaMestreCollection = db.collection<conta>('conta');

    this.contaMestre = this.contaMestreCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

   getContaMestre() {
    return this.contaMestre;
  }
 
  getContaMestreId(id) {
    return this.contaMestreCollection.doc<conta>(id).valueChanges();
  }

  updateContaMestre(contaMestre: conta, id: string) {
    return this.contaMestreCollection.doc(id).update(contaMestre);
  }
 
  addContaMestre(contaMestre: conta) {
    return this.contaMestreCollection.add(contaMestre);
  }
 
  removeContaMestre(id) {
    return this.contaMestreCollection.doc(id).delete();
  }

}
