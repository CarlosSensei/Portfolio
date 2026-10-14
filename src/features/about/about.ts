import { AfterViewInit, Component } from '@angular/core';


@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {

  metrics = [
    {
      value: '20+',
      label: 'Proyectos'
    },
    {
      value: '5+',
      label: 'Años de experiencia'
    },
    {
      value: '15+',
      label: 'Tecnologías'
    },
    {
      value: '100%',
      label: 'Compromiso'
    }
  ];

  skills = [
    {
      name: 'Software Development',
      value: 80
    },
    {
      name: 'Business Analysis & Digital Strategy',
      value: 90
    },
    {
      name: 'Stakeholder & Client Management',
      value: 75
    },
    {
      name: 'Structured Problem-Solving',
      value: 80
    },
    {
      name: 'AI & Data Governance',
      value: 70
    }
  ];

}
