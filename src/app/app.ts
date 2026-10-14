import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../core/components/header/header';
import { Footer } from '../core/components/footer/footer';
import { Background } from '../core/components/background/background';



@Component({
  imports: [RouterOutlet, Header, Footer, Background],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('portfolio');
}
