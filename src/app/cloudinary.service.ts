import { Injectable } from '@angular/core';
import { Cloudinary, CloudinaryImage } from '@cloudinary/url-gen';
import { fill } from '@cloudinary/url-gen/actions/resize';

@Injectable({
  providedIn: 'root'
})
export class CloudinaryService {
  private cloudinary!: Cloudinary;

  constructor() {
    this.initializeCloudinary();
  }

  private initializeCloudinary() {
    this.cloudinary = new Cloudinary({
      cloud: {
        cloudName: 'eskalate',
        // apiKey: 'YOUR_API_KEY',
        // apiSecret: 'YOUR_API_SECRET',
      },
    });
  }

  generateImageUrl(publicId: string): CloudinaryImage {
    const img = this.cloudinary.image(publicId);
    
     img.resize(fill().width(1280).height(720));
    return img;
  }
}
