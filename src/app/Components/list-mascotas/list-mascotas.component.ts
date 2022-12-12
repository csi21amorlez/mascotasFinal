import { Component, OnInit } from '@angular/core';
import { MascotaService } from '../../Models/Services/mascota.service';
import { Mascota } from '../../Models/Interfaces/mascota';

@Component({
  selector: 'app-list-mascotas',
  templateUrl: './list-mascotas.component.html',
  styleUrls: ['./list-mascotas.component.css'],
})
export class ListMascotasComponent implements OnInit {
  constructor(private mascService: MascotaService) {}

  listMascotas: Mascota[] = [];
  selectedMascota?:Mascota;

  ngOnInit(): void {}

//Obtenemos las mascotas
  getAll() {
    this.mascService.getAllMascotas().subscribe((resp: any) => {
      resp.array.forEach((mascota: any) => {
        this.listMascotas = [];
        this.listMascotas.push({
          id: mascota.payload.doc.id,
          data: mascota.payload.doc.data(),
        });
      });
    });
  }

  selectMascota(mascota:Mascota){
    this.selectedMascota = mascota;
  }




}
