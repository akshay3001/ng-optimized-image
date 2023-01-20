import { provideHttpClient } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { PhotosContainerComponent } from './app/photos/photos-container/photos-container.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'photos' },
  { path: 'photos', component: PhotosContainerComponent },
  { path: '**', component: PhotosContainerComponent },
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes), provideHttpClient()],
});
