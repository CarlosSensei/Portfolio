import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  ViewChild
} from '@angular/core';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

@Component({
  selector: 'app-background',
  standalone: true,
  templateUrl: './background.html',
  styleUrls: ['./background.css']
})
export class Background implements AfterViewInit {

  @ViewChild('backgroundCanvas', { static: true })
  canvasRef!: ElementRef<HTMLCanvasElement>;

  private canvas!: HTMLCanvasElement;
  private ctx!: CanvasRenderingContext2D;

  private nodes: Node[] = [];

  private mouseX = 0;
  private mouseY = 0;

  private animationId = 0;

  private readonly NODE_COUNT = 120;
  private readonly CONNECTION_DISTANCE = 140;

  ngAfterViewInit(): void {

    this.canvas = this.canvasRef.nativeElement;
    this.ctx = this.canvas.getContext('2d')!;

    this.resizeCanvas();
    this.createNodes();

    this.animate();
  }

  @HostListener('window:resize')
  resizeCanvas(): void {

    if (!this.canvas) {
      return;
    }

    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {

    this.mouseX = event.clientX;
    this.mouseY = event.clientY;
  }

  private createNodes(): void {

    this.nodes = [];

    for (let i = 0; i < this.NODE_COUNT; i++) {

      this.nodes.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        radius: Math.random() * 2 + 1
      });
    }
  }

  private animate(): void {

    this.ctx.clearRect(
      0,
      0,
      this.canvas.width,
      this.canvas.height
    );

    this.drawMouseGlow();

    this.updateNodes();

    this.drawConnections();

    this.drawNodes();

    this.animationId = requestAnimationFrame(
      () => this.animate()
    );
  }

  private updateNodes(): void {

    this.nodes.forEach(node => {

      node.x += node.vx;
      node.y += node.vy;

      if (
        node.x < 0 ||
        node.x > this.canvas.width
      ) {
        node.vx *= -1;
      }

      if (
        node.y < 0 ||
        node.y > this.canvas.height
      ) {
        node.vy *= -1;
      }

      const dx = this.mouseX - node.x;
      const dy = this.mouseY - node.y;

      const distance = Math.sqrt(
        dx * dx + dy * dy
      );

      if (distance < 120) {

        node.x -= dx * 0.004;
        node.y -= dy * 0.004;
      }
    });
  }

  private drawNodes(): void {

    this.nodes.forEach(node => {

      this.ctx.beginPath();

      this.ctx.arc(
        node.x,
        node.y,
        node.radius,
        0,
        Math.PI * 2
      );

      this.ctx.fillStyle =
        'rgba(0,220,255,0.9)';

      this.ctx.shadowBlur = 12;
      this.ctx.shadowColor =
        '#00d4ff';

      this.ctx.fill();
    });
  }

  private drawConnections(): void {

    for (let i = 0; i < this.nodes.length; i++) {

      for (
        let j = i + 1;
        j < this.nodes.length;
        j++
      ) {

        const a = this.nodes[i];
        const b = this.nodes[j];

        const dx = a.x - b.x;
        const dy = a.y - b.y;

        const distance = Math.sqrt(
          dx * dx +
          dy * dy
        );

        if (
          distance <
          this.CONNECTION_DISTANCE
        ) {

          const opacity =
            1 -
            distance /
            this.CONNECTION_DISTANCE;

          this.ctx.beginPath();

          this.ctx.moveTo(a.x, a.y);

          this.ctx.lineTo(b.x, b.y);

          this.ctx.strokeStyle =
            `rgba(0,180,255,${
              opacity * 0.4
            })`;

          this.ctx.lineWidth = 1;

          this.ctx.stroke();
        }
      }

      const dx =
        this.mouseX -
        this.nodes[i].x;

      const dy =
        this.mouseY -
        this.nodes[i].y;

      const mouseDistance =
        Math.sqrt(
          dx * dx +
          dy * dy
        );

      if (mouseDistance < 180) {

        this.ctx.beginPath();

        this.ctx.moveTo(
          this.nodes[i].x,
          this.nodes[i].y
        );

        this.ctx.lineTo(
          this.mouseX,
          this.mouseY
        );

        this.ctx.strokeStyle =
          'rgba(0,255,255,0.35)';

        this.ctx.stroke();
      }
    }
  }

  private drawMouseGlow(): void {

    const gradient =
      this.ctx.createRadialGradient(
        this.mouseX,
        this.mouseY,
        0,
        this.mouseX,
        this.mouseY,
        250
      );

    gradient.addColorStop(
      0,
      'rgba(0,180,255,0.18)'
    );

    gradient.addColorStop(
      1,
      'rgba(0,180,255,0)'
    );

    this.ctx.fillStyle = gradient;

    this.ctx.fillRect(
      0,
      0,
      this.canvas.width,
      this.canvas.height
    );
  }
}