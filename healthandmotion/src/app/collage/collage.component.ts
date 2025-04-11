import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-collage',
  imports: [CommonModule],
  templateUrl: './collage.component.html',
  styleUrl: './collage.component.scss'
})
export class CollageComponent {
  images: string[] = [
    'assets/gym1.png',
    'assets/gym2.png',
    'assets/gym3.png',
    'assets/gym4.png',
    'assets/gym5.png',
    'assets/gym6.png',
    'assets/gym7.png',
    'assets/gym8.png'
  ];

  selectedImage: string | null = null;

  openImage(image: string) {
    this.selectedImage = image;
  }

  closeImage() {
    this.selectedImage = null;
  }
}
