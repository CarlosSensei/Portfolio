import { Component } from '@angular/core';
import { Hero } from '../hero/hero';
import { TechStackComponent } from '../tech-stack/tech-stack';
import { About } from '../about/about';
import { Projects } from '../projects/projects';
import { Contact } from '../contact/contact';


@Component({
  imports: [Hero, TechStackComponent, About, Projects, Contact],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
}
