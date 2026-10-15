import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-contact',
  styleUrl: './contact.css',
  templateUrl: './contact.html',
})
export class Contact {
  
  sendEmail(): void {
    window.location.href =
      'mailto:carloshorrillo@hotmail.com?subject=Contacto desde Portfolio';
  }
}
