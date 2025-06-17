import { Component, OnInit } from '@angular/core';
import { gallery } from './constants';

@Component({
  selector: 'app-art-gallery',
  templateUrl: './art-gallery.component.html',
  styleUrls: ['./art-gallery.component.scss'],
})
export class ArtGalleryComponent implements OnInit {
  gallery = gallery;
  lightboxImage: any;
  modalActive = false;

  lightBox(image: any) {
    this.lightboxImage = image;
    this.modalActive = true;
  }

  constructor() {}

  ngOnInit(): void {}
}
