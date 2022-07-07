import { Component, OnInit } from '@angular/core';
import { CakeImage } from 'src/app/model/cake-image-model';
import { CakesService } from 'src/app/service/cakes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  imagesFromServer: CakeImage[] = [];

  constructor(private service: CakesService) {}

  ngOnInit(): void {
    this.getImages();
  }

  getImages() {
    this.service.getCakeImages().subscribe({
      next: (data: CakeImage[]) => {
        console.log(data);
        this.imagesFromServer = data;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
}
