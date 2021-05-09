import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageCategoriesComponent } from './image-categories.component';

describe('ImageCategoriesComponent', () => {
  let component: ImageCategoriesComponent;
  let fixture: ComponentFixture<ImageCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
