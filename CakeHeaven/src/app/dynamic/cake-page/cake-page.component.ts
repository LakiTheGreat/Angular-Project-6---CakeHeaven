import { Component, OnInit } from '@angular/core';
import { Cake } from 'src/app/model/cake-model';
import { CakesService } from 'src/app/service/cakes.service';

@Component({
  selector: 'app-cake-page',
  templateUrl: './cake-page.component.html',
  styleUrls: ['./cake-page.component.css'],
})
export class CakePageComponent implements OnInit {
  cakes: Cake[] = [];
  ingredients: string[] = [];
  constructor(private service: CakesService) {}

  params = {
    sort: 'name',
    sortDirection: 'asc',
    filter: {
      ingredients: '',
    },
  };
  ngOnInit(): void {
    this.getCakes();
    this.getIngredients();
  }

  getCakes() {
    this.service.getCakes(this.params).subscribe({
      next: (data: Cake[]) => {
        console.log(data);
        this.cakes = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getIngredients() {
    this.service.getIngredients().subscribe((ingredients: string[]) => {
      this.ingredients = ingredients;
    });
  }

  toggleDirection() {
    console.log(this.params.sortDirection);
    this.params.sortDirection == 'asc'
      ? (this.params.sortDirection = 'desc')
      : (this.params.sortDirection = 'asc');
    console.log(this.params.sortDirection);
    this.getCakes();
  }
}
