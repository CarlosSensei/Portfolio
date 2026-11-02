import { AfterViewInit, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
    selector: 'app-time-line',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './time-line.html',
    styleUrl: './time-line.css'
})
export class TimeLineComponent implements AfterViewInit {

    timelineItems = [
        {
            year: '2026 - Actualidad',
            title: 'Software Engineer Intern',
            company: 'Capgemini',
            description: 'Desarrollo de Aplicaciones Corporativas.'
        },
        {
            year: '2025 - 2026',
            title: 'FullStack Developer Student',
            company: 'Prometeo FP',
            description: 'Desarrollo de Aplicaciones multiplataforma.'
        },   
        {
            year: '2024 - 2025',
            title: 'Director de Tienda',
            company: 'Grupo Ametller',
            description: 'Director de Tienda de alimentación.'
        },
        {
            year: '2020 - 2024',
            title: 'Lider Mundo Proyectos',
            company: 'Leroy Merlin',
            description: 'Líder de las secciones proyecto.'
        },
        {
            year: '2019 - 2020',
            title: 'Sales Area Manager',
            company: 'Angel Eyes Eyewear',
            description: 'Responsable ventas zona NorEste.'
        },
        {
            year: '2007 - 2019',
            title: 'Director Tienda',
            company: 'Óptica y Audiología Universitaria',
            description: 'Director de tienda.'
        }
    ];

    ngAfterViewInit(): void {

        gsap.from('.section-title', {
            y: 100,
            opacity: 0,
            duration: 1
        });

        gsap.from('.timeline-item', {
            opacity: 0,
            y: 100,
            duration: 1,
            stagger: 0.25,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.timeline',
                start: 'top 80%'
            }
        });

        gsap.to('.timeline-progress', {
            height: '100%',
            ease: 'none',
            scrollTrigger: {
                trigger: '.timeline',
                start: 'top center',
                end: 'bottom center',
                scrub: true
            }
        });
    }

}