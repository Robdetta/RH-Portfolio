import { Injectable } from '@angular/core';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
}

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  private projects: Project[] = [
    {
      id: 1,
      title: 'BrewTrail',
      description:
        'A social media platform for craft beer enthusiasts to discover, review, and share their favorite breweries. Features real-time updates, user authentication, and integration with the Open Brewery API for comprehensive brewery data.',
      image: 'assets/projects/brewtrail.jpg',
      technologies: ['React', 'Node.js', 'PostgeSQL', 'Open Brewery API'],
      githubUrl: 'https://github.com/Robdetta/brewtrail',
      liveUrl: 'https://brewtrail.robbiehem.dev',
    },
    {
      id: 2,
      title: 'DeckroidVania',
      description:
        'A 2.5D action-adventure game built in Godot with C#. Features dynamic combat mechanics, intricate level design, and immersive gameplay inspired by classic metroidvania titles.',
      image: 'assets/projects/deckroidvania.jpg',
      technologies: ['Godot', 'C#', 'Game Design'],
      githubUrl: 'https://github.com/Robdetta/DeckroidVania',
    },
    {
      id: 3,
      title: 'Catte',
      description:
        'An online multiplayer card game built with vanilla JavaScript and WebSockets. Supports real-time multiplayer gameplay, strategic card mechanics, and smooth cross-browser compatibility.',
      image: 'assets/projects/catte.jpg',
      technologies: ['JavaScript', 'WebSockets', 'HTML5', 'CSS3'],
      githubUrl: 'https://github.com/Robdetta/Catte',
    },
    {
      id: 4,
      title: 'Typing Game',
      description:
        'An engaging typing speed test game with real-time performance metrics, difficulty levels, and leaderboard functionality. Built to improve typing skills through interactive gameplay.',
      image: 'assets/projects/typing-game.jpg',
      technologies: ['JavaScript', 'HTML5', 'CSS3'],
      githubUrl: 'https://github.com/Robdetta/Typing-Game',
    },
  ];

  constructor() {}

  getAllProjects(): Project[] {
    return this.projects;
  }

  getProjectById(id: number): Project | undefined {
    return this.projects.find((project) => project.id === id);
  }

  addProject(project: Project): void {
    project.id = Math.max(...this.projects.map((p) => p.id), 0) + 1;
    this.projects.push(project);
  }
}
