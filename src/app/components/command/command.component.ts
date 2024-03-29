import {
  Component,
  AfterViewInit,
  Renderer2,
  ElementRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-command',
  standalone: true,
  imports: [],
  templateUrl: './command.component.html',
  styleUrl: './command.component.css',
})
export class CommandComponent {
  @ViewChild('miInput') miInput!: ElementRef;
  renponse: string = '';
  reponseStatus: number = 0;

  executeComand(event: any) {
    const commando = event.target.value.trim();
    switch (commando) {
      case 'help':
        this.reponseStatus = 2;
        break;
      case 'email':
        this.reponseStatus = 3;
        break;
      case 'ls':
        this.reponseStatus = 4;
        break;
      case 'cat habilidades':
        this.reponseStatus = 5;
        break;
      case 'cat trabajos':
        this.reponseStatus = 6;
        break;
      case 'cat experiencia':
        this.reponseStatus = 7;
        break;
      case 'cat CV':
        this.reponseStatus = 8;
        this.openPDF();
        break;
      default:
        this.reponseStatus = 1;
        this.renponse = `No se reconce el comanado: ${commando}`;
        break;
    }
  }

  openPDF(){
    window.open('../../../assets/cvAlexPablo.pdf', '_blank');
  }

  ngAfterViewInit() {
    this.miInput.nativeElement.focus();
    document.addEventListener('click', (event) => {
      if (!this.miInput.nativeElement.contains(event.target)) {
        this.miInput.nativeElement.focus();
      }
    });
  }
}
