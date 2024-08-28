import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss'
})
export class DataBindingComponent {

  url: string = 'http://loaine.com';
  cursoAngular: boolean = true;
  urlImagem: string = 'http://lorempixel.com.br/400/200/?2';

  valorAtual: string = '';
  valorSalvo: any;

  isMouseOver: boolean = false;


  getValor(){
    return 1
  };

  getCurtirCurso(){
    return true
  };

  botaoClicado(){
    alert('Botao Clicado!')
  };

  onKeyUp(evento: KeyboardEvent){
    console.log();
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  };

  salvarValor(valor: any){
    this.valorSalvo = valor;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

}
