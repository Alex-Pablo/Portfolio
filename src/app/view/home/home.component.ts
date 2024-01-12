import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { CommandComponent } from '../../components/command/command.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommandComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  ngOnInit(){
    this.toggleDarkTheme();
  }

  toggleDarkTheme(): void {
    document.body.classList.toggle('dark-theme');
  }
}
