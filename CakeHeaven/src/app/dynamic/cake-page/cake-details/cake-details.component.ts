import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { getPopperClassPlacement } from '@ng-bootstrap/ng-bootstrap/util/positioning';
import { Cake } from 'src/app/model/cake-model';
import { CakesService } from 'src/app/service/cakes.service';

@Component({
  selector: 'app-cake-details',
  templateUrl: './cake-details.component.html',
  styleUrls: ['./cake-details.component.css'],
})
export class CakeDetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute, private service: CakesService) {}
  id: number = 0;
  cake: Cake = new Cake();

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['x'];
      this.getCake();
    });
  }

  getCake() {
    this.service.getCake(this.id).subscribe({
      next: (data: Cake) => {
        console.log(data);
        this.cake = data;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
}
