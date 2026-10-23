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
      demo: 'https://carlossensei.github.io/CRM-PLAYGROUND/',
      featured: true
    },

    {
      title: 'FastRead',
      shortDescription:
        'Mejora tu lectura con este entrenador palabra a palabra. Con velocidad modificable.',
      description:`
      Proyecto de lector de archivos de texto .txt .pdf y .epub que cargue el archivo del usuario y lo pase por el lector.
      El lector muestra palabra a palabra a una velocidad editable. Interfaz suave centrada en el foco en la palabra.
      `,
      image: 'ojo.jpg',
      technologies: [
        'Angular',
        'Typescript',
        'HTML',
        'CSS',
        'Epub'
      ],
      challenges: ['Arquitectura DDD', 'Desarrollo con Angular', 'Gestion de archivos txt, pdf y epub'],
      github: 'https://github.com/CarlosSensei/fastread',
      demo: 'https://carlossensei.github.io/fastread/',
      featured: false
    },

    {
      title: 'My Table App',
      shortDescription:
        'App de reservas de restaurantes. en construccion. Modo cliente ok, pendiente modo restaurante',
      description: ` Desarrollo de una app de reservas de mesas para restaurantes. Gestion de clientes, restaurantes, mesas, reservas... 
      Pendiente del desarrollo del modo restaurante para editar datos de contacto, mesas, gestionar reservas, etc... de momento solo usuarios clientes.
      Pendiente backend con springboot para BBDD y Auth.
      
      `,
      image: 'dashboard.jpg',
      technologies: [
        'Spring Boot',
        'Angular',
        'Git',
        'Typescript'
      ],
      challenges: ['Gestion de reservas', 'Gestion de usuarios y claves'],
      github: 'https://github.com/CarlosSensei/my-table-app',
      demo: 'https://carlossensei.github.io/my-table-app/',
      featured: false
    },

    {
      title: 'Brain Games',
      shortDescription:
        'Web de juegos mentales sencillos',
      description: `Web con juegos sencillos mentales tales como el ahorcado, sudoku, etc... 
      Se busca construir un gameplay en Angular donde crear juegos con lógicas más o menos complejas para crear pequeñas diversiones.
      Además de servir para profundizar en Angular y en proyectos de lógica `,
      image: 'games.jpg',
      technologies: [
        'Angular',
        'Github Pages',
        'Github'
      ],
      challenges: ['Logicas de juego', 'Desarrollo con Angular'],
      github: 'https://github.com/CarlosSensei/BrainGames',
      demo: 'https://carlossensei.github.io/BrainGames/',
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