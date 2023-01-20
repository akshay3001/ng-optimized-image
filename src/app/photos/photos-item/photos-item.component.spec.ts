import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosItemComponent } from './photos-item.component';

describe('PhotosItemComponent', () => {
  let component: PhotosItemComponent;
  let fixture: ComponentFixture<PhotosItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PhotosItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotosItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
