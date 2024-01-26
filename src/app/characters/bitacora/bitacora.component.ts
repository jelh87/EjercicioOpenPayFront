import { Component, OnInit } from '@angular/core';
import { CharactersApiService } from '../character/shared/characters-api.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bitacora',
  templateUrl: './bitacora.component.html',
  styleUrls: ['./bitacora.component.css']
})
export class BitacoraComponent implements OnInit {

  constructor(private characterSvc: CharactersApiService, private router: Router) { }
  allBitacora: Observable<any>;

  ngOnInit(): void {
    this.getAllBitacora();
  }

  getAllBitacora() {
    this.allBitacora = this.characterSvc.getBitacora();
  }

}
