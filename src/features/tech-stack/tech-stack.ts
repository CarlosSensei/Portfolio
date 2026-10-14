import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tech-stack.html',
  styleUrl: './tech-stack.css'
})
export class TechStackComponent {

  technologies = [
    {
      name: 'Angular',
      icon: 'angular.svg'
    },
    {
      name: 'TypeScript',
      icon: 'typescript.svg'
    },
    {
      name: 'JavaScript',
      icon: 'javascript.svg'
    },
    {
      name: 'HTML5',
      icon: 'html5.svg'
    },
    {
      name: 'CSS3',
      icon: 'css3.svg'
    },
    {
      name: 'Java',
      icon: 'java.svg'
    },
    {
      name: 'Spring',
      icon: 'spring.svg'
    },
    {
      name: 'PostgresSQL',
      icon: 'postgressql.svg'
    },
    {
      name: 'Git',
      icon: 'git.svg'
    },
    {
      name: 'Docker',
      icon: 'docker.svg'
    },
    {
      name: 'Android Studio',
      icon: 'androidstudio.svg'
    },
    {
      name: 'Figma',
      icon: 'figma.svg'
    },
    {
      name: 'IntelliJ IDEA',
      icon: 'intellij.svg'
    },
    {
      name: 'Material UI',
      icon: 'materialui.svg'
    },
    {
      name: 'MongoDB',
      icon: 'mongodb.svg'
    },
    {
      name: 'NPM',
      icon: 'npm.svg'
    },
    {
      name: 'Python',
      icon: 'python.svg'
    },
    {
      name: 'React',
      icon: 'react.svg'
    },
    {
      name: 'Tailwind CSS',
      icon: 'tailwindcss.svg'
    },
    {
      name: 'Three.js',
      icon: 'threejs.svg'
    },
    {
      name: 'Unity',
      icon: 'unity.svg'
    },
    {
      name: 'VS Code',
      icon: 'vscode.svg'
    },
    {
      name: 'Vite',
      icon: 'vite.svg'
    },
    {
      name: 'Webflow',
      icon: 'webflow.svg'
    },
  ];
}