import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosItemComponent } from '../photos-item/photos-item.component';
import { PhotosService } from '../shared/services/photos.service';
import { Photo } from '../shared/models/photos.model';

@Component({
  selector: 'app-photos-container',
  standalone: true,
  imports: [CommonModule, PhotosItemComponent],
  template: `
    <h1>NgOptimizedImage</h1>
    <ng-container *ngIf="photos$ | async as photos; else loadingTemplate">
      <ng-container
        *ngFor="let photo of photos; let i = index; trackBy: trackByPhotos"
      >
        <app-photos-item [photo]="photo" [index]="i"></app-photos-item>
      </ng-container>
    </ng-container>
    <ng-template #loadingTemplate> Loading... </ng-template>
  `,
})
export class PhotosContainerComponent {
  photosService = inject(PhotosService);
  photos$ = this.photosService.photos$;

  trackByPhotos(index: number, photo: Photo) {
    return photo.id;
  }
}
