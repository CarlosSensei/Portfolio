import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {

  projects = [
    {
      title: 'CRM Playground',
      description:
        'Aplicación CRM desarrollada en Angular para la gestión de clientes, presupuestos, pedidos y métricas de negocio.',

      image: 'crm-project.jpg',

      technologies: [
        'Angular',
        'TypeScript',
        'RxJS',
        'Tailwind'
      ],

      github:
        'https://github.com/CarlosSensei/CRM-PLAYGROUND',

      demo:
        '#',

      featured: true
    },

    {
      title: 'Optical CRM',

      description:
        'Gestión integral de clientes, graduaciones, presupuestos y seguimiento de pedidos.',

      image:
        'ojo.jpg',

      technologies: [
        'Angular',
        'Azure',
        'SQL'
      ],

      featured: false
    },

    {
      title: 'Analytics Dashboard',

      description:
        'Dashboard orientado a KPIs y reporting empresarial.',

      image:
        'dashboard.jpg',

      technologies: [
        'ChartJS',
        'Angular'
      ],

      featured: false
    },

    {
      title: 'AI Governance',

      description:
        'Panel de gestión y gobierno de iniciativas IA.',

      image:
        'brain.jpg',

      technologies: [
        'Azure AI',
        'Power Platform'
      ],

      featured: false
    },
    {
      title: 'AI Governance',

      description:
        'Panel de gestión y gobierno de iniciativas IA.',

      image:
        'brain.jpg',

      technologies: [
        'Azure AI',
        'Power Platform'
      ],

      featured: false
    }   
  ];

}