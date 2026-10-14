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
      value: '15+',
      label: 'Proyectos'
    },
    {
      value: '20+',
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
      value: 70
    },
    {
      name: 'Business Analysis & Digital Strategy',
      value: 90
    },
    {
      name: 'Stakeholder & Client Management',
      value: 85
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
