import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  standalone: false,
  
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss'
})
export class CursosComponent  implements OnInit {

  nomePortal: string;

  cursos: string[];

  constructor(private cursosService: CursosService) {
    this.nomePortal = 'http://loiane.training';

    // for (let i = 0; i < this.cursos.length; i++){
    //   let curso = this.cursos[i];
    // };

    // var servico = new CursosService();

    this.cursos = this.cursosService.getCursos();
  }

  ngOnInit(){

  }
}
