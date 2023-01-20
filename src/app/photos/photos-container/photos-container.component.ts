import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosItemComponent } from '../photos-item/photos-item.component';

@Component({
  selector: 'app-photos-container',
  standalone: true,
  imports: [CommonModule, PhotosItemComponent],
  template: `
    <p>photos-container works!</p>
    <app-photos-item></app-photos-item>
  `,
})
export class PhotosContainerComponent {}
