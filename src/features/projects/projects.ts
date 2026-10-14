import { Component } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-projects',
  templateUrl: './projects.html',
  styleUrl: './projects.css',
  imports: [NgForOf, NgIf]
})
export class Projects {

  projects = [
    {
      title: 'CRM Playground',
      shortDescription:
        'Aplicación CRM desarrollada en Angular para la gestión de clientes, presupuestos, pedidos y métricas de negocio.',
      description:`
      Frontend de un CRM para retail óptica.
      Hace enfasis en un estilo minimalista y moderno que permite acceder a los datos de clientes, pedidos y presupuestos. 
      Además hay un dashboard de indicadores. Una seccion de login para acceder. 
      Es un test para preparar el frontend del crm optico en proceso.
      `,
      image: 'crm-project.jpg',

      technologies: [
        'Angular',
        'TypeScript',
        'RxJS',
        'Tailwind'
      ],
      challenges: ['Desarrollo con Angular', 'Seccion de login', 'Sidebar'],
      github: 'https://github.com/CarlosSensei/CRM-PLAYGROUND',
      demo: '#',
      featured: true
    },

    {
      title: 'Optical CRM',
      shortDescription:
        'Gestión integral de clientes, graduaciones, presupuestos y seguimiento de pedidos.',
      description:`
      Proyecto de un CRM funcional pensado para retail óptico.
      De momento es un MVP para presentar como TFG del grado de DAM.
      Intenta recoger todas las acciones del dia a dia en la relacion de empresa y clientes.
      Logica de negocio en un backend con Spring que da a traves de API rest la info al frontend de Angular
      `,
      image: 'ojo.jpg',
      technologies: [
        'Angular',
        'Spring Boot',
        'Java',
        'HTML',
        'CSS',
        'SQL'
      ],
      challenges: ['Arquitectura DDD', 'Desarrollo con Spring Boot', 'API REST'],
      github: 'https://github.com/CarlosSensei/CRM-PLAYGROUND',
      demo: '#',
      featured: false
    },

    {
      title: 'Analytics Dashboard',
      shortDescription:
        'Dashboard orientado a KPIs y reporting empresarial.',
      description: ` `,
      image: 'dashboard.jpg',
      technologies: [
        'ChartJS',
        'Angular'
      ],
      challenges: [],
      github: 'https://github.com/CarlosSensei/CRM-PLAYGROUND',
      demo: '#',
      featured: false
    },

    {
      title: 'AI Governance',
      shortDescription:
        'Panel de gestión y gobierno de iniciativas IA.',
      description: ` `,
      image: 'brain.jpg',
      technologies: [
        'Azure AI',
        'Power Platform'
      ],
      challenges: [],
      github: 'https://github.com/CarlosSensei/CRM-PLAYGROUND',
      demo: '#',
      featured: false
    },
    {
        title: 'AI Governance',
        shortDescription:
          'Panel de gestión y gobierno de iniciativas IA.',
        description: ` `,
        image: 'brain.jpg',
        technologies: [
          'Azure AI',
          'Power Platform'
        ],
        challenges: [],
        github: 'https://github.com/CarlosSensei/CRM-PLAYGROUND',
        demo: '#',
        featured: false
      }
  ];

  selectedProject: any = null;

  openProject(project: any): void {
    this.selectedProject = project;
  }

  closeProject(): void {
    this.selectedProject = null;
  }

}