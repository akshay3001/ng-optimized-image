import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { Routes, provideRouter } from '@angular/router';
import { PhotosContainerComponent } from './photos/photos-container/photos-container.component';
import { provideClientHydration } from '@angular/platform-browser';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'photos' },
  { path: 'photos', component: PhotosContainerComponent },
  { path: '**', component: PhotosContainerComponent },
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideClientHydration(),
  ],
};
