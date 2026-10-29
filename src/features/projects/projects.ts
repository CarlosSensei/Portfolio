import { Component, OnDestroy, OnInit, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-projects',
  templateUrl: './projects.html',
  styleUrl: './projects.css',
  imports: []
})
export class Projects implements OnInit, OnDestroy {

  private autoPlayId?: number;
  private cdr = inject(ChangeDetectorRef);

  ngOnInit(): void {
    this.startAutoPlay();
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
  }

  startAutoPlay(): void {
    
    this.stopAutoPlay();

    this.autoPlayId = window.setInterval(() => {
      
      if (this.expandedIndex === null) {
        this.next();
        this.cdr.detectChanges();
      }

    }, 2000);
  }

  stopAutoPlay(): void {

    if (this.autoPlayId) {
      clearInterval(this.autoPlayId);
      this.autoPlayId = undefined;
    }
  }

  activeIndex = 0;

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
      accentColor: '#3b82f6'
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
      title: 'NOVA Ecommerce',
      shortDescription:
        'Ecommerce premium de gadgets tecnológicos.',
      description: `Mini Ecommerce premium de pocos items centrado en la experiencia visual y el desarrollo horizontal. Estilo futurista. 
      Recrea las dinamicas básicas de un ecommerce pequeño. Falta backend y enlace con pasarelas de pago. Centrado en el ui y el storytelling `,
      image: 'ecommerce.jpg',
      technologies: [
        'GSAP',
        'Angular'
      ],
      challenges: ['Animaciones web', 'Narrativa visual', 'Dinamicas basicas de ecommerce'],
      github: 'https://github.com/CarlosSensei/mecommerce',
      demo: 'https://carlossensei.github.io/mecommerce/',
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

  get activeProject() {
    return this.projects[this.activeIndex];
  }

  setActive(index: number): void {
    this.activeIndex = index;
  }

  next(): void {
    this.activeIndex =
      (this.activeIndex + 1) % this.projects.length;
  }

  prev(): void {
    this.activeIndex =
      (this.activeIndex - 1 + this.projects.length)
      % this.projects.length;
  }

  expandedIndex: number | null = null;

  toggleCard(index: number): void {
    this.expandedIndex =
      this.expandedIndex === index ? null : index;
  }

  getTransform(index: number): string {

    const offset = index - this.activeIndex;

    return `
      translateX(${offset * 240}px)
      rotateY(${offset * -30}deg)
      scale(${offset === 0 ? 1 : 0.85})
    `;
  }

  getOpacity(index: number): number {
    return index === this.activeIndex ? 1 : 0.4;
  }

  getZIndex(index: number): number {
    return 100 - Math.abs(index - this.activeIndex);
  }

}