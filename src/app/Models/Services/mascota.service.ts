import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class MascotaService {
  constructor(private fire: AngularFirestore) {}

  //Obtiene todas las mascotas de la base de datos
  getAllMascotas() {
    return this.fire.collection('mascotas').snapshotChanges();
  }

  //Obtiene una mascota en concreto de la base de datos
  getMascota(documentId: string) {
    return this.fire.collection('mascotas').doc(documentId).snapshotChanges();
  }

  //Crea una mascota y la introduce en la base de datos
  createMascota(data: any) {
    return this.fire.collection('mascotas').add(data);
  }

  //Actualiza una mascota de la base de datos
  updateMascota(documentId:string, data:any){
    this.fire.collection('mascotas').doc(documentId).update(data);
  }

  //Elimina una mascota de la base de datos
  deleteMascota(documentId:string){
    return this.fire.collection('mascotas').doc(documentId).delete;
  }
}
